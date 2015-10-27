'use strict';

/**
 * @ngdoc directive
 * @name goombaApp.directive:level
 * @description
 * # level
 */
angular.module('goombaApp')
  .directive('level', function () {
    return {
      restrict: 'E',
      scope: {
      	level: "=",
      	description: "=",
      	shortenDescription: "="
      },
      templateUrl: "views/templates/level.html",
      link: function postLink(scope, element, attrs) {
      	if(scope.shortenDescription == 'true') {
      		scope.description = scope.level.shortenDescription();
      	}else{
      		scope.description = scope.level.description;
      	}
      }
    };
  });
