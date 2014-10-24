'use strict';

describe('Controller: VolunteerCtrl', function () {

  // load the controller's module
  beforeEach(module('vyc5App'));

  var VolunteerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VolunteerCtrl = $controller('VolunteerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
