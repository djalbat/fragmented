"use strict";

import { HASHCHANGE_EVENT_TYPE } from "./eventTypes";
import { HASH, FRAGMENT, EMPTY_STRING } from "./constants";

export function getFragment() {
  const hash = getHash(),
        fragment = new String(hash);  ///

  Object.assign(fragment, {
    getFragment,
    setFragment,
    resetFragment,
    onFragmentChange,
    offFragmentChange
  });

  return fragment;
}

export function setFragment(fragment, silently = true) {
  if (silently) {
    window.removeEventListener(eventType, hashChangeListener);
  }

  const hash = fragment;  ///

  window.location.hash = hash;

  if (silently) {
    setTimeout(() => {
      window.addEventListener(eventType, hashChangeListener);
    }, 0);
  }
}

export function resetFragment(silently = true) {
  const fragment = EMPTY_STRING;

  setFragment(fragment, silently);

  let { href } = location;

  const index = href.indexOf(HASH);

  if (index !== -1) {
    const start = 0,
          end = index;  ///

    href = href.substring(start, end); ///

    history.replaceState({}, EMPTY_STRING, href);
  }
}

export function onFragmentChange(fragmentChangeHandler) {
  addFragmentChangeEventListener(fragmentChangeHandler);
}

export function offFragmentChange(fragmentChangeHandler) {
  removeFragmentChangeEventListener(fragmentChangeHandler);
}

Object.defineProperty(globalThis, FRAGMENT, {
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

function getHash() {
  const { location } = window;

  let { hash } = location;

  const start = 1;

  hash = hash.substring(start);

  return hash;
}

function hashChangeListener(event) {
  const hash = getHash(),
        element = window, ///
        fragment = hash;  ///

  callFragmentChangeHandlers(event, element, fragment);
}

function callFragmentChangeHandlers(event, element, fragment) {
  fragmentChangeHandlers.forEach((fragmentChangeHandler) => {
    fragmentChangeHandler(event, element, fragment);
  });
}

function addFragmentChangeEventListener(fragmentChangeHandler) {
  fragmentChangeHandlers.push(fragmentChangeHandler);

  return fragmentChangeHandler;
}

function removeFragmentChangeEventListener(fragmentChangeHandler) {
  const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler),
        start = index,  ///
        deleteCount = 1;

  fragmentChangeHandlers.splice(start, deleteCount);

  return fragmentChangeHandler;
}
