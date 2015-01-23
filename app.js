(function() {

    var app = angular.module('learningAngularJS', ['ngRoute']);

    var controllers = {};

    controllers.SimpleController = simpleController;

    app.controller(controllers);
    app.config(routerProvider);

    function routerProvider($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Partials/View1.html',
                controller: 'SimpleController'
            })
            .when('/view2', {
                templateUrl: 'Partials/View2.html',
                controller: 'SimpleController'
            })
            .when('/view3', {
                templateUrl: 'Partials/View3.html',
                controller: ''
            })
            .otherwise({
                redirectTo: '/'
            })
    }

    function simpleController($scope) {
        $scope.customers = [{
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

        $scope.addCustomer = function() {
            $scope.customers.push({
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
        }
    }


})();