'use strict';

/**
 * @ngdoc service
 * @name goombaApp.ObjectFactory
 * @description
 * # ObjectFactory
 * Factory in the goombaApp.
 */
angular.module('goombaApp')
  .factory('ObjectFactory', function (Level, LevelCollection) {
    // Service logic
    // ...
    function createLevel(options) {
      var level = Object.create(Level);
      level.init(options);
      return level;
    }

    function createLevelCollection(options) {
      var collection = Object.create(LevelCollection);
      collection.init(options);
      return collection;
    }

    // Public API here
    return {
      createLevel: createLevel,
      createLevelCollection: createLevelCollection,
    };
  });
