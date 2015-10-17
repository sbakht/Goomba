'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('MainCtrl', function (Level, LevelCollection, ObjectFactory) {

  	var puzzleTag = ObjectFactory.createTag({title: "Puzzle"});
  	var playsItselfTag = ObjectFactory.createTag({title: "Don't Move"});
  	var tags = [puzzleTag];
  	var tags2 = [puzzleTag];

	this.allLevels = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"123-456", game: "Super Mario World", difficulty: "Medium", tags: tags});
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "Supe Mario Bros", difficulty: "Easy", tags: tags2});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "Super Mario World", difficulty: "Medium"});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"343-522", game: "Super Mario Wii", difficulty: "Hard"});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	level2.addTag(playsItselfTag);
	this.filters = {difficulty: []};
	this.difficulty = {};
	this.updateDifficultyFilter = function() {
		this.filters.difficulty = [];
		if(this.difficulty.easy) {
			this.filters.difficulty.push("Easy");
		}
		if(this.difficulty.medium) {
			this.filters.difficulty.push("Medium");
		}
		if(this.difficulty.hard) {
			this.filters.difficulty.push("Hard");
		}
		this.filtered = this.allLevels.filter({difficulty: this.filters.difficulty});
	};
	this.selectAllDifficulty = function() {
		this.difficulty.easy = true;
		this.difficulty.medium = true;
		this.difficulty.hard = true;
		this.updateDifficultyFilter();
	};
	this.selectAllDifficulty();
  });
