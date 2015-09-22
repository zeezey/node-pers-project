var app = angular.module('myApp');

//app.controller('MovieController', function($scope, $http){
//    var pendingTask;
//
//    if($scope.search === undefined){
//      $scope.search = "Iron Man";
//      fetch();
//    }
//
//    $scope.change = function(){
//      if(pendingTask){
//        clearTimeout(pendingTask);
//      }
//      pendingTask = setTimeout(fetch, 800);
//    };
//
//    function fetch(){
//      $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
//       .success(function(response){ $scope.details = response;
//                                   console.log('22222', response);});
//
//
//      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
//       .success(function(response){  $scope.related = response; });
//    }
//
//    $scope.update = function(movie){
//      $scope.search = movie.Title;
//      $scope.change();
//    };
//
//    $scope.select = function(){
//      this.setSelectionRange(0, this.value.length);
//    };
//  });
app.controller('mainCtrl', function($scope, movieService){
    $scope.getMovieData = function (movie) {
        movieService.getMovieData(movie).then(function (response){
            $scope.movieData = response;  //returns promise response from Service.
            console.log(1212121212, $scope.movieData.Title)
        });
    };
});
