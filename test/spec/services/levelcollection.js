'use strict';

describe('Service: LevelCollection', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

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

  describe("Filters", function() {

    var level, level2, level3, level4;
    beforeEach(function() {
      level = {title: "My Easy Level", difficulty: "Easy"};
      level2 = {title: "My Medium Level", difficulty: "Medium"};
      level3 = {title: "My Other Medium Level", difficulty: "Medium"};
      level4 = {title: "My Hard Level", difficulty: "Hard"};
      levelCollection.add(level);
      levelCollection.add(level2);
      levelCollection.add(level3);
    });

    it('should match a level to single filter', function () {
      var match = levelCollection._isMatch(level, {difficulty: "Easy"});
      expect(match).toBeTruthy();
    });

    it('should match a level to multiple filters', function () {
      var match = levelCollection._isMatch(level2, {title: "My Medium Level", difficulty: "Medium"});
      expect(match).toBeTruthy();
    });

    it('should match a level to multiple filters of same type', function () {
      var match = levelCollection._isMatch(level2, {difficulty: ["Medium", "Hard"]});
      expect(match).toBeTruthy();
    });

    it('should not find a match', function () {
      var match = levelCollection._isMatch(level2, {title: "Non Existant", difficulty: "Medium"});
      expect(match).toBeFalsy();
    });

    it('should return instance of LevelCollection', function () {
      var filtered = levelCollection.filter({difficulty: "Easy"});
      var isPrototype = LevelCollection.isPrototypeOf(filtered);
      expect(isPrototype).toBeTruthy();
    });

    it('should find multiple matches', function () {
      var filtered = levelCollection.filter({difficulty: "Medium"});
      expect(filtered.list.length).toBe(2);
    });

    it('should find matches to multiple filters of same type', function () {
      var filtered = levelCollection.filter({difficulty: ["Medium", "Hard"]});
      expect(filtered.list.length).toBe(2);
    });

  });
  

  it("should check for equal strings", function() {
    expect(levelCollection._isEqual("string","string")).toBeTruthy();
  });

  it("should check for string in array", function() {
    expect(levelCollection._isEqual("string",["string"])).toBeTruthy();
  });

  it("should check for is array", function() {
    expect(levelCollection._isArray([])).toBeTruthy();
  });

  it("should check for is not array", function() {
    expect(levelCollection._isArray("")).toBeFalsy();
  });
});
