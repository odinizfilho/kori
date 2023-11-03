<?php

require __DIR__ . '/../vendor/autoload.php';

// Configuração do Whoops
$whoops = new Whoops\Run;
$whoops->pushHandler(new Whoops\Handler\PrettyPageHandler);
$whoops->register();

use FastRoute\Dispatcher;
use FastRoute\RouteCollector;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

// Carregue as rotas a partir do arquivo routes.php
$routes = require __DIR__ . '/../routes.php';

$dispatcher = \FastRoute\simpleDispatcher(function (RouteCollector $r) use ($routes) {
    foreach ($routes as $route) {
        [$httpMethod, $routePath, $handler] = $route;
        $r->addRoute($httpMethod, $routePath, $handler);
    }
});

$request = Request::createFromGlobals();

$httpMethod = $request->getMethod();
$uri = $request->getPathInfo();

// Verifique se o arquivo solicitado existe na pasta "public"
$publicPath = __DIR__ . '/../public' . $uri;
if (is_file($publicPath)) {
    // Se o arquivo existe, sirva-o diretamente
    $response = new Response(file_get_contents($publicPath));
    $response->send();
    exit;
}

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);

switch ($routeInfo[0]) {
    case Dispatcher::NOT_FOUND:
        http_response_code(404);
        echo 'Página não encontrada';
        break;

    case Dispatcher::METHOD_NOT_ALLOWED:
        http_response_code(405);
        echo 'Método não permitido';
        break;

    case Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];

        list($controllerClass, $actionMethod) = explode('@', $handler);

        // Carregue o controlador
        $controller = new $controllerClass();

        // Chame a ação correspondente
        $response = $controller->$actionMethod($vars);

        // Certifique-se de que a ação do controlador retornou uma instância válida de Response
        if ($response instanceof Response) {
            // Exiba a resposta
            $response->send();
        } else {
            http_response_code(500);
            echo 'Erro interno do servidor';
        }
        break;
}
