'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:WorkshopsCtrl
 * @description
 * # WorkshopsCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
	.controller('WorkshopsCtrl', function ($scope, $http) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$http({
		method: 'GET',
		url: 'http://blog.vyc5.org/api/get_page/?id=34&custom_fields=*',
		})
			.success(function(data) {
					$scope.workshops = data.page.custom_fields.workshops;
					console.log($scope.workshops);
					
			})
			.error(function() {
					console.log('Failed to get workshop data');

			});
	});
