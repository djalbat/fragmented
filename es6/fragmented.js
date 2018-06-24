'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const fragment = getFragment();

    return fragment;
  },

  set: function(fragment) {
    const silently = false;

    setFragment(fragment, silently);
  }
});

window.addEventListener('hashchange', hashChangeListener);

const fragmentChangeHandlers = [];

function getFragment() {
  const hash = window.location.hash.substr(1),  ///
        fragment = new String(hash);  ///

  Object.assign(fragment, {
    getFragment,
    setFragment,
    onFragmentChange,
    offFragmentChange
  });

  return fragment;
}

function setFragment(fragment, silently = true) {
  const hash = fragment;  ///

  if (silently) {
    window.removeEventListener('hashchange', hashChangeListener);
  }

  window.location.hash = hash;

  if (silently) {
    setTimeout(function() {
      window.addEventListener('hashchange', hashChangeListener);
    }, 0);
  }
}

function onFragmentChange(fragmentChangeHandler) {
  fragmentChangeHandlers.push(fragmentChangeHandler);
}

function offFragmentChange(fragmentChangeHandler) {
  const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler);

  if (index > -1) {
    const start = index,  ///
          deleteCount = 1;

    fragmentChangeHandlers.splice(start, deleteCount);
  }
}

function hashChangeListener() {
  const hash = window.location.hash.substr(1),  ///
        fragment = hash;  ///

  fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
    fragmentChangeHandler(fragment);
  });
}
