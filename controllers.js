(function() {

    var app = angular.module('learningAngularJS', []);
    var controllers = {};
    controllers.SimpleController = simpleController;

    
    app.controller(controllers);

    function simpleController($scope) {
        $scope.initialCustomers = [{
            name: 'Juan',
            city: 'Aranda'
        }, {
            name: 'Hasmin',
            city: 'Berna'
        }, {
            name: 'Lucia',
            city: 'Cavite'
        }, {
            name: 'Lucas',
            city: 'Sidney'
        }, {
            name: 'Irene',
            city: 'Madrid'
        }, {
            name: 'Santiago',
            city: 'Zaragoza'
        }];
    }


})();