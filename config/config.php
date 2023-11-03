<?php 

namespace Kori;

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Resto do código

// Configurações do banco de dados
$dbHost = $_ENV['DB_HOST'];
$dbName = $_ENV['DB_NAME'];
$dbUser = $_ENV['DB_USER'];
$dbPass = $_ENV['DB_PASS'];

// Outras configurações
$apiKey = $_ENV['API_KEY'];

// Você pode adicionar mais configurações conforme necessário

// Por exemplo, para imprimir as configurações do banco de dados
echo "DB Host: $dbHost\n";
echo "DB Name: $dbName\n";
echo "DB User: $dbUser\n";
echo "DB Password: $dbPass\n";
