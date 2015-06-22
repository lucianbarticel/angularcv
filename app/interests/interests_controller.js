(function(){
  'use strict';


  angular.module('angularcv-interests',['ui.router', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('interests', {
          url: '/interests',
          templateUrl: 'interests/interests.html',
          controller: 'InterestsCtrl'
        });
        $locationProvider.html5Mode(true);
    })
    .controller('InterestsCtrl', function ($scope, $firebaseArray, $timeout) {
      $scope.content = "soon";

    });

})();