'use strict';

/*global app */
/*global storage */

/**
 * @ngdoc function
 * @name cxTabataApp.controller:SetupCtrl
 * @description
 * # SetupCtrl
 * Controller of the cxTabataApp
 */
app.controller('SetupCtrl', function ($scope, $rootScope, $location) {
	$scope.hideWorkoutList = false;
	
	$rootScope.bgColor = 'rgba(255,255,255,1)';
	$rootScope.isWorkout = false;
	
	$scope.addWorkout = function() {
		console.log('Add workout.');
	};
	
	$scope.loadWorkout = function(id) {
		// console.log('Load workout, ' + id);
		$rootScope.data = storage.getWorkoutById(id);
		$scope.hideWorkoutList = true;
		var timer = setTimeout(function() {
			clearTimeout(timer);
			$scope.$apply(function() {
				$location.path('/workout');
			});
		}, 200);
	};
});