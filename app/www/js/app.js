// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal) {

//initialize the scope variables at 0
  $scope.latitude = 0;
  $scope.longitude = 0;

  $ionicModal.fromTemplateUrl('location-request.html', function(modal) {
    $scope.locationModal = modal;
  },  {
    scope: $scope,
    animation: 'slide-in-up'
  });


  $scope.newSearch = function() {
    $scope.locationModal.show();
  };

  $scope.cancelSearch = function() {
    $scope.locationModal.hide();
  };

  $scope.runSearch = function(latitude, longitude) {
    $scope.latitude.push(latitude);
    $scope.longitude.push(longitude);
    $scope.locationModal.hide();

  }



  }
  )


.run(function($ionicPlatform) {
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
})
