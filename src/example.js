"use strict";

import "./index"; ///

const { onFragmentChange, offFragmentChange } = fragment;

onFragmentChange(fragmentChangeHandler);

console.log(fragment)

fragment = "test";

// offFragmentChange(fragmentChangeHandler);

function fragmentChangeHandler() {
  console.log(fragment)
}
