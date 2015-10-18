'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('MainCtrl', function (Level, LevelCollection, ObjectFactory, Tag) {

  	var emptyTag = ObjectFactory.createTag({title: "Unspecified"});
  	var puzzleTag = ObjectFactory.createTag({title: "Puzzle"});
  	var playsItselfTag = ObjectFactory.createTag({title: "Don't Move"});
  	var tags = [puzzleTag];
  	var tags2 = [puzzleTag];
  	// this.tagList = [puzzleTag, playsItselfTag];

	this.allLevels = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"123-456", game: "smw", difficulty: "Medium", tags: [puzzleTag]});
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "smb", difficulty: "Easy", tags: [playsItselfTag]});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "smb3", difficulty: "Medium", tags:[puzzleTag, playsItselfTag]});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"343-522", game: "smbu", difficulty: "Hard"});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	this.filters = {game: {}, difficulty: {}, tags: []};
	this.filters.tags = [emptyTag, puzzleTag, playsItselfTag];

	this.updateFilter = function() {
		// console.log(this.filters);
		this.filtered = this.allLevels.filter(this.filters);
		// console.log(this.filtered);
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
	this.selectAllTag = function() {
		for(var i = 0; i < this.filters.tags.length; i++) {
			this.filters.tags[i].checked = true;
		}
		this.updateFilter();
	};
	this.selectAllDifficulty();
	this.selectAllGame();
	this.selectAllTag();
  });
