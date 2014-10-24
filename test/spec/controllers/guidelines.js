'use strict';

describe('Controller: GuidelinesCtrl', function () {

  // load the controller's module
  beforeEach(module('vyc5App'));

  var GuidelinesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuidelinesCtrl = $controller('GuidelinesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
