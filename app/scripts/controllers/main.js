'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('MainCtrl', function (ObjectFactory) {

	this.allLevels = ObjectFactory.populateLevelCollection();
	this.filters = {game: {}, difficulty: {}, tags: []};
	this.filters.tags = ObjectFactory.populateTagList();

	this.updateFilter = function() {
		this.filtered = this.allLevels.filter(this.filters);
	};
	this.deselectAllDifficulty = function() {
		this.filters.difficulty.Easy = false;
		this.filters.difficulty.Medium = false;
		this.filters.difficulty.Hard = false;
		this.updateFilter();
	};
	this.selectAllDifficulty = function() {
		this.filters.difficulty.Easy = true;
		this.filters.difficulty.Medium = true;
		this.filters.difficulty.Hard = true;
		this.updateFilter();
	};
	this.deselectAllGame = function() {
		this.filters.game.smb = false;
		this.filters.game.smb3 = false;
		this.filters.game.smw = false;
		this.filters.game.smbu = false;
		this.updateFilter();
	};
	this.selectAllGame = function() {
		this.filters.game.smb = true;
		this.filters.game.smb3 = true;
		this.filters.game.smw = true;
		this.filters.game.smbu = true;
		this.updateFilter();
	};
	this.deselectAllTag = function() {
		for(var i = 0; i < this.filters.tags.length; i++) {
			this.filters.tags[i].checked = false;
		}
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
