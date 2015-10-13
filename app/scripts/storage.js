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
			name: 'My 30 minute Tabata training interval',
			id: '01',
			time: 1800,	// all times in seconds
			intervals: [
				{
					time: 420,
					desc: '7 minutes easy.'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 60,
					desc: 'Increase by one gear'	
				},
				{
					time: 300,
					desc: '5 minutes easy'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 20,
					desc: 'Tabata Intense'	
				},
				{
					time: 10,
					desc: 'Tabata Recovery'	
				},
				{
					time: 360,
					desc: '6 minutes easy'	
				}
			]
		}
	]
};