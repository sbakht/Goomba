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
        this.options = angular.extend({}, this.options, options);
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
        played: false,
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
      getGameText: function() {
        switch(this.game) {
          case "smb":
            return "Super Mario Bros.";
          case "smb3":
            return "Super Mario Bros. 3";
          case "smw":
            return "Super Mario World";
          case "smbu":
            return "New Super Mario Bros. U";
          default:
            return "Unknown";
        }
      },

    };

    return Level;
  });
