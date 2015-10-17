'use strict';

describe('Service: ObjectFactory', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  var Level;
  var LevelCollection;
  var Tag;
  beforeEach(inject(function(_Level_, _LevelCollection_,_Tag_) {
    Level = _Level_;
    LevelCollection = _LevelCollection_;
    Tag = _Tag_;
  }));

  // instantiate service
  var ObjectFactory;
  beforeEach(inject(function (_ObjectFactory_) {
    ObjectFactory = _ObjectFactory_;
  }));

  it('should create a Level', function () {
    var level = ObjectFactory.createLevel(); 
    var isPrototype = Level.isPrototypeOf(level);
    expect(isPrototype).toBe(true);
  });

  it('should create a LevelCollection', function () {
    var levelCollection = ObjectFactory.createLevelCollection();
    var isPrototype = LevelCollection.isPrototypeOf(levelCollection);
    expect(isPrototype).toBe(true);
  });

  it('should create a Tag using factory', function () {
    var tag = ObjectFactory.createTag();
    var isPrototype = Tag.isPrototypeOf(tag);
    expect(isPrototype).toBe(true);
  });

});
