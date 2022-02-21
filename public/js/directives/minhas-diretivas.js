// As diretivas são usadas para criar elementos customizados de HTML com AngularJS.
// Declaração de um novo modulo. É necessario o chamar no "index.html".



// O nome declarado no "directive" como o "meuPainel" abaixo sera acessado como "meu-painel" no HTML.
// Ou <div meu-painel></div meu-painel>
angular.module('minhasDiretivas', []).directive('meuPainel', function() {
		
		// Directive Definition Object (DDO)
		// Diretivas podem ser usadas como E*lemento, *Atributo ou C*omentário
        var ddo = {};

        ddo.restrict = "AE"; // Definição do "Atributo" e "Elemento".

        ddo.scope = {
            titulo: '@' // Objeto que receberá o titulo do painel, usando o valor que estiver dentro do atributo "titulo" no HTML. 
        };

        // Ativa o transclude para realizar a inserção de tags dentro da diretiva.
        ddo.transclude = true;

        /* Declaração do texto a ser usado como corpo na diretiva 
        ddo.template = 
                '<div class="panel panel-default">'
            +   '   <div class="panel-heading">'
            +   '        <h3 class="panel-title text-center">{{titulo}}</h3> '
            +   '   </div>'
            +   '   <div class="panel-body" ng-transclude>' // Transclude é usado para adicionar a tag "img" dentro da diretiva. Sem isso a imagem não é exibida. 
            +   '   </div>'
            +   '</div>'; */

        /* Declaração do arquivo a ser usado como corpo na diretiva */
        ddo.templateUrl = "js/directives/meu-painel.html";

        return ddo;
    });