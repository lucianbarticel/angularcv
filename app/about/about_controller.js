(function(){
  'use strict';


  angular.module('angularcv-main',['ui.router', 'firebase', 'ngSanitize'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('about', {
          url: '/',
          templateUrl: 'about/about.html',
          controller: 'MainCtrl'
        });
        $locationProvider.html5Mode(true);
    })
    .controller('MainCtrl', function ($scope, $firebaseObject) {
      var ref = new Firebase("https://torrid-fire-7303.firebaseio.com/description");
      var syncObject = $firebaseObject(ref);
      $scope.contentIsLoading = true;
      
      syncObject.$bindTo($scope, 'mydata').then(function(){
           $scope.contentIsLoading = false;
      });
    });

})();