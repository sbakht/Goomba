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
  	var classicTag = ObjectFactory.createTag({title: "Classic"});
  	var singleScreenTag = ObjectFactory.createTag({title: "Single Screen"});
  	var fastTag = ObjectFactory.createTag({title: "Fast"});
  	var storyTag = ObjectFactory.createTag({title: "Story"});
  	var remakeTag = ObjectFactory.createTag({title: "Remake"});
  	var costumeTag = ObjectFactory.createTag({title: "Costume"});

	this.allLevels = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"2E04-0000-0047-F484", game: "smw", difficulty: "Medium", tags: [puzzleTag], points: 10});
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"389C-0000-0039-13DE", game: "smb", difficulty: "Easy", tags: [playsItselfTag], points: 114, completed: true});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"DEFD-0000-0047-F272", game: "smb3", difficulty: "Medium", tags:[puzzleTag, playsItselfTag], points: -5, completed: false});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"C141-0000-007B-1615", game: "smbu", difficulty: "Hard", points: 0});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	this.filters = {game: {}, difficulty: {}, tags: []};
	this.filters.tags = [emptyTag, puzzleTag, playsItselfTag, classicTag, fastTag, storyTag, singleScreenTag, remakeTag, costumeTag];

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
