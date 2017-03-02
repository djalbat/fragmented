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
  get: function () {
    const fragment = window.location.hash.substr(1),  ///
          fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function(changeHandler) {
      window.addEventListener('hashchange', changeHandler);
    };

    fragmentPrototype.offChange = function(changeHandler) {
      window.removeEventListener('hashchange', changeHandler);
    };

    return fragment;
  },

  set: function (fragment) {
    window.location.hash = fragment;  ///
  }
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZyYWdtZW50ZWQgPSByZXF1aXJlKCcuL2ZyYWdtZW50ZWQnKTtcblxuZnVuY3Rpb24gZXhhbXBsZSgpIHtcbiAgY29uc29sZS5sb2coZnJhZ21lbnQpXG5cbiAgZnJhZ21lbnQgPSAndGVzdCc7XG5cbiAgZnVuY3Rpb24gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKCkge1xuICAgIGNvbnNvbGUubG9nKGZyYWdtZW50KVxuICB9XG5cbiAgZnJhZ21lbnQub25DaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICAvLyBmcmFnbWVudC5vZmZDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnZnJhZ21lbnQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgICAgZnJhZ21lbnRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJhZ21lbnQpO1xuXG4gICAgZnJhZ21lbnRQcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcmFnbWVudFByb3RvdHlwZS5vZmZDaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGZyYWdtZW50OyAgLy8vXG4gIH1cbn0pO1xuIl19
