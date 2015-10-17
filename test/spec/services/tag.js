'use strict';

describe('Service: Tag', function () {

  // load the service's module
  beforeEach(module('goombaApp'));

  // instantiate service
  var Tag;
  beforeEach(inject(function (_Tag_) {
    Tag = _Tag_;
  }));

  it('should create a Tag', function () {
    var tag = Object.create(Tag);
    tag.init();
    var isPrototype = Tag.isPrototypeOf(tag);
    expect(isPrototype).toBe(true);
  });

  it('should get the title', function() {
    var tag = Object.create(Tag);
    tag.init({title: "Puzzle"});
    expect(tag.title).toBe("Puzzle");
  });

});
