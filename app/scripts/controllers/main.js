'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('MainCtrl', function (Level) {

	function LevelCollection() {
		this.levels = [];
		
		this.add = function(level) {
			this.levels.push(level);
		};
	}

	this.levelCollection = new LevelCollection();
	var level = Object.create(Level);
	level.init({title: "Mario Land", ID:"123-456", game: "Super Mario World"});
	var level2 = Object.create(Level);
	level2.init({title: "Yoshi World", ID:"456-433", game: "Supe Mario Bros"});
	this.levelCollection.add(level.getJSON());
	this.levelCollection.add(level2.getJSON());
	level2.options.title = "Changing title from options.title";
  });
