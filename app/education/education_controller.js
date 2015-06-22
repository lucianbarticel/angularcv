(function(){
  'use strict';


  angular.module('angularcv-education',['ui.router', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('education', {
          url: '/education',
          templateUrl: 'education/education.html',
          controller: 'EducationCtrl'
        });
        $locationProvider.html5Mode(true);
    })
    .controller('EducationCtrl', function ($scope, $firebaseArray, $timeout) {
      var ref = new Firebase("https://torrid-fire-7303.firebaseio.com/education");
      $scope.contentIsLoading = true;
      var queryRef = ref.orderByChild("id");
      queryRef.on("value", function(querySnapshot){
        var _diplomas = [];
        querySnapshot.forEach(function(data){
          _diplomas.push(data.val());
        });
        $timeout(function(){
          $scope.$apply(function(){
            $scope.diplomas = _diplomas;
            $scope.contentIsLoading = false;
          });
        });
      });

    });

})();