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
      },
      getJSON : function() {
        return this.options; 
      }

    };

    return Level;
  });
