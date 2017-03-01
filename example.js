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

(function() {
  function getFragment() {
    const hash = window.location.hash,
          fragment = hash.substr(1),  ///
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
       window.addEventListener('hashchange', changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      window.removeEventListener('hashchange', changeHandler);
    };

    return fragment;
  }

  function setFragment(fragment) {
    const hash = fragment;  ///

    window.location.hash = hash;
  }

  Object.defineProperty(window, 'fragment', {
    get: getFragment,
    set: setFragment
  });
})();

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudGVkID0gcmVxdWlyZSgnLi9mcmFnbWVudGVkJyk7XG5cbmZ1bmN0aW9uIGV4YW1wbGUoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG4gIGZyYWdtZW50ID0gJ3Rlc3QnO1xuXG4gIGZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZyhmcmFnbWVudClcbiAgfVxuXG4gIGZyYWdtZW50Lm9uQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgLy8gZnJhZ21lbnQub2ZmQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBnZXRGcmFnbWVudCgpIHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gsXG4gICAgICAgICAgZnJhZ21lbnQgPSBoYXNoLnN1YnN0cigxKSwgIC8vL1xuICAgICAgICAgIGZyYWdtZW50UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZyYWdtZW50KTtcblxuICAgIGZyYWdtZW50UHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikge1xuICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIGZyYWdtZW50UHJvdG90eXBlLm9mZkNoYW5nZSA9IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50KSB7XG4gICAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnZnJhZ21lbnQnLCB7XG4gICAgZ2V0OiBnZXRGcmFnbWVudCxcbiAgICBzZXQ6IHNldEZyYWdtZW50XG4gIH0pO1xufSkoKTtcbiJdfQ==
