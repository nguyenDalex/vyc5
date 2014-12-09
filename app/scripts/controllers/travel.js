'use strict';

/*global $:false */

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:TravelCtrl
 * @description
 * # TravelCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('TravelCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.travel_slider').iosSlider({
    	desktopClickDrag: true,
    	snapToChildren: true,
    	infiniteSlider: true,
    });
  });
