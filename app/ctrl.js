var app = angular.module('myApp');
app.controller('mainCtrl', function($scope, movieService){
    $scope.getMovieData = function (movie) {
        movieService.getMovieData(movie).then(function (response){
            $scope.movieData = response;  //returns promise response from Service.
            console.log(1212121212, $scope.movieData.Title);
        });
    };
});
app.controller('gCtrl', function($scope, gService){
    $scope.getGenreData = function (genre) {
        gService.getGenreData(genre).then(function (response){
            $scope.gData = response;  //returns promise response from Service.
            console.log(2343242, $scope.gData);
    });
};
});
