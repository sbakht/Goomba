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

  	// this.

  	var puzzleTag = ObjectFactory.createTag({title: "Puzzle"});
  	var playsItselfTag = ObjectFactory.createTag({title: "Don't Move"});
  	var tags = [puzzleTag];
  	var tags2 = [puzzleTag];

	this.allLevels = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"123-456", game: "smw", difficulty: "Medium", tags: tags});
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "smb", difficulty: "Easy", tags: tags2});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "smb3", difficulty: "Medium"});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"343-522", game: "smbu", difficulty: "Hard"});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	level2.addTag(playsItselfTag);
	this.difficulty = {};
	this.game = {};
	this.filters = {game: {}, difficulty: {}};

	this.updateFilter = function() {
		this.filtered = this.allLevels.filter(this.filters);
	};
	this.selectAllDifficulty = function() {
		this.filters.difficulty.Easy = true;
		this.filters.difficulty.Medium = true;
		this.filters.difficulty.Hard = true;
		this.updateFilter();
	};
	this.selectAllGame = function() {
		this.filters.game.smb = true;
		this.filters.game.smb3 = true;
		this.filters.game.smw = true;
		this.filters.game.smbu = true;
		this.updateFilter();
	};
	this.selectAllDifficulty();
	this.selectAllGame();
  });
