'use strict';

/*global app */
/*global storage */

/**
 * @ngdoc function
 * @name cxTabataApp.controller:WorkoutCtrl
 * @description
 * # WorkoutCtrl
 * Controller of the cxTabataApp
 */
app.controller('WorkoutCtrl', function ($scope, $rootScope, $location) {
	$rootScope.data = storage.data.workouts[0];
	$rootScope.isWorkout = true;
	
	$scope.interval = {
		mins: '00',
		secs: '00',
		msecs: '0',
		desc: ''
	};
	
	$scope.total = {
		mins: '00',
		secs: '00',
		msecs: '0'	
	};
	
	$scope.next = {
		desc: ''
	};
	
	var time = 0,
		initRun = true,
		intBeginTime = 0,
		timer,
		atInterval = 0,
		intervalTime = 0,
		second = 1000,
		minute = second * 60,
		colors = [],
		colorIter = 0,
		timeLimit = $rootScope.data.time * second;
		
	function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
		if (center === undefined) {
			center = 128;
		}
		if (width === undefined) {
			width = 127;
		}
		if (len === undefined) {
			len = 50;
		}
		for (var i = 0; i < len; ++i) {
			var red = Math.round(Math.sin(frequency1*i + phase1) * width + center);
			var grn = Math.round(Math.sin(frequency2*i + phase2) * width + center);
			var blu = Math.round(Math.sin(frequency3*i + phase3) * width + center);
			colors.push('rgba('+red+','+grn+','+blu+',1)');
		}
	}
	
	makeColorGradient(0.3,0.3,0.3,0,2,4);
	$rootScope.bgColor = colors[0];
			
	function update() {
		time = time + 100;
		// Check against the times
		if (time === intBeginTime + intervalTime * second || initRun) {
			initRun = false;
			intervalTime = parseInt($rootScope.data.intervals[atInterval].time);
			
			intBeginTime = time;
			$scope.$apply(function() {
				$scope.interval.desc = $rootScope.data.intervals[atInterval].desc;
				$scope.next.desc = $rootScope.data.intervals[atInterval + 1].desc;
			});
			atInterval = atInterval + 1;
		}
		
		$scope.$apply(function() {
			// End
			var rTime;
			if (time === timeLimit) {
				rTime = 0;
			} else {
				rTime = (intBeginTime + intervalTime * second) - time;
			}

			$scope.total.mins = pad(Math.floor(time/minute));
			$scope.total.secs = pad(Math.floor((time%minute)/second));
			$scope.total.msecs = Math.floor((time%second))/100;
			
			$scope.interval.mins = pad(Math.floor(rTime/minute));
			$scope.interval.secs = pad(Math.floor((rTime%minute)/second));
			$scope.interval.msecs = Math.floor((rTime%second))/100;			
			
			if (time%10000 === 0) {
				$rootScope.bgColor = colors[colorIter];
				colorIter = colorIter + 1;
				if (colorIter === colors.length) {
					colorIter = 0;
				}
			}
			
			// End
			if (time === timeLimit) {
				clearInterval(timer);
				$location.path('/summary');
			}
		});
	}

	function pad(val) {
		val = val + '';
		if(val.length < 2) {
			return '0' + val;
		} else {
			return val;
		}
	}
	
	timer = setInterval(update, 100);
	
	$scope.$on('$destroy', function() {
		console.log('destroy');
		if (timer !== null) {
			clearInterval(timer);
		}
	});
});