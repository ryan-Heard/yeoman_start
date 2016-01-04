'use strict';

describe('Controller: SpecialsCtrl', function () {

  // load the controller's module
  beforeEach(module('myAngularProjectApp'));

  var SpecialsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpecialsCtrl = $controller('SpecialsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
