'use strict';

describe('Service: Level', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  // instantiate service
  var Level;
  beforeEach(inject(function (_Level_) {
    Level = _Level_;
  }));

  it('should create a Level', function () {
    var level = Object.create(Level);
    level.init();
    var isPrototype = Level.isPrototypeOf(level);
    expect(isPrototype).toBe(true);
  });

  describe("Default Value", function() {

    it('rating should initialize to 0', function() {
      var level = Object.create(Level);
      level.init();
      expect(level.rating).toBe(0);
    });

    it('rating should initialize to Unknown', function() {
      var level = Object.create(Level);
      level.init();
      expect(level.difficulty).toBe("Unknown");
    });

    it('tag should initialize to empty array', function() {
      var level = Object.create(Level);
      level.init();
      expect(level.tags.length).toBe(1);
    });

  });

  it('should increment the rating', function() {
    var level = Object.create(Level);
    level.init();
    level.ratingUp();
    expect(level.rating).toBe(1);
  });

  it('should decrement the rating', function() {
    var level = Object.create(Level);
    level.init();
    level.ratingDown();
    expect(level.rating).toBe(-1);
  });

  it('should add a tag', function() {
    var tag = {};
    var level = Object.create(Level);
    level.init();
    level.addTag(tag);
    expect(level.tags.length).toBe(1);
  });

  it("should convert shorthand game name to full names", function() {
    var level = Object.create(Level);
    level.init({game: "smb"});
    expect(level.getGameText()).toBe("Super Mario Bros.");
    level.init({game: "smb3"});
    expect(level.getGameText()).toBe("Super Mario Bros. 3");
    level.init({game: "smw"});
    expect(level.getGameText()).toBe("Super Mario World");
    level.init({game: "smbu"});
    expect(level.getGameText()).toBe("New Super Mario Bros. U");
  });

});
