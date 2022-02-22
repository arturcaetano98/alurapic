// Criação do grupo "GruposController" no modulo "alurapic".
angular.module('alurapic').controller('GruposController', function($scope, $http){

	$scope.grupos = [];

	// Pagina que contem o arquivo com os grupos
	$http.get('/v1/grupos')
	.success(function(grupos){
		// Adiciona os valores obtidos na consulta no $scope.grupos.
		$scope.grupos = grupos;
	})
	.error(function(erro){
		console.log(erro);
	});

});