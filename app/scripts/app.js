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
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/sponsor', {
        templateUrl: 'views/sponsor.html',
        controller: 'SponsorCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/press', {
        templateUrl: 'views/press.html',
        controller: 'PressCtrl'
      })
      .when('/viet', {
        templateUrl: 'views/viet.html',
        controller: 'VietCtrl'
      })
      .when('/workshops', {
        templateUrl: 'views/workshops.html',
        controller: 'WorkshopsCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/group', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .when('/group/:groupId', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // use the HTML5 History API
    $locationProvider.html5Mode(false);
  });


