(function() {

    var app = angular
        .module('learningAngularJS', ['ngRoute']);

    var controllers = {};
    var factories = {};

    app.controller(controllers);
    app.factory(factories);

    factories.customerFactory = customerFactoryHarcodedValues;
    controllers.SimpleController = simpleController;

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

    function simpleController($scope, customerFactory) {

        $scope.customers = customerFactory.getCustomers();

        $scope.addCustomer = function() {
            customerFactory.postCustomer($scope.newCustomer);
            // Substituing here the code and using the 
            // $scope.customers.push({
            //     name: $scope.newCustomer.name,
            //     city: $scope.newCustomer.city
            // });
        }
    }

    function customerFactoryHarcodedValues() {
        var customersDb = {};
        var customers = [{
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
        customersDb.getCustomers = function() {
            // Here your db async call
            return customers;
        };
        customersDb.postCustomer = function(customer) {
            // Here your call to the db
            customers.push({name:customer.name,city:customer.city});

        };

        return customersDb;
    }


})();