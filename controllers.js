(function() {
    var app = angular.module('learningAngularJS', []);
    app.controller('SimpleController', simpleController);

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