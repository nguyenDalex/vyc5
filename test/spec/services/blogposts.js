'use strict';

describe('Service: blogPosts', function () {

  // load the service's module
  beforeEach(module('vyc5AngularApp'));

  // instantiate service
  var blogPosts;
  beforeEach(inject(function (_blogPosts_) {
    blogPosts = _blogPosts_;
  }));

  it('should do something', function () {
    expect(!!blogPosts).toBe(true);
  });

});
