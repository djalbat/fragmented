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
  const changeHandlers = [];

  window.onhashchange = function() {
    changeHandlers.forEach(function(changeHandler) {
      changeHandler();
    })
  };

  function getFragment() {
    const hash = window.location.hash,
          fragment = hash.substr(1),  ///
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
       changeHandlers.push(changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      const index = changeHandlers.indexOf(changeHandler);

      if (index > -1) {
        changeHandlers.splice(index, 1)
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcmFnbWVudGVkID0gcmVxdWlyZSgnLi9mcmFnbWVudGVkJyk7XG5cbmZ1bmN0aW9uIGV4YW1wbGUoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG4gIGZyYWdtZW50ID0gJ3Rlc3QnO1xuXG4gIGZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgICBjb25zb2xlLmxvZyhmcmFnbWVudClcbiAgfVxuXG4gIGZyYWdtZW50Lm9uQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgLy8gZnJhZ21lbnQub2ZmQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBjaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG4gIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBjaGFuZ2VIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIGNoYW5nZUhhbmRsZXIoKTtcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICAgIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCxcbiAgICAgICAgICBmcmFnbWVudCA9IGhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgICAgZnJhZ21lbnRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJhZ21lbnQpO1xuXG4gICAgZnJhZ21lbnRQcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICAgY2hhbmdlSGFuZGxlcnMucHVzaChjaGFuZ2VIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgZnJhZ21lbnRQcm90b3R5cGUub2ZmQ2hhbmdlID0gZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikge1xuICAgICAgY29uc3QgaW5kZXggPSBjaGFuZ2VIYW5kbGVycy5pbmRleE9mKGNoYW5nZUhhbmRsZXIpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjaGFuZ2VIYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50KSB7XG4gICAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gIH1cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnZnJhZ21lbnQnLCB7XG4gICAgZ2V0OiBnZXRGcmFnbWVudCxcbiAgICBzZXQ6IHNldEZyYWdtZW50XG4gIH0pO1xufSkoKTtcbiJdfQ==
