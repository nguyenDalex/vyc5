'use strict';


/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:PressCtrl
 * @description
 * # PressCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('PressCtrl', function ($scope, $http) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
	$http({
		method: 'GET',
		url: 'http://blog.vyc5.org/api/get_page/?id=52',
		})
			.success(function(data) {
					$scope.press = data.page.custom_fields;
					$scope.press_kit_url = data.page.attachments[0].url;
					
			})
			.error(function() {
					console.log('Failed to get recent posts');

			});
  });
