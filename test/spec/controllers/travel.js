'use strict';

describe('Controller: TravelCtrl', function () {

  // load the controller's module
  beforeEach(module('vyc5AngularApp'));

  var TravelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TravelCtrl = $controller('TravelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
