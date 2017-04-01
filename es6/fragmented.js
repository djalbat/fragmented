'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const hash = window.location.hash.substr(1),  ///
          fragment = new String(hash);  ///

    Object.assign(fragment, {
      onChange: onChange,
      offChange: offChange
    });

    return fragment;
  },

  set: function(hash) {
    window.location.hash = hash;
  }
});

function onChange(changeHandler) {
  window.addEventListener('hashchange', changeHandler);
}

function offChange(changeHandler) {
  window.removeEventListener('hashchange', changeHandler);
}
