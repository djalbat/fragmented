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
  if (silently) {
    window.removeEventListener(eventType, hashChangeListener);
  }

  let { href } = location;

  const index = href.indexOf(HASH);

  if (index !== -1) {
    const start = 0,
          end = index;  ///

    href = href.substring(start, end); ///

    history.pushState({}, EMPTY_STRING, href);
  }

  if (silently) {
    setTimeout(() => {
      window.addEventListener(eventType, hashChangeListener);
    }, 0);
  }
}

export function onFragmentChange(fragmentChangeHandler, element = this) {
  addFragmentChangeEventListener(fragmentChangeHandler, element);
}

export function offFragmentChange(fragmentChangeHandler, element = this) {
  removeFragmentChangeEventListener(fragmentChangeHandler, element);
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
      fragmentChangeEventListeners = [];

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
  fragmentChangeEventListeners.forEach((fragmentChangeEventListener) => {
    const { fragmentChangeHandler, element: fragmentChangeHandlerElement } = fragmentChangeEventListener; ///

    fragmentChangeHandler.call(fragmentChangeHandlerElement, event, element, fragment);
  });
}

function addFragmentChangeEventListener(fragmentChangeHandler, element) {
  const fragmentChangeEventListener = createFragmentChangeEventListener(fragmentChangeHandler, element);

  fragmentChangeEventListeners.push(fragmentChangeEventListener);

  return fragmentChangeEventListener;
}

function removeFragmentChangeEventListener(fragmentChangeHandler, element) {
  const fragmentChangeEventListener = findFragmentChangeEventListener(fragmentChangeHandler, element),
        index = fragmentChangeEventListeners.indexOf(fragmentChangeEventListener),
        start = index,  ///
        deleteCount = 1;

  fragmentChangeEventListeners.splice(start, deleteCount);

  return fragmentChangeEventListener;
}

function createFragmentChangeEventListener(fragmentChangeHandler, element) {
  let fragmentChangeEventListener;

  fragmentChangeEventListener = () => {}; ///

  Object.assign(fragmentChangeEventListener, {
    element,
    fragmentChangeHandler
  });

  return fragmentChangeEventListener;
}

function findFragmentChangeEventListener(fragmentChangeHandler, element) {
  const fragmentChangeEventListener = fragmentChangeEventListeners.find((fragmentChangeEventListener) => {
    if ((fragmentChangeEventListener.element === element) && (fragmentChangeEventListener.fragmentChangeHandler === fragmentChangeHandler)) {
      return true;
    }
  });

  return fragmentChangeEventListener;
}
