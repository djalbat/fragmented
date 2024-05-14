"use strict";

import "./index"; ///

const { resetFragment, onFragmentChange } = fragment;

onFragmentChange(fragmentChangeHandler);

console.log(`Initially: '${fragment}'.`)

fragment = "test";

function fragmentChangeHandler() {
  console.log(`Changed to '${fragment}'.`)
}

window.addEventListener("click", () => {
  const silently = false;

  resetFragment(silently);
});