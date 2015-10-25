'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('DetailsCtrl', function ($routeParams, ObjectFactory) {

  	var id = $routeParams.ID;

	this.allLevels = ObjectFactory.populateLevelCollection();
	this.filters = {game: {}, difficulty: {}, tags: []};
	this.filters.tags = ObjectFactory.populateTagList();
	this.filters = {ID: id};

	this.updateFilter = function() {
		this.filtered = this.allLevels.filter({ID: id});
	};

	this.updateFilter();

  });
