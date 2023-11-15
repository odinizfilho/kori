<?php

namespace Kori\Controllers;

use Symfony\Component\HttpFoundation\Response;
use KoriViews\Template;

class HomeController
{
    public function index()
    {
        $template = new Template(); // Crie uma instância da classe Template
        $template->setTemplateDirectory(__DIR__.'/../../views');
        $data = ['koriversion' => '<p>Kori versão: Dev</p>'];
        $content = $template->render('index.html', $data);
        $response = new Response($content);
        return $response;
    }

    
    function apiexemple() {
        $url = "https://mundocoop.com.br/feed/";
    
        // Função para criar uma resposta com o conteúdo
        function createResponse($content) {
            $response = new Response($content);
            return $response;
        }
    
        function obterNoticiasDoFeed($url) {
            // Carrega o conteúdo do feed RSS
            $feed = simplexml_load_file($url);
    
            if ($feed) {
                $noticias = array();
                header('Content-Type: application/json');
                // Itera sobre os itens do feed
                foreach ($feed->channel->item as $item) {
                    $noticia = array(
                        'titulo' => (string)$item->title,
                        'link' => (string)$item->link,
                        'data' => (string)$item->pubDate,
                        'descricao' => (string)$item->description,
                    );
    
                    // Adicione a notícia ao array de notícias
                    $noticias[] = $noticia;
                }
    
                // Transforme o array de notícias em JSON
                $jsonNoticias = json_encode($noticias);
    
                // Crie uma resposta com o JSON de notícias
                return createResponse($jsonNoticias);
            } else {
                // Se a função retornar false, crie um array JSON com a mensagem de erro
                $erro = array('mensagem' => 'Não foi possível carregar as notícias do feed');
    
                // Transforme o array de erro em JSON
                $jsonErro = json_encode($erro);
                header('Content-Type: application/json');
                // Crie uma resposta com o JSON de erro
                return createResponse($jsonErro);
            }
        }
    
        // Obter notícias
        $noticias = obterNoticiasDoFeed($url);
    
        // Envie a resposta
        return $noticias;
    }
    
  
    
}
