(function(){
	'use strict';

	angular.module('angularcv', [ 'ui.router','angularcv-main','templates', 'ngAnimate', 'angularcv-skills','angularcv-work', 'angularcv-education','angularcv-interests'])
	  .config(function ($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider
	      .otherwise("/");
	  });
})();