'use strict';

/**
 * @ngdoc service
 * @name vyc5AngularApp.blogPosts
 * @description
 * # blogPosts
 * Factory in the vyc5AngularApp.
 */
angular.module('vyc5AngularApp')
	.factory('blogPosts', function ($resource) {
	$resource("http://blog.vyc5.org/api/posts/:id");

		var meaningOfLife = 42;

		// Public API here
		return {
			someMethod: function () {
				return meaningOfLife;
			}
		};
	});
