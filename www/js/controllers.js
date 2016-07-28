angular.module('starter')
  .controller('mainCtrl', function ($scope, $state, resize) {

    $scope.goToPlugins = function () {
      $state.go('plugins');
    };


  })

  .controller('pluginsCtrl', function ($scope, $state, resize) {

    $scope.goToMain = function () {
      $state.go('main');
    };

    var pluginsList = [
      {
        name: 'Google Calendar',
        icon: 'img/note_2.svg'
      },
      {
        name: 'Weather',
        icon: 'img/weather.svg'
      },
      {
        name: 'Morning Exercises',
        icon: 'img/Dumbbell.svg'
      }
    ];

    $scope.pluginsList = [];
    for (var i = 0; i < 100; i++) {
      pluginsList.forEach(function (item) {
        $scope.pluginsList.push(item);
      })
    }

  })

;
