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
    const silently = false;

    setFragment(fragment, silently);
  }
});

window.addEventListener('hashchange', hashChangeListener);

const fragmentChangeHandlers = [];

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

function setFragment(fragment, silently = true) {
  const hash = fragment;  ///

  if (silently) {
    window.removeEventListener('hashchange', hashChangeListener);
  }

  window.location.hash = hash;

  if (silently) {
    setTimeout(function() {
      window.addEventListener('hashchange', hashChangeListener);
    }, 0);
  }
}

function onFragmentChange(fragmentChangeHandler) {
  fragmentChangeHandlers.push(fragmentChangeHandler);
}

function offFragmentChange(fragmentChangeHandler) {
  const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler);

  if (index > -1) {
    const start = index,  ///
          deleteCount = 1;

    fragmentChangeHandlers.splice(start, deleteCount);
  }
}

function hashChangeListener() {
  fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
    fragmentChangeHandler();
  });
}

},{}]},{},[1])(1)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlczYvZXhhbXBsZS5qcyIsImVzNi9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vZnJhZ21lbnRlZCcpO1xuXG5jb25zdCB7IG9uRnJhZ21lbnRDaGFuZ2UsIG9mZkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxuZnVuY3Rpb24gZXhhbXBsZSgpIHtcbiAgb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG4gIGZyYWdtZW50ID0gJ3Rlc3QnO1xuXG4gIC8vIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcblxuZnVuY3Rpb24gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKCkge1xuICBjb25zb2xlLmxvZyhmcmFnbWVudClcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ2ZyYWdtZW50Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmNvbnN0IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50OiBnZXRGcmFnbWVudCxcbiAgICBzZXRGcmFnbWVudDogc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZTogb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZTogb2ZmRnJhZ21lbnRDaGFuZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMucHVzaChmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpO1xuICB9KTtcbn1cbiJdfQ==
