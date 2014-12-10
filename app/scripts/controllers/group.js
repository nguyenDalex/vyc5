'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
	.controller('GroupCtrl', function ($scope, $http) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$http({
			method: 'GET',
			url: 'http://groups.vyc5.org/api/get_page/?id=2&custom_fields=*',
			headers: {
				'Accept': 'application/json; charset=utf-8'
			}
		})
		.success(function(data) {
						$scope.group = data.page.custom_fields;
		})
		.error(function() {
						console.log('Failed to get group');

		});
	});
