'use strict';

/**
 * @ngdoc service
 * @name goombaApp.ObjectFactory
 * @description
 * # ObjectFactory
 * Factory in the goombaApp.
 */
angular.module('goombaApp')
  .factory('ObjectFactory', function (Level, LevelCollection, Tag) {
    // Service logic
    // ...

    var img = "http://placehold.it/100x100";

    var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero ligula, sagittis faucibus elementum eget, congue eget justo. Maecenas vitae hendrerit massa. Mauris a cursus nulla, ac placerat eros. Duis sit amet odio ipsum. Nulla scelerisque blandit facilisis. Nulla pulvinar nec elit nec ultrices. Vestibulum posuere ipsum et lacus rutrum sagittis ac vel sapien. Aliquam at ipsum sagittis neque dignissim sodales. Quisque tempor est vel dui cursus, vitae fringilla dui bibendum. Praesent sit amet gravida urna. In tincidunt lobortis purus, sit amet venenatis ipsum sodales sit amet. Aenean rutrum finibus aliquet. Nulla euismod tellus justo, ac fringilla ipsum aliquam quis. Etiam varius elit nibh, vel pulvinar nisi dignissim a. Maecenas lacinia id mi at viverra. Aliquam erat volutpat.";

    var emptyTag = createTag({title: "Unspecified"});
    var puzzleTag = createTag({title: "Puzzle"});
    var playsItselfTag = createTag({title: "Don't Move"});
    var classicTag = createTag({title: "Classic"});
    var singleScreenTag = createTag({title: "Single Screen"});
    var fastTag = createTag({title: "Fast"});
    var storyTag = createTag({title: "Story"});
    var remakeTag = createTag({title: "Remake"});
    var costumeTag = createTag({title: "Costume"});

    var levels = [
          {title: "Mario Land", ID:"2E04-0000-0047-F484", game: "smw", difficulty: "Medium", tags: [puzzleTag], points: 10, description: description},
          {title: "Yoshi World", ID:"389C-0000-0039-13DE", game: "smb", difficulty: "Easy", tags: [playsItselfTag], points: 114, completed: true, img: img, description: description},
          {title: "Molly's Mushers", ID:"DEFD-0000-0047-F272", game: "smb3", difficulty: "Medium", tags:[puzzleTag, playsItselfTag], points: -5, completed: false},
          {title: "Impossible Feat", ID:"C141-0000-007B-1615", game: "smbu", difficulty: "Hard", points: 0, img: img},
        ];

    function createLevel(options) {
      var level = Object.create(Level);
      level.init(options);
      return level;
    }

    function createLevelCollection(options) {
      var collection = Object.create(LevelCollection);
      collection.init(options);
      return collection;
    }

    function createTag(options) {
      var tag = Object.create(Tag);
      tag.init(options);
      return tag;
    }

    function populateLevelCollection() {
      var collection = this.createLevelCollection();
      var level = this.createLevel(levels[0]);
      var level2 = this.createLevel(levels[1]);
      var level3 = this.createLevel(levels[2]);
      var level4 = this.createLevel(levels[3]);
      collection.add(level);
      collection.add(level2);
      collection.add(level3);
      collection.add(level4);

      return collection;
    }

    function populateTagList() {
      return [emptyTag, puzzleTag, playsItselfTag, classicTag, fastTag, storyTag, singleScreenTag, remakeTag, costumeTag];
    }

    // Public API here
    return {
      createLevel: createLevel,
      createLevelCollection: createLevelCollection,
      createTag: createTag,
      populateLevelCollection: populateLevelCollection,
      populateTagList: populateTagList,
    };
  });
