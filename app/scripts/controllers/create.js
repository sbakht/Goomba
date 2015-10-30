'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('CreateCtrl', function (ObjectFactory) {

  	this.createLevel = function() {
  		if(validateInput()) {
		    var puzzleTag = ObjectFactory.createTag({title: "Puzzle"});
		  	var obj = {title: this.title, ID: this.ID, game: this.game, difficulty: this.difficulty, tags: [puzzleTag], points: 0, description: this.description};
		  	var level = ObjectFactory.createLevel(obj);
	  		var allLevels = ObjectFactory.getPopulatedLevelCollection();
	  		allLevels.add(level);
	  	}
  	};

  	function validateInput() {
      return true;
  	}

  });
