'use strict';

describe('Service: LevelCollection', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  var ObjectFactory;
  beforeEach(inject(function(_ObjectFactory_) {
    ObjectFactory = ObjectFactory;
  }));

  // instantiate service
  var LevelCollection;
  var levelCollection;
  beforeEach(inject(function (_LevelCollection_) {
    LevelCollection = _LevelCollection_;

    levelCollection = Object.create(LevelCollection);
    levelCollection.init();
  }));

  it('should create a LevelCollection', function () {
    var isPrototype = LevelCollection.isPrototypeOf(levelCollection);
    expect(isPrototype).toBe(true);
  });

  describe("Default Values", function() {
    it('levels is initialized to empty', function () {
      expect(levelCollection.list.length).toBe(0);
    });
  });

  it('should add a level', function () {
    var level = {};
    levelCollection.add(level);
    expect(levelCollection.list.length).toBe(1);
  });


});
