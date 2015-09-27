(function() {
  angular.module("QQIQ")
    .directive("navbar", function() {
      return {
        restrict: "E",
        templateUrl: "templates/pages/navbar.html",
        controller: ['$route', function($route) {
          this.isSelected = function(page) {
            return page == $route.current.activeTab;
          };
        }],
        controllerAs: "navbar"
      };
    });
})();
