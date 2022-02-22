// Não ponha [], não estamos criando um modulo, mas sim usando o que já existe.
angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

	// Dados do ng-model seram enviados para ca. E ainda seram Two-Way Data Binding...
	 $scope.foto = {};
        $scope.mensagem = '';


	// Código responsavel pela edição
	if($routeParams.fotoId) {

	// busca a foto no servidor
	$http.get('/v1/fotos/' + $routeParams.fotoId)
		.success(function(foto) {
			$scope.foto = foto;
		})
		.error(function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	}

	// Método contido dentro do formulário do arquivo "foto.html".
		$scope.submeter = function() {

            if ($scope.formulario.$valid) {

                if($routeParams.fotoId) {

                    $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .success(function() {
                        $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada';

                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                    });

                } else {                
                    $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    })
                }
            }
        };
})