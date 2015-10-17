'use strict';

/**
 * @ngdoc service
 * @name goombaApp.Tag
 * @description
 * # Tag
 * Factory in the goombaApp.
 */
angular.module('goombaApp')
  .factory('Tag', function () {
    // Service logic
    // ...

    var Tag = {
      init: function(options) {
        this.options = angular.extend({}, this.options, options)
        this.title = this.options.title;
      },

    }

    return Tag;
  });
