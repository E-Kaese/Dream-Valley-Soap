var app = angular.module('main', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});