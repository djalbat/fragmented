"use strict";

require("./fragmented");

const { onFragmentChange, offFragmentChange } = fragment;

onFragmentChange(fragmentChangeHandler);

console.log(fragment)

fragment = "test";

// offFragmentChange(fragmentChangeHandler);

function fragmentChangeHandler() {
  console.log(fragment)
}
