'use strict';

/**
 * @ngdoc overview
 * @name cxTabataApp
 * @description
 * # cxTabataApp
 *
 * Main module of the application.
 */
var app = angular.module('cxTabataApp', [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch'
]);

app.run(function($rootScope) {
	// Init storage
	// storage.init();
	$rootScope.bgColor = 'rgba(200,200,200,1)';
});

app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/setup.html',
		controller: 'SetupCtrl'
	})
	.when('/setup', {
		templateUrl: 'views/setup.html',
		controller: 'SetupCtrl'
	})
	.when('/workout', {
		templateUrl: 'views/workout.html',
		controller: 'WorkoutCtrl'
	})
	.when('/summary', {
		templateUrl: 'views/summary.html',
		controller: 'SummaryCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});