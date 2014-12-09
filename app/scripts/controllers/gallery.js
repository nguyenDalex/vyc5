'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('GalleryCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
$http({
	method: 'GET',
	url: 'http://blog.vyc5.org/api/get_page/?id=92&custom_fields=*',
	})
		.success(function(data) {
				$scope.vyc4gallery = data.page.custom_fields.gallery;
				console.log($scope.vyc4gallery);
				
		})
		.error(function() {
				console.log('Failed to get workshop data');

		});
  });
