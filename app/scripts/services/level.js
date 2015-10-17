'use strict';

/**
 * @ngdoc service
 * @name goombaApp.Level
 * @description
 * # Level
 * Factory in the goombaApp.
 */
angular.module('goombaApp')
  .factory('Level', function () {
    // Service logic
    // ...

    var Level = {
      init : function(options) {
        this.options = angular.extend({}, this.options, options)
        this.title = this.options.title;
        this.ID = this.options.ID;
        this.game = this.options.game;
        this.difficulty = this.options.difficulty;
        this.img = this.options.img;
        this.rating = this.options.rating;
        this.tags = this.options.tags;
      },
      options: {
        difficulty: "Unknown",
        img: "http://placeholdit.100x100",
        rating: 0,
        tags: [],
      },
      getJSON : function() {
        return this.options; 
      },
      ratingUp: function() {
        this.rating += 1;
      },
      ratingDown: function() {
        this.rating -= 1;
      },
      addTag : function(tag) {
        this.tags.push(tag);
      },

    };

    return Level;
  });
