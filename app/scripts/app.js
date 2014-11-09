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
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider, $locationProvider, FacebookProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/travel', {
        templateUrl: 'views/travel.html',
        controller: 'TravelCtrl'
      })
      .when('/guidelines', {
        templateUrl: 'views/guidelines.html',
        controller: 'GuidelinesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
    $locationProvider.html5Mode(false);
    FacebookProvider.init('785523044838748');
  });
