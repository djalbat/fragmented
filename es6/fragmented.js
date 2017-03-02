'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const fragment = window.location.hash.substr(1),  ///
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
      window.addEventListener('hashchange', changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      window.removeEventListener('hashchange', changeHandler);
    };

    return fragment;
  },

  set: function(fragment) {
    window.location.hash = fragment;  ///
  }
});
