// Primeiro modulo da aplicação, associado ao 'ng-app' da tag HTML.
// Se tiver chaves significa que o modulo está sendo criado, senão apenas chamado.

// É necessario informar os modulos a serem usados como no caso do modulo de diretivas.

// ngAnimate é usado na animação do filtro.
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])

// Sistema de rotas do AngularJS
// O $routeProvider e o $locationProvider são injeções de dependência (igual a qualquer outro modulo).
.config(function($routeProvider, $locationProvider) {

	// Serve para esconder o "#" do endereço e fazer com que a barra de endereços se comporte como um HTML normal.
	$locationProvider.html5Mode(true);

	// Quando o .when() acessar uma rota, enviaremos a ele um "partial template" para ser inserido na lacuna do "index.html"
	$routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
        });

    // Código referente a inclusão de imagens
    $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

    // Código referente a edição de imagens
    // O "/:fotoId" representa o id da foto a ser editada
        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

    // Serve para redirecionar o usuário caso ele entre em um endereço inválido.
    $routeProvider.otherwise({redirectTo: '/fotos'});
});