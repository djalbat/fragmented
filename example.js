(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.example = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const fragmented = require('./fragmented');

function example() {
  console.log(fragment)

  fragment = 'test';

  function fragmentChangeHandler(fragment) {
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

  function fragmentFromHash() {
    const hash = window.location.hash,
          fragment = hash.substr(1);  ///

    return fragment;
  }

  window.onhashchange = function() {
    const fragment = fragmentFromHash();

    changeHandlers.forEach(function(changeHandler) {
      changeHandler(fragment);
    })
  };

  function getFragment() {
    const fragment = fragmentFromHash(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnJhZ21lbnRlZCA9IHJlcXVpcmUoJy4vZnJhZ21lbnRlZCcpO1xuXG5mdW5jdGlvbiBleGFtcGxlKCkge1xuICBjb25zb2xlLmxvZyhmcmFnbWVudClcblxuICBmcmFnbWVudCA9ICd0ZXN0JztcblxuICBmdW5jdGlvbiBmcmFnbWVudENoYW5nZUhhbmRsZXIoZnJhZ21lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhmcmFnbWVudClcbiAgfVxuXG4gIGZyYWdtZW50Lm9uQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgLy8gZnJhZ21lbnQub2ZmQ2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBjaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGZyYWdtZW50RnJvbUhhc2goKSB7XG4gICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLFxuICAgICAgICAgIGZyYWdtZW50ID0gaGFzaC5zdWJzdHIoMSk7ICAvLy9cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxuXG4gIHdpbmRvdy5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGZyYWdtZW50RnJvbUhhc2goKTtcblxuICAgIGNoYW5nZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikge1xuICAgICAgY2hhbmdlSGFuZGxlcihmcmFnbWVudCk7XG4gICAgfSlcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRGcmFnbWVudCgpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGZyYWdtZW50RnJvbUhhc2goKSxcbiAgICAgICAgICBmcmFnbWVudFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihmcmFnbWVudCk7XG5cbiAgICBmcmFnbWVudFByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgICBjaGFuZ2VIYW5kbGVycy5wdXNoKGNoYW5nZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcmFnbWVudFByb3RvdHlwZS5vZmZDaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNoYW5nZUhhbmRsZXJzLmluZGV4T2YoY2hhbmdlSGFuZGxlcik7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNoYW5nZUhhbmRsZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RnJhZ21lbnQoZnJhZ21lbnQpIHtcbiAgICBjb25zdCBoYXNoID0gZnJhZ21lbnQ7ICAvLy9cblxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdmcmFnbWVudCcsIHtcbiAgICBnZXQ6IGdldEZyYWdtZW50LFxuICAgIHNldDogc2V0RnJhZ21lbnRcbiAgfSk7XG59KSgpO1xuIl19
