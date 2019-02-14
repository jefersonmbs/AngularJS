app.controller("listaTelefonicaCtrl", function ($scope) {

    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Jeferson", telefone: "999999999", },
        {nome: "Jeferson", telefone: "999999999", },
        {nome: "Jeferson", telefone: "999999999", }
    ];

    $scope.operadoras = [
        {nome:"TIM", codigo: 41, categoria: "Celular"},
        {nome:"Claro", codigo: 21, categoria: "Celular"},
        {nome:" CTBC Telecom", codigo: 12, categoria: "Celular"},
        {nome:"Oi", codigo: 31, categoria: "Celular"},
        {nome:"Vivo", codigo: 15, categoria: "Celular"},
        {nome:"Sercomtel", codigo: 43, categoria: "Celular"},
        {nome:"NEXTEL", codigo: 0, categoria: "Celular"},
        {nome:"Vivo", codigo: 15, categoria: "Fixo"},
        {nome:"Brasil Telecom", codigo: 14, categoria: "Fixo"},
        {nome:"GVT", codigo: 25, categoria: "Fixo"}


    ];

    $scope.adicionarContato = function (contato) {

        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();

    };

    $scope.apagarContatos = function (contatos) {

       $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado)
                return contato;
        });

    };

    $scope.isContatoSelecionado = function (contatos) {

            return contatos.some(function (contato) {

            return contato.selecionado;

        });

    };
});
