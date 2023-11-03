
# Kori é o seu mais novo framework PHP

 Um novo framework para quem deseja simplicidade. Desenvolvido com foco na eficiência e facilidade de uso, Kori oferece recursos poderosos e uma abordagem direta para o desenvolvimento de projetos web. Com suporte total ao Tailwind CSS e Preactjs, você terá todas as ferramentas necessárias para criar interfaces elegantes e responsivas. 


## Autores

- [@odinizfilho](https://www.github.com/odinizfilho)


## Criando um Controlador

Para criar um novo controlador em seu projeto, siga estas etapas:

Crie um novo arquivo PHP na pasta de controladores do seu projeto, por exemplo, app/Controllers/NovoController.php.

Ou
```bash
composer make-controller NomeControlador
```

Defina a classe do controlador e implemente a lógica desejada:

```php
namespace Kori\Controllers;

class NovoController
{
    public function index()
    {
        // Implemente a lógica da ação "index" aqui
    }

    // Adicione outras ações conforme necessário
}

```
Registre o controlador nas rotas  (veja a seção de "Definição de Rotas" a seguir).

## Definição de Rotas

As rotas são definidas no arquivo routes.php. Aqui está um exemplo de como definir rotas:

```php
use Kori\Controllers\NovoController;

return [
    ['GET', '/', NovoController::class . '@index'],
    // Adicione mais rotas conforme necessário
];

```
Neste exemplo, estamos definindo uma rota GET para a raiz do aplicativo (/) que aponta para a ação index do controlador NovoController. Você pode adicionar mais rotas conforme necessário para o seu projeto.

## Uso do Preact.js

PreactJS é uma biblioteca JavaScript de código aberto que oferece uma alternativa mais leve e rápida ao React para o desenvolvimento de interfaces de usuário.

Criar um componente usando Kori
```bash
composer make-preact Nomecomponent
```

[Documentação Preact.js](https://preactjs.com/guide/v10/getting-started)




## Licença

[MIT](https://choosealicense.com/licenses/mit/)

