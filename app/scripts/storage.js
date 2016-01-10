'use strict';

var storage = function storage() { };

storage.getWorkoutById = function(id) {
	var len = storage.data.workouts.length,
		w;
	for (var i = 0; i < len; i++) {
		w = storage.data.workouts[i];
		if (w.id === id) {
			return w;
		} 
	}
	return null;
};

storage.data = {
	workouts: [
		{
			name: 'My 30 minute tabata trainer',
			id: '01',
			colorStart: 0,
			time: 1800,	// all times in seconds
			intervals: [
				{
					time: 420,
					desc: '7 minutes easy'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 60,
					desc: 'increase by one gear'	
				},
				{
					time: 300,
					desc: '5 minutes easy'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 360,
					desc: '6 minutes easy'	
				}
			]
		},
		{
			name: 'Tabata trainer x 3',
			id: '02',
			colorStart: 10,
			time: 1800,	// all times in seconds
			intervals: [
				{
					time: 300,
					desc: '5 minutes easy'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 240,
					desc: '4 minutes easy'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 240,
					desc: '4 minutes easy'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 240,
					desc: '4 minutes easy'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 20,
					desc: 'tabata intense'	
				},
				{
					time: 10,
					desc: 'tabata recovery'	
				},
				{
					time: 300,
					desc: '5 minutes easy'	
				}
			]
		},
		{
			name: 'PWP Intersity Workout #3',
			id: '03',
			colorStart: 5,
			time: 7200,	// all times in seconds
			intervals: [
				{
					time: 300,
					desc: 'endurance',
					gearing: 'any',
					cadence: '100-110'
				},
				{
					time: 1800,
					desc: 'tempo',
					gearing: 'any',
					cadence: '100-110'	
				},
				{
					time: 120,
					desc: 'left leg only',
					gearing: '39/17',
					cadence: '40-60'
				},
				{
					time: 120,
					desc: 'right leg only',
					gearing: '39/17',
					cadence: '40-60'
				},
				{
					time: 120,
					desc: 'both legs recovery',
					gearing: '39/17',
					cadence: '80-100'
				}
			]
		}
	]
};