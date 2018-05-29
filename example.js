(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.example = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./fragmented":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(window, 'fragment', {
  get: function() {
    const fragment = getFragment();

    return fragment;
  },

  set: function(fragment) {
    const furtively = false;

    setFragment(fragment, furtively);
  }
});

window.addEventListener('hashchange', hashChangeHandler);

const changeHandlers = [];

function getFragment() {
  const hash = window.location.hash.substr(1),  ///
        fragment = new String(hash);  ///

  Object.assign(fragment, {
    getFragment: getFragment,
    setFragment: setFragment,
    onFragmentChange: onFragmentChange,
    offFragmentChange: offFragmentChange
  });

  return fragment;
}

function setFragment(fragment, furtively = true) {
  const hash = fragment;  ///

  if (furtively) {
    window.removeEventListener('hashchange', hashChangeHandler);
  }

  window.location.hash = hash;

  if (furtively) {
    window.addEventListener('hashchange', hashChangeHandler);
  }
}

function onFragmentChange(changeHandler) {
  changeHandlers.push(changeHandler);
}

function offFragmentChange(changeHandler) {
  const index = changeHandlers.indexOf(changeHandler);

  if (index > -1) {
    const start = index,  ///
          deleteCount = 1;

    changeHandlers.splice(start, deleteCount);
  }
}

function hashChangeHandler() {
  changeHandlers.forEach(function(changeHandler) {
    changeHandler();
  });
}

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9mcmFnbWVudGVkJyk7XG5cbmNvbnN0IHsgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSA9IGZyYWdtZW50O1xuXG5mdW5jdGlvbiBleGFtcGxlKCkge1xuICBvbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgY29uc29sZS5sb2coZnJhZ21lbnQpXG5cbiAgZnJhZ21lbnQgPSAndGVzdCc7XG5cbiAgLy8gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlO1xuXG5mdW5jdGlvbiBmcmFnbWVudENoYW5nZUhhbmRsZXIoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnZnJhZ21lbnQnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBmdXJ0aXZlbHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBmdXJ0aXZlbHkpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcik7XG5cbmNvbnN0IGNoYW5nZUhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gbmV3IFN0cmluZyhoYXNoKTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICBnZXRGcmFnbWVudDogZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQ6IHNldEZyYWdtZW50LFxuICAgIG9uRnJhZ21lbnRDaGFuZ2U6IG9uRnJhZ21lbnRDaGFuZ2UsXG4gICAgb2ZmRnJhZ21lbnRDaGFuZ2U6IG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0RnJhZ21lbnQoZnJhZ21lbnQsIGZ1cnRpdmVseSA9IHRydWUpIHtcbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgaWYgKGZ1cnRpdmVseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChmdXJ0aXZlbHkpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGhhc2hDaGFuZ2VIYW5kbGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkZyYWdtZW50Q2hhbmdlKGNoYW5nZUhhbmRsZXIpIHtcbiAgY2hhbmdlSGFuZGxlcnMucHVzaChjaGFuZ2VIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGNoYW5nZUhhbmRsZXJzLmluZGV4T2YoY2hhbmdlSGFuZGxlcik7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgY2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUhhbmRsZXIoKSB7XG4gIGNoYW5nZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oY2hhbmdlSGFuZGxlcikge1xuICAgIGNoYW5nZUhhbmRsZXIoKTtcbiAgfSk7XG59XG4iXX0=
