var qqiqApp = angular.module('qqiqApp', []);

qqiqApp.controller('MusicListCtrl', function($scope) {
  $scope.musics = [
    {'name': 'Saori',
      'url': 'https://www.youtube.com/watch?v=MICaFh7kFmM'},
    {'name': 'MOTHER',
      'url': 'https://www.youtube.com/watch?v=dnDUfSlRCBo'}
  ];
});
