(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.example = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./fragmented":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const hash = window.location.hash.substr(1),  ///
          fragment = new String(hash);  ///

    Object.assign(fragment, {
      onChange: onChange,
      offChange: offChange
    });

    return fragment;
  },

  set: function(hash) {
    window.location.hash = hash;
  }
});

function onChange(changeHandler) {
  window.addEventListener('hashchange', changeHandler);
}

function offChange(changeHandler) {
  window.removeEventListener('hashchange', changeHandler);
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudGVkID0gcmVxdWlyZSgnLi9mcmFnbWVudGVkJyk7XG5cbmZ1bmN0aW9uIGV4YW1wbGUoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG4gIGZyYWdtZW50ID0gJ3Rlc3QnO1xuXG4gIGZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZyhmcmFnbWVudClcbiAgfVxuXG4gIGZyYWdtZW50Lm9uQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgLy8gZnJhZ21lbnQub2ZmQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ2ZyYWdtZW50Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgIG9mZkNoYW5nZTogb2ZmQ2hhbmdlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihoYXNoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuICB9XG59KTtcblxuZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xufVxuIl19
