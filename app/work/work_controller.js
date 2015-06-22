(function(){
  'use strict';


  angular.module('angularcv-work',['ui.router', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('work', {
          url: '/work',
          templateUrl: 'work/work.html',
          controller: 'WorkCtrl'
        });
        $locationProvider.html5Mode(true);
    })
    .controller('WorkCtrl', function ($scope, $firebaseArray, $timeout) {
      var ref = new Firebase("https://torrid-fire-7303.firebaseio.com/work");
      $scope.contentIsLoading = true;
      var queryRef = ref.orderByChild("id");
      queryRef.on("value", function(querySnapshot){
        var _companies = [];
        querySnapshot.forEach(function(data){
          _companies.push(data.val());
        });
        $timeout(function(){
          $scope.$apply(function(){
            $scope.companies = _companies;
            $scope.contentIsLoading = false;
          });
        });
      });

    });

})();