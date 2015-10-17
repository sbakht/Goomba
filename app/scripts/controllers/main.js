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
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "Super Mario Bros.", difficulty: "Easy", tags: tags2});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "Super Mario Bros. 3", difficulty: "Medium"});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"343-522", game: "New Super Mario Bros. U", difficulty: "Hard"});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	level2.addTag(playsItselfTag);
	this.difficulty = {};
	this.game = {};
	this.filters = {game: [], difficulty: []};

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
		this.filtered = this.allLevels.filter(this.filters);
	};
	this.selectAllDifficulty = function() {
		this.difficulty.easy = true;
		this.difficulty.medium = true;
		this.difficulty.hard = true;
		this.updateDifficultyFilter();
	};
	this.updateGameFilter = function() {
		this.filters.game = [];
		if(this.game.smb) {
			this.filters.game.push("Super Mario Bros.");
		}
		if(this.game.smb3) {
			this.filters.game.push("Super Mario Bros. 3");
		}
		if(this.game.smw) {
			this.filters.game.push("Super Mario World");
		}
		if(this.game.smbu) {
			this.filters.game.push("New Super Mario Bros. U");
		}
		this.filtered = this.allLevels.filter(this.filters);
	};
	this.selectAllGame = function() {
		this.game.smb = true;
		this.game.smb3 = true;
		this.game.smw = true;
		this.game.smbu = true;
		this.updateGameFilter();
	};
	this.selectAllDifficulty();
	this.selectAllGame();
  });
