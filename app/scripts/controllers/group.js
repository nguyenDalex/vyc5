'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('GroupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.menu = [
    {
    	'title':'Overview',
    	'link':'/'
    }];
  });
