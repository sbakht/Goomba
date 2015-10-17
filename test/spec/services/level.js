'use strict';

describe('Service: Level', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  // instantiate service
  var Level;
  beforeEach(inject(function (_Level_) {
    Level = _Level_;
  }));

  it('should do something', function () {
    expect(!!Level).toBe(true);
  });

});
