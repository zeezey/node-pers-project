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

app.service('gService', function($http, $q){
this.getGenreData = function (genre) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.themoviedb.org/3/genre/' + genre + '/movies?api_key=790ad4e71f7dae563114358d076d138e'
        }).then(function (response) {
            console.log('22222', response);
            var genreData = response.data.results;
            var genreArr = [];
            for(var i = 0; i < genreData.length; i++){ //loop through all objects returned from promise
                genreArr.push({
                    Title: genreData[i].original_title,
                    Release: genreData[i].release_date,
                    Vote: genreData[i].vote_average,
                    Poster: genreData[i].poster_path

                });
            }
            deferred.resolve(genreArr);
});
                return deferred.promise;
                };
});
