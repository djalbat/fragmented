'use strict';

const fragmented = require('./fragmented');

function example() {
  console.log(fragment)

  fragment = 'test';

  function fragmentChangeHandler() {
    console.log(fragment)
  }

  fragment.onChange(fragmentChangeHandler);

  // fragment.offChange(fragmentChangeHandler);
}

module.exports = example;
