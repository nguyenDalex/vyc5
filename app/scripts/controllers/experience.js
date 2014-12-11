'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('ExperienceCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
    method: 'GET',
    url: 'http://blog.vyc5.org/api/get_page/?id=362&custom_fields=*',
    })
    	.success(function(data) {
    			$scope.experience = data.page.custom_fields;
    			
    	})
    	.error(function() {
    			console.log('Failed to get workshop data');

    });
  });
