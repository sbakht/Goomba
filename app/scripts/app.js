'use strict';

/**
 * @ngdoc overview
 * @name goombaApp
 * @description
 * # goombaApp
 *
 * Main module of the application.
 */
angular
  .module('goombaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:ID', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
