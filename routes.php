<?php



use Kori\Controllers\HomeController;

return [
    ['GET', '/', HomeController::class . '@index'],
    ['GET', '/api', HomeController::class . '@apiexemple'],
    // Adicione mais rotas conforme necessário
];



