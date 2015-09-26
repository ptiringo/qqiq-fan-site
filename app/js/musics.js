(function() {
  var app = angular.module("qqiq-musics", []);

  app.directive("musicPage", ['$http', function($http) {
    return {
      restrict: "E",
      templateUrl: "html/music-page.html",
      controller: function() {
        var music = this;
        music.musics = [];
        $http.get('musics.json').success(function(data) {
          music.musics = data;
        });
      },
      controllerAs: "music"
    };
  }]);

  var musics = [];

})();
