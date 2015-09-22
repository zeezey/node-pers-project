var app = angular.module('myApp');

app.service('movieService', function($http, $q){

    this.getMovieData = function (movie) {
        var deferred = $q.defer(); //always use this when $q
//        console.log(4444444, deferred);
        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?t=' + movie + '&tomatoes=true&plot=full&r=json'
        }).then(function (response) {
            console.log('22222', response);
            var titleData = response.data;
//            var data = {
//                    Title: titleData.Title,
//                    Year: titleData.Year,
//                    Rated: titleData.Rated,
//                    Released: titleData.Released,
//                    Runtime : titleData.Runtime,
//                    Genre: titleData.Genre,
//                    Director: titleData.Director,
//                    Poster: titleData.Poster
//                }
            deferred.resolve(titleData);
            });



        return deferred.promise;
    };
});
