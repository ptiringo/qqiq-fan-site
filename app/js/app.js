var app = angular.module("qqiq", []);

var music = {
  title: "People's Life",
  releaseDate: "2013/04/28",
  composer: "橋爪 裕",
  songwriter: "橋爪 裕"
};

app.controller("MusicController", function() {
  this.list = music;
});
