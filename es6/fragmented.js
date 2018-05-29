'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const fragment = getFragment();

    return fragment;
  },

  set: function(fragment) {
    const furtively = false;

    setFragment(fragment, furtively);
  }
});

window.addEventListener('hashchange', hashChangeHandler);

const changeHandlers = [];

function getFragment() {
  const hash = window.location.hash.substr(1),  ///
        fragment = new String(hash);  ///

  Object.assign(fragment, {
    getFragment: getFragment,
    setFragment: setFragment,
    onFragmentChange: onFragmentChange,
    offFragmentChange: offFragmentChange
  });

  return fragment;
}

function setFragment(fragment, furtively = true) {
  const hash = fragment;  ///

  if (furtively) {
    window.removeEventListener('hashchange', hashChangeHandler);
  }

  window.location.hash = hash;

  if (furtively) {
    window.addEventListener('hashchange', hashChangeHandler);
  }
}

function onFragmentChange(changeHandler) {
  changeHandlers.push(changeHandler);
}

function offFragmentChange(changeHandler) {
  const index = changeHandlers.indexOf(changeHandler);

  if (index > -1) {
    const start = index,  ///
          deleteCount = 1;

    changeHandlers.splice(start, deleteCount);
  }
}

function hashChangeHandler() {
  changeHandlers.forEach(function(changeHandler) {
    changeHandler();
  });
}
