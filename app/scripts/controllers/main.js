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


	this.levelCollection = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"123-456", game: "Super Mario World", difficulty: "Medium"})
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"456-433", game: "Supe Mario Bros"});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"123-456", game: "Super Mario World", difficulty: "Medium"});
	this.levelCollection.add(level);
	this.levelCollection.add(level2);
	this.levelCollection.add(level3);
	level2.options.title = "Changing title from options.title";

	var mediumCollection = this.levelCollection.filter({difficulty: "Medium", title: "Mario Land"});
	console.log(mediumCollection.list);
  });
