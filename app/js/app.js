(function() {
  var app = angular.module("qqiq", ["qqiq-musics"]);

  app.controller("PageController", function() {
    this.page = 1;

    this.setPage = function(page) {
      this.page = page;
    };
    this.isSelected = function(page) {
      return this.page === page;
    };
  });

})();
