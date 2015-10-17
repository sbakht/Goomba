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
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"123-456", game: "Super Mario World", difficulty: "Medium", tags: tags})
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "Supe Mario Bros", difficulty: "Easy", tags: tags2});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "Super Mario World", difficulty: "Medium"});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	level2.options.title = "Changing title from options.title";
	level2.addTag(playsItselfTag);

	var mediumCollection = this.allLevels.filter({difficulty: "Medium", title: "Mario Land"});
  });
