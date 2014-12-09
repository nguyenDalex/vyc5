'use strict';

describe('Controller: WorkshopsCtrl', function () {

  // load the controller's module
  beforeEach(module('vyc5AngularApp'));

  var WorkshopsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkshopsCtrl = $controller('WorkshopsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
