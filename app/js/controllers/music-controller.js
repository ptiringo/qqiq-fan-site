(function() {
  angular.module("QQIQ")
    .controller("MusicController", ['$http', function($http) {
      var controller = this;
      controller.musics = [];
      $http.get('musics.json').success(function(data) {
        controller.musics = data;
      });
    }]);
})();
