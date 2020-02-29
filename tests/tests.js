/* Copyright (c) 2015 Google Inc. All rights reserved. */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
mocha.setup({ui: 'tdd', slow: 1000, timeout: 5000, htmlbase: ''});

htmlSuite('google-sheet', function() {
  htmlTest('google-sheet.html');
  htmlTest('published.html');
  htmlTest('private.html');
});

mocha.run();
