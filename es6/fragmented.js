'use strict';

(function() {
  function getFragment() {
    const hash = window.location.hash,
          fragment = hash.substr(1),  ///
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
       window.addEventListener('hashchange', changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      window.removeEventListener('hashchange', changeHandler);
    };

    return fragment;
  }

  function setFragment(fragment) {
    const hash = fragment;  ///

    window.location.hash = hash;
  }

  Object.defineProperty(window, 'fragment', {
    get: getFragment,
    set: setFragment
  });
})();
