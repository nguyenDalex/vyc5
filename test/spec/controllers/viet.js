'use strict';

describe('Controller: VietCtrl', function () {

  // load the controller's module
  beforeEach(module('vyc5AngularApp'));

  var VietCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VietCtrl = $controller('VietCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
