// split data to datapoints

$(document).ready(function(){
	var list = $('#params-list');
	    list.append('<li>'+config.population+' Population</li>');
	    list.append('<li>'+config.duration+' '+config.timeUnit+'</li>');
	    list.append('<li>'+config.infectionProbability+' Infection Probability</li>');
	    list.append('<li>'+config.ser1InitInfected+' S1 Init Infected</li>');
	    list.append('<li>'+config.ser2InitInfected+' S2 Init Infected</li>');
	    list.append('<li>'+config.ser1InitResistant+' S1 Init Resistant</li>');
	    list.append('<li>'+config.ser2InitResistant+' S2 Init Resistant</li>');
});