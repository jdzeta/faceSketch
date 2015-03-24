angular
  .module('FaceSketch', ['ngMaterial', 'ngRoute', 'ngCordova'])
  .config(function ($mdThemingProvider, $routeProvider) {
     $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'vm'
        })
        .when('/picture', {
          templateUrl: 'views/picture.html',
          controller: 'PictureCtrl',
          controllerAs: 'vm'
        })
        .when('/picture/:id?', {
          templateUrl: 'views/picture.html',
          controller: 'PictureCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('teal');
  });

