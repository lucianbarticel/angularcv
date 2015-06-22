(function(){
  'use strict';


  angular.module('angularcv-skills',['ui.router', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('skills', {
          url: '/skills',
          templateUrl: 'skills/skills.html',
          controller: 'SkillsCtrl'
        });
        $locationProvider.html5Mode(true);
    })
    .controller('SkillsCtrl', function ($scope, $firebaseArray, $timeout) {
      var ref = new Firebase("https://torrid-fire-7303.firebaseio.com/skills");
      $scope.contentIsLoading = true;
      

      ref.orderByChild("relevance").on("value", function(snapshot) {
          var _skills = [];
          snapshot.forEach(function(data) {
            _skills.push(data.key());
          });

          $timeout(function(){
              $scope.$apply(function(){
                $scope.contentIsLoading = false;
                $scope.skills = _skills;
              });
          });
          
      });

    });

})();