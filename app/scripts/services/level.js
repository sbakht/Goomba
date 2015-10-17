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
      },
      options: {
        difficulty: "Unknown"
      },
      getJSON : function() {
        return this.options; 
      },

    };

    return Level;
  });
