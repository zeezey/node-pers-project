'use strict';

angular.module('myApp', ['ngRoute'])
  .controller('MovieController', function($scope, $http){
    var pendingTask;

    if($scope.search === undefined){
      $scope.search = "Sherlock Holmes";
      fetch();
    }

    $scope.change = function(){
      if(pendingTask){
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch(){
      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
       .success(function(response){ $scope.details = response; });

      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
       .success(function(response){  $scope.related = response; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
      $scope.change();
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    };
  });
