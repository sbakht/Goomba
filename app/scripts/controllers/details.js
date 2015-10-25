'use strict';

/**
 * @ngdoc function
 * @name goombaApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the goombaApp
 */
angular.module('goombaApp')
  .controller('DetailsCtrl', function ($routeParams, Level, LevelCollection, ObjectFactory, Tag) {

  	var id = $routeParams.ID;

  	var emptyTag = ObjectFactory.createTag({title: "Unspecified"});
  	var puzzleTag = ObjectFactory.createTag({title: "Puzzle"});
  	var playsItselfTag = ObjectFactory.createTag({title: "Don't Move"});
  	var classicTag = ObjectFactory.createTag({title: "Classic"});
  	var singleScreenTag = ObjectFactory.createTag({title: "Single Screen"});
  	var fastTag = ObjectFactory.createTag({title: "Fast"});
  	var storyTag = ObjectFactory.createTag({title: "Story"});
  	var remakeTag = ObjectFactory.createTag({title: "Remake"});
  	var costumeTag = ObjectFactory.createTag({title: "Costume"});

  	var img = "http://placehold.it/100x100";

  	var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero ligula, sagittis faucibus elementum eget, congue eget justo. Maecenas vitae hendrerit massa. Mauris a cursus nulla, ac placerat eros. Duis sit amet odio ipsum. Nulla scelerisque blandit facilisis. Nulla pulvinar nec elit nec ultrices. Vestibulum posuere ipsum et lacus rutrum sagittis ac vel sapien. Aliquam at ipsum sagittis neque dignissim sodales. Quisque tempor est vel dui cursus, vitae fringilla dui bibendum. Praesent sit amet gravida urna. In tincidunt lobortis purus, sit amet venenatis ipsum sodales sit amet. Aenean rutrum finibus aliquet. Nulla euismod tellus justo, ac fringilla ipsum aliquam quis. Etiam varius elit nibh, vel pulvinar nisi dignissim a. Maecenas lacinia id mi at viverra. Aliquam erat volutpat.";

	this.allLevels = ObjectFactory.createLevelCollection();
	var level = ObjectFactory.createLevel({title: "Mario Land", ID:"2E04-0000-0047-F484", game: "smw", difficulty: "Medium", tags: [puzzleTag], points: 10, description: description});
	var level2 = ObjectFactory.createLevel({title: "Yoshi World", ID:"389C-0000-0039-13DE", game: "smb", difficulty: "Easy", tags: [playsItselfTag], points: 114, completed: true, img: img, description: description});
	var level3 = ObjectFactory.createLevel({title: "Molly's Mushers", ID:"DEFD-0000-0047-F272", game: "smb3", difficulty: "Medium", tags:[puzzleTag, playsItselfTag], points: -5, completed: false});
	var level4 = ObjectFactory.createLevel({title: "Impossible Feat", ID:"C141-0000-007B-1615", game: "smbu", difficulty: "Hard", points: 0, img: img});
	this.allLevels.add(level);
	this.allLevels.add(level2);
	this.allLevels.add(level3);
	this.allLevels.add(level4);
	level2.options.title = "Changing title from options.title";
	this.filters = {ID: id};

	this.updateFilter = function() {
		this.filtered = this.allLevels.filter({ID: id});
	};
		this.updateFilter();
  });
