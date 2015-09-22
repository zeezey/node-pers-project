'use strict';

var app = angular.module('myApp', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
             when('/home', {
                    templateUrl: 'index.html',
                    controller: 'HomeController'
            }).
            when('/genre', {
                 templateUrl: '/views/genre.html',
                controller: 'GenreController'

                });

}]);

app.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}]);
app.controller('HomeController', ['$routeParams', function($routeParams) {
  this.name = "HomeController";
  this.params = $routeParams;
}]);
app.controller('GenreController', ['$routeParams', function($routeParams) {
  this.name = "GenreController";
  this.params = $routeParams;
}]);

