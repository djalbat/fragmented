"use strict";

import { FRAGMENT } from "./constants";
import { HASHCHANGE_EVENT_TYPE } from "./eventTypes";

export function getFragment() {
  const hash = getHash(),
        fragment = new String(hash);  ///

  Object.assign(fragment, {
    getFragment,
    setFragment,
    onFragmentChange,
    offFragmentChange
  });

  return fragment;
}

export function setFragment(fragment, silently = true) {
  const hash = fragment;  ///

  if (silently) {
    window.removeEventListener(eventType, hashChangeListener);
  }

  window.location.hash = hash;

  if (silently) {
    setTimeout(() => {
      window.addEventListener(eventType, hashChangeListener);
    }, 0);
  }
}

export function onFragmentChange(fragmentChangeHandler) {
  fragmentChangeHandlers.push(fragmentChangeHandler);
}

export function offFragmentChange(fragmentChangeHandler) {
  const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler);

  if (index > -1) {
    const start = index,  ///
          deleteCount = 1;

    fragmentChangeHandlers.splice(start, deleteCount);
  }
}

Object.defineProperty(window, FRAGMENT, {
  get: function() {
    const fragment = getFragment();

    return fragment;
  },

  set: function(fragment) {
    const silently = false;

    setFragment(fragment, silently);
  }
});

const eventType = HASHCHANGE_EVENT_TYPE,
      fragmentChangeHandlers = [];

window.addEventListener(eventType, hashChangeListener);

function hashChangeListener(event) {
  const hash = getHash(),
        fragment = hash;  ///

  fragmentChangeHandlers.forEach((fragmentChangeHandler) => {
    fragmentChangeHandler(event, fragment);
  });
}

function getHash() {
  const { location } = window;

  let { hash } = location;

  const start = 1;

  hash = hash.substring(start);

  return hash;
}