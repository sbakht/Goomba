'use strict';

describe('Service: LevelCollection', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  // instantiate service
  var LevelCollection;
  beforeEach(inject(function (_LevelCollection_) {
    LevelCollection = _LevelCollection_;
  }));

  it('should do something', function () {
    expect(!!LevelCollection).toBe(true);
  });

});
