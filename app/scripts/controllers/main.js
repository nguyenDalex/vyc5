'use strict';

/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
        .controller('MainCtrl', function($scope, $http) {
                $scope.awesomeThings = [
                        'AngularJS'
                ];
                $http.get('http://blog.vyc5.org/api/get_recent_posts/')
                        .success(function(data) {
                                $scope.recentPosts = data;
                        })
                        .error(function() {
                                console.log('Failed to get recent posts');

                        });
        });