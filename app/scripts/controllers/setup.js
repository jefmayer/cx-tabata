'use strict';

/*global app */

/**
 * @ngdoc function
 * @name cxTabataApp.controller:SetupCtrl
 * @description
 * # SetupCtrl
 * Controller of the cxTabataApp
 */
app.controller('SetupCtrl', function ($scope, $rootScope, $location) {
	$scope.hideWorkoutList = false;
	
	$rootScope.bgColor = 'rgba(200,200,200,1)';
	$rootScope.isWorkout = false;
	
	$scope.addWorkout = function() {
		console.log('Add workout.');
	};
	
	$scope.loadWorkout = function(id) {
		console.log('Load workout, ' + id);
		$scope.hideWorkoutList = true;
		var timer = setTimeout(function() {
			clearTimeout(timer);
			$scope.$apply(function() {
				$location.path('/workout');
			});
		}, 200);
	};
});