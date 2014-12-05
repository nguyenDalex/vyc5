'use strict';
/*global $:false */

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:SponsorCtrl
 * @description
 * # SponsorCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('SponsorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    fundraising.init();
  });
