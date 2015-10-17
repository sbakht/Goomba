'use strict';

/**
 * @ngdoc service
 * @name goombaApp.LevelCollection
 * @description
 * # LevelCollection
 * Factory in the goombaApp.
 */
angular.module('goombaApp')
  .factory('LevelCollection', function () {
    // Service logic
    // ...

    var LevelCollection = {
      init : function(options) {
        this.list = [];
        this.options = angular.extend({}, this.options, options)
      },
      add : function(level) {
        this.list.push(level);
      },
      filter: function(filters) {
        var match;
        var filtered = Object.create(LevelCollection);
        filtered.init();
        for(var i = 0; i < this.list.length; i++) {
          match = true;
          for (var key in filters) {
            if (filters.hasOwnProperty(key)) {
              if(this.list[i][key] != filters[key]) {
                match = false;
              }
            }
          }
          if(match) {
            filtered.add(this.list[i]);
          }
        }
        return filtered;
      },

    };

    return LevelCollection;
  });
