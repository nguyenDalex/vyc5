'use strict';
var $;
/**
 * @ngdoc function
 * @name vyc5AngularApp.controller:VietCtrl
 * @description
 * # VietCtrl
 * Controller of the vyc5AngularApp
 */
angular.module('vyc5AngularApp')
  .controller('VietCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.initAccordion=function(){
	    $('.accordion').on('show', function () {
	    	$('.panel-heading', $('.panel-collapse.in').parent()).css('background-color: blue');
		});
		//$scope.$apply();
	};

	$scope.initAccordion();
}).
directive('btstAccordion', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {},
        template:
            '<div class="accordion" ng-transclude></div>',
        link: function (scope, element) {

            // give this element a unique id
            var id = element.attr('id');
            if (!id) {
                id = 'btst-acc' + scope.$id;
                element.attr('id', id);
            }

            // set data-parent on accordion-toggle elements
            var arr = element.find('.accordion-toggle');
            var i;
            for ( i = 0; i < arr.length; i++) {
                $(arr[i]).attr('data-parent', '#' + id);
                $(arr[i]).attr('href', '/#viet/#' + id + 'collapse' + i);
            }
            arr = element.find('.accordion-body');
            $(arr[0]).addClass('in'); // expand first pane
            for ( i = 0; i < arr.length; i++) {
                $(arr[i]).attr('id', id + 'collapse' + i);
            }
        },
        controller: function () {}
    };
}).
directive('btstPane', function () {
    return {
        require: '^btstAccordion',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            title: '@',
            category: '=',
            order: '='
        },
        template:
            '<div class="accordion-group" >' +
            '  <div class="accordion-heading">' +
            '    <a class="accordion-toggle" data-toggle="collapse"> {{category.name}} - </a>' +
       
            '  </div>' +
            '<div class="accordion-body collapse">' +
            '  <div class="accordion-inner" ng-transclude></div>' +
            '  </div>' +
            '</div>',
        link: function (scope, element) {
            scope.$watch('title', function () {
                // NOTE: this requires jQuery (jQLite won't do html)
                var hdr = element.find('.accordion-toggle');
                hdr.html(scope.title);
            });
        }
    };
});
