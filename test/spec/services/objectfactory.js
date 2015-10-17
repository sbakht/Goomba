'use strict';

describe('Service: ObjectFactory', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  // instantiate service
  var ObjectFactory;
  beforeEach(inject(function (_ObjectFactory_) {
    ObjectFactory = _ObjectFactory_;
  }));

  it('should do something', function () {
    expect(!!ObjectFactory).toBe(true);
  });

});
