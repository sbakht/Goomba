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
        this.options = angular.extend({}, this.options, options);
      },
      add : function(level) {
        this.list.push(level);
      },
      filter: function(filters) {
        var filtered = Object.create(LevelCollection);
        filtered.init();

        for(var i = 0; i < this.list.length; i++) {
          var level = this.list[i];
          if(this._isMatch(level, filters)) {
            filtered.add(level);
          }
        }
        return filtered;
      },
      _isMatch: function(level, filters) {
          for (var key in filters) {
            if (filters.hasOwnProperty(key)) {
              if(!this._isEqual(level[key], filters[key])) {
                return false;
              }
            }
          }
          return true;
      },
      _isEqual: function(levelVal, filterVal) {
        if(this._isArray(filterVal)) { //tags
          for(var y = 0; y < levelVal.length; y++) {
            var title = levelVal[y].title;
            for(var z = 0; z < filterVal.length; z++) {
              if(filterVal[z].title == title) {
                if(filterVal[z].checked) {
                  return true;
                }
              }
            }
          }
          return false;
        }else if(typeof filterVal === 'object') {
          return filterVal[levelVal] === true;
        }else{
          return levelVal === filterVal;
        }
      },
      _isArray: function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },

    };

    return LevelCollection;
  });
