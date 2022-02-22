// Criação de um controller para o modulo "alurapic".
// O $scope é uma forma de fazer com que tudo que está dentro da function tenha a visibilidade "public".
// O acesso aos atributos é feito atraves do "$scope.foto".
// Os valores declarados substituem o src="{{foto.url}}" alt="{{foto.titulo}}" no HTML atraves de um Binding Data.


/* É necessario adicionar um $http para realizar as consultas AJAX. */
/* A ordem dos paramentro na function não interferem no funcionamento. (Injeção de dependência não tem ordem.) */
angular.module('alurapic').controller('FotosController', function($scope, $http) {

    /* É possivel criar uma lista dentro de scope.fotos
    $scope.fotos = [
        {titulo : 'Leão',
        url : 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg'},
        {titulo : 'Rinoceronte',
        url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Schwarzes_Nashorn-01.jpg/1200px-Schwarzes_Nashorn-01.jpg'},
        {titulo : 'Zebra',
        url : 'https://s2.glbimg.com/yjjF3c55vfGCU-aps0DlzStPwV4=/e.glbimg.com/og/ed/f/original/2019/02/21/800px-common_zebra_1.jpg'}
    ];*/

    $scope.fotos = [];

    // Objeto que armazena o texto digitado na barra de filtros.
    // Two-Way Data Binding (lendo e escrevendo dados atraves de Angular Expressions).
    $scope.filtro = '';

    // Realizando a construção da galeria com requisições AJAX (http://localhost:3000/v1/fotos)

    /* O promise faz a promessa de ir buscar atraves do get.
    var promise = $http.get('/v1/fotos');
    // Caso seu retorno seja positivo, os dados da consulta de "retorno" seram enviados para "$scope.fotos"
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
    })
    // Em caso de erro, a mensagem será enviado ao "console.log()".
    .catch(function(erro) {
        console.log(erro)
      }); */


    // A requisição é realizada e em caso se sucesso ela executa a função que adiciona o dados buscados no "@scope.fotos".
    $http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; // Não precisa fazer o "retorno.data".
    })
    // Em caso de erro, ele será exibido com o console.log()
    .error(function(erro) {
        console.log(erro);
    });


    // Código responsavel por remover as fotos da lista.
    // Recebe como parametro o valor de "ng-repeat" do elemento da lista.
    $scope.remover = function(foto) {
        // Realiza a remoção do elemento cadastrado utilizando o "._id".
        $http.delete('/v1/fotos/' + foto._id)
        .success(function() {

            // Busca o indice do elemento a ser removido
            var indiceDaFoto = $scope.fotos.indexOf(foto);

            // Remove o inten da lista visualmente
            $scope.fotos.splice(indiceDaFoto, 1);

            console.log('Foto ' + foto.titulo + ' removida com sucesso!'); // Mensagem de sucesso

        })
        .error(function(erro) {
            console.log('Não foi possível apagar a foto ' + foto.titulo); // Mensagem de erro
        });
    };

});