// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// include requires ionic and ngCordova
angular.module('starter', ['ionic', 'ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

//initialize the scope variables at 0
  $scope.latitude = 0;
  $scope.longitude = 0;



  // $ionicModal.fromTemplateUrl('location-request.html', function(modal) {
  //   $scope.locationModal = modal;
  // },  {
  //   scope: $scope,
  //   animation: 'slide-in-up'
  // });


  // $scope.newSearch = function() {
  //   $scope.locationModal.show();
  // };

  // $scope.cancelSearch = function() {
  //   $scope.locationModal.hide();
  // };

$ionicPlatform.ready( function() {
      $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
    });

    var posOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
      };

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {

      }); 
    });
$scope.saveLocation = function() {
    $scope.latitude  = position.coords.latitude;
    $scope.longitude = position.coords.longitude;
};

})


// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//       // for form inputs)
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

//       // Don't remove this line unless you know what you are doing. It stops the viewport
//       // from snapping when text inputs are focused. Ionic handles this internally for
//       // a much nicer keyboard experience.
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// });
