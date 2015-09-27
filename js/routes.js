(function() {
  angular.module("QQIQ")
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/pages/top/index.html',
          activeTab: 'Home'
        })
        .when('/musics', {
          templateUrl: 'templates/pages/musics/index.html',
          controller: 'MusicController',
          controllerAs: 'music',
          activeTab: 'Music'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
