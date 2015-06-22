(function(){
	'use strict';

	angular.module('angularcv', [ 'ui.router','angularcv-main','templates', 'ngAnimate', 'angularcv-skills','angularcv-work', 'angularcv-education','angularcv-interests'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider
	      .otherwise("/");
	  });
})();
'app controller goes here';
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
'common service goes here';
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