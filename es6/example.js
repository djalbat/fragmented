'use strict';

require('./fragmented');

const { onFragmentChange, offFragmentChange } = fragment;

function example() {
  onFragmentChange(fragmentChangeHandler);

  console.log(fragment)

  fragment = 'test';

  // offFragmentChange(fragmentChangeHandler);
}

module.exports = example;

function fragmentChangeHandler() {
  console.log(fragment)
}
