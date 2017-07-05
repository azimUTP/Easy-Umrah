// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('fyp', ['ionic','ngCordova','angularMoment','checklist-model'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('fyp', {
      url: '/',
      templateUrl: 'fyp.html',
      controller: 'fypCtrl'
    }); 
      $stateProvider.state('menu', {
      url: 'menu',
      templateUrl: 'menu.html',
      controller: 'menuCtrl'
    }); 
      $stateProvider.state('praUmrah', {
      url: 'praUmrah',
      templateUrl: 'praUmrah.html',
      controller: 'praUmrahCtrl'
     }); 
      $stateProvider.state('ihram', {
      url: 'ihram',
      templateUrl: 'ihram.html',
      controller: 'ihramCtrl'
     });
      $stateProvider.state('tawaf', {
      url: 'tawaf',
      templateUrl: 'tawaf.html',
      controller: 'tawafCtrl'
     });
      $stateProvider.state('saie', {
      url: 'saie',
      templateUrl: 'saie.html',
      controller: 'saieCtrl'
     });
     $stateProvider.state('post', {
      url: 'post',
      templateUrl: 'post.html',
      controller: 'postCtrl'
     });
      $stateProvider.state('dam', {
      url: 'dam',
      templateUrl: 'dam.html',
      controller: 'damCtrl',
      params:{'checked':null}
     });

    $urlRouterProvider.otherwise('/');
});

