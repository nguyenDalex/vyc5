'use strict';

/**
 * @ngdoc overview
 * @name vyc5AngularApp
 * @description
 * # vyc5AngularApp
 *
 * Main module of the application.
 */
angular
  .module('vyc5AngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
    $locationProvider.html5Mode(true);
  });
