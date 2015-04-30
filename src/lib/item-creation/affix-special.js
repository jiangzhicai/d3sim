var util = require('../util');

var passives = require('../../data/skills').passives;

var affixSpecial = function(affix,dClass) {
	switch (affix){
		case 'HELLFIRE':
			return hellfire(dClass);
	}
};

function hellfire(dClass) {
	//get a random passive
	var passive = passives[dClass][util.intRandom(0,passives[dClass].length - 1)];

	return {
		secondary:{
			SPECIAL: {
				type:'legendary',
				text:'Gains the '+passive.name_en+' passive.',
				data:passive
			}
		}
	};
}

module.exports = affixSpecial;