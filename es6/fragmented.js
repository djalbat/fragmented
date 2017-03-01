'use strict';

(function() {
  const changeHandlers = [];

  function fragmentFromHash() {
    const hash = window.location.hash,
          fragment = hash.substr(1);  ///

    return fragment;
  }

  window.onhashchange = function() {
    const fragment = fragmentFromHash();

    changeHandlers.forEach(function(changeHandler) {
      changeHandler(fragment);
    })
  };

  function getFragment() {
    const fragment = fragmentFromHash(),
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
       changeHandlers.push(changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      const index = changeHandlers.indexOf(changeHandler);

      if (index > -1) {
        changeHandlers.splice(index, 1)
      }
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
