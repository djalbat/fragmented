(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "HASHCHANGE_EVENT_TYPE", {
      enumerable: true,
      get: function() {
        return HASHCHANGE_EVENT_TYPE;
      }
    });
    var HASHCHANGE_EVENT_TYPE = "hashchange";
  });

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      FRAGMENT: function() {
        return FRAGMENT;
      },
      HASH: function() {
        return HASH;
      }
    });
    var HASH = "#";
    var FRAGMENT = "fragment";
    var EMPTY_STRING = "";
  });

  // lib/fragmented.js
  var require_fragmented = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      getFragment: function() {
        return getFragment;
      },
      offFragmentChange: function() {
        return offFragmentChange;
      },
      onFragmentChange: function() {
        return onFragmentChange;
      },
      resetFragment: function() {
        return resetFragment;
      },
      setFragment: function() {
        return setFragment;
      }
    });
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    function getFragment() {
      var hash = getHash(), fragment2 = new String(hash);
      Object.assign(fragment2, {
        getFragment,
        setFragment,
        resetFragment,
        onFragmentChange,
        offFragmentChange
      });
      return fragment2;
    }
    function setFragment(fragment2) {
      var silently = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (silently) {
        window.removeEventListener(eventType, hashChangeListener);
      }
      var hash = fragment2;
      window.location.hash = hash;
      if (silently) {
        setTimeout(function() {
          window.addEventListener(eventType, hashChangeListener);
        }, 0);
      }
    }
    function resetFragment() {
      var silently = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (silently) {
        window.removeEventListener(eventType, hashChangeListener);
      }
      var href = location.href;
      var index = href.indexOf(_constants.HASH);
      if (index !== -1) {
        var start = 0, end = index;
        href = href.substring(start, end);
        history.pushState({}, _constants.EMPTY_STRING, href);
      }
      if (silently) {
        setTimeout(function() {
          window.addEventListener(eventType, hashChangeListener);
        }, 0);
      }
    }
    function onFragmentChange(fragmentChangeHandler) {
      var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
      addFragmentChangeEventListener(fragmentChangeHandler, element);
    }
    function offFragmentChange(fragmentChangeHandler) {
      var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
      removeFragmentChangeEventListener(fragmentChangeHandler, element);
    }
    Object.defineProperty(globalThis, _constants.FRAGMENT, {
      get: function get() {
        var fragment2 = getFragment();
        return fragment2;
      },
      set: function set(fragment2) {
        var silently = false;
        setFragment(fragment2, silently);
      }
    });
    var eventType = _eventTypes.HASHCHANGE_EVENT_TYPE;
    var fragmentChangeEventListeners = [];
    window.addEventListener(eventType, hashChangeListener);
    function getHash() {
      var location1 = window.location;
      var hash = location1.hash;
      var start = 1;
      hash = hash.substring(start);
      return hash;
    }
    function hashChangeListener(event) {
      var hash = getHash(), element = window, fragment2 = hash;
      callFragmentChangeHandlers(event, element, fragment2);
    }
    function callFragmentChangeHandlers(event, element, fragment2) {
      fragmentChangeEventListeners.forEach(function(fragmentChangeEventListener) {
        var fragmentChangeHandler = fragmentChangeEventListener.fragmentChangeHandler, fragmentChangeHandlerElement = fragmentChangeEventListener.element;
        fragmentChangeHandler.call(fragmentChangeHandlerElement, event, element, fragment2);
      });
    }
    function addFragmentChangeEventListener(fragmentChangeHandler, element) {
      var fragmentChangeEventListener = createFragmentChangeEventListener(fragmentChangeHandler, element);
      fragmentChangeEventListeners.push(fragmentChangeEventListener);
      return fragmentChangeEventListener;
    }
    function removeFragmentChangeEventListener(fragmentChangeHandler, element) {
      var fragmentChangeEventListener = findFragmentChangeEventListener(fragmentChangeHandler, element), index = fragmentChangeEventListeners.indexOf(fragmentChangeEventListener), start = index, deleteCount = 1;
      fragmentChangeEventListeners.splice(start, deleteCount);
      return fragmentChangeEventListener;
    }
    function createFragmentChangeEventListener(fragmentChangeHandler, element) {
      var fragmentChangeEventListener;
      fragmentChangeEventListener = function() {
      };
      Object.assign(fragmentChangeEventListener, {
        element,
        fragmentChangeHandler
      });
      return fragmentChangeEventListener;
    }
    function findFragmentChangeEventListener(fragmentChangeHandler, element) {
      var fragmentChangeEventListener = fragmentChangeEventListeners.find(function(fragmentChangeEventListener2) {
        if (fragmentChangeEventListener2.element === element && fragmentChangeEventListener2.fragmentChangeHandler === fragmentChangeHandler) {
          return true;
        }
      });
      return fragmentChangeEventListener;
    }
  });

  // lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      getFragment: function() {
        return _fragmented.getFragment;
      },
      offFragmentChange: function() {
        return _fragmented.offFragmentChange;
      },
      onFragmentChange: function() {
        return _fragmented.onFragmentChange;
      },
      resetFragment: function() {
        return _fragmented.resetFragment;
      },
      setFragment: function() {
        return _fragmented.setFragment;
      }
    });
    var _fragmented = require_fragmented();
  });

  // lib/example.js
  var require_example = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    require_lib();
    var onFragmentChange = fragment.onFragmentChange;
    var offFragmentChange = fragment.offFragmentChange;
    onFragmentChange(fragmentChangeHandler);
    console.log(fragment);
    fragment = "test";
    function fragmentChangeHandler() {
      console.log(fragment);
    }
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgSEFTSENIQU5HRV9FVkVOVF9UWVBFID0gXCJoYXNoY2hhbmdlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIID0gXCIjXCI7XG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEhBU0gsIEZSQUdNRU5ULCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgcmVzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZyYWdtZW50KHNpbGVudGx5ID0gdHJ1ZSkge1xuICBpZiAoc2lsZW50bHkpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICBsZXQgeyBocmVmIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBpbmRleCA9IGhyZWYuaW5kZXhPZihIQVNIKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IC8vL1xuXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIEVNUFRZX1NUUklORywgaHJlZik7XG4gIH1cblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICByZW1vdmVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIEZSQUdNRU5ULCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBzaWxlbnRseSA9IGZhbHNlO1xuXG4gICAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcbiAgfVxufSk7XG5cbmNvbnN0IGV2ZW50VHlwZSA9IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSxcbiAgICAgIGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBnZXRIYXNoKCkge1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSB3aW5kb3c7XG5cbiAgbGV0IHsgaGFzaCB9ID0gbG9jYXRpb247XG5cbiAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gIGhhc2ggPSBoYXNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBlbGVtZW50ID0gd2luZG93LCAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBoYXNoOyAgLy8vXG5cbiAgY2FsbEZyYWdtZW50Q2hhbmdlSGFuZGxlcnMoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gY2FsbEZyYWdtZW50Q2hhbmdlSGFuZGxlcnMoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KSB7XG4gIGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgeyBmcmFnbWVudENoYW5nZUhhbmRsZXIsIGVsZW1lbnQ6IGZyYWdtZW50Q2hhbmdlSGFuZGxlckVsZW1lbnQgfSA9IGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcjsgLy8vXG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIuY2FsbChmcmFnbWVudENoYW5nZUhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBmcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIgPSBjcmVhdGVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTtcblxuICBmcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXJzLnB1c2goZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lciA9IGZpbmRGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSBmcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICByZXR1cm4gZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBmcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXI7XG5cbiAgZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyID0gKCkgPT4ge307IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyID0gZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVycy5maW5kKChmcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyLmZyYWdtZW50Q2hhbmdlSGFuZGxlciA9PT0gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2ZyYWdtZW50ZWRcIjtcblxuZXhwb3J0IHsgZ2V0RnJhZ21lbnQsIHNldEZyYWdtZW50LCByZXNldEZyYWdtZW50LCBvbkZyYWdtZW50Q2hhbmdlLCBvZmZGcmFnbWVudENoYW5nZSB9IGZyb20gXCIuL2ZyYWdtZW50ZWRcIjtcblxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2luZGV4XCI7IC8vL1xuXG5jb25zdCB7IG9uRnJhZ21lbnRDaGFuZ2UsIG9mZkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxub25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5jb25zb2xlLmxvZyhmcmFnbWVudClcblxuZnJhZ21lbnQgPSBcInRlc3RcIjtcblxuLy8gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuZnVuY3Rpb24gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKCkge1xuICBjb25zb2xlLmxvZyhmcmFnbWVudClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7bUNBRWEseUJBQUE7OztlQUFBOzs7QUFBTixRQUFNLHdCQUF3Qjs7OztBQ0ZyQzs7Ozs7Ozs7Ozs7OztNQUlhLGNBQVksV0FBQTtlQUFaOztNQURBLFVBQVEsV0FBQTtlQUFSOztNQURBLE1BQUksV0FBQTtlQUFKOzs7QUFBTixRQUFNLE9BQU87QUFDYixRQUFNLFdBQVc7QUFDakIsUUFBTSxlQUFlOzs7O0FDSjVCOzs7Ozs7Ozs7Ozs7O01BS2dCLGFBQVcsV0FBQTtlQUFYOztNQTREQSxtQkFBaUIsV0FBQTtlQUFqQjs7TUFKQSxrQkFBZ0IsV0FBQTtlQUFoQjs7TUF6QkEsZUFBYSxXQUFBO2VBQWI7O01BaEJBLGFBQVcsV0FBQTtlQUFYOzs7OztBQWZULDJCQUFTO0FBQ2QsVUFBTSxPQUFPLFdBQ1AsWUFBVyxJQUFJLE9BQU87QUFFNUIsYUFBTyxPQUFPLFdBQVU7UUFDdEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7QUFHRixhQUFPOztBQUdGLHlCQUFxQixXQUFRO1VBQUUsV0FBQSxVQUFBLFNBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxVQUFBLEtBQVc7QUFDL0MsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBb0IsV0FBVzs7QUFHeEMsVUFBTSxPQUFPO0FBRWIsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVcsV0FBQTtBQUNULGlCQUFPLGlCQUFpQixXQUFXO1dBQ2xDOzs7QUFJQSw2QkFBUztVQUFjLFdBQUEsVUFBQSxTQUFBLEtBQUEsVUFBQSxPQUFBLFNBQUEsVUFBQSxLQUFXO0FBQ3ZDLFVBQUksVUFBVTtBQUNaLGVBQU8sb0JBQW9CLFdBQVc7O0FBR3hDLFVBQU0sT0FBUyxTQUFUO0FBRU4sVUFBTSxRQUFRLEtBQUssUUFBUSxXQUFBO0FBRTNCLFVBQUksVUFBVSxJQUFJO0FBQ2hCLFlBQU0sUUFBUSxHQUNSLE1BQU07QUFFWixlQUFPLEtBQUssVUFBVSxPQUFPO0FBRTdCLGdCQUFRLFVBQVUsSUFBSSxXQUFBLGNBQWM7O0FBR3RDLFVBQUksVUFBVTtBQUNaLG1CQUFXLFdBQUE7QUFDVCxpQkFBTyxpQkFBaUIsV0FBVztXQUNsQzs7O0FBSUEsOEJBQTBCLHVCQUFxQjtVQUFFLFVBQUEsVUFBQSxTQUFBLEtBQUEsVUFBQSxPQUFBLFNBQUEsVUFBQSxLQUFVO0FBQ2hFLHFDQUErQix1QkFBdUI7O0FBR2pELCtCQUEyQix1QkFBcUI7VUFBRSxVQUFBLFVBQUEsU0FBQSxLQUFBLFVBQUEsT0FBQSxTQUFBLFVBQUEsS0FBVTtBQUNqRSx3Q0FBa0MsdUJBQXVCOztBQUczRCxXQUFPLGVBQWUsWUFBWSxXQUFBLFVBQVU7TUFDMUMsS0FBSyxlQUFMO0FBQ0UsWUFBTSxZQUFXO0FBRWpCLGVBQU87O01BR1QsS0FBSyxhQUFTLFdBQVE7QUFDcEIsWUFBTSxXQUFXO0FBRWpCLG9CQUFZLFdBQVU7OztBQUkxQixRQUFNLFlBQVksWUFBQTtBQUFsQixRQUNNLCtCQUErQjtBQUVyQyxXQUFPLGlCQUFpQixXQUFXO0FBRW5DLHVCQUFTO0FBQ1AsVUFBUSxZQUFhLE9BQWI7QUFFUixVQUFNLE9BQVMsVUFBVDtBQUVOLFVBQU0sUUFBUTtBQUVkLGFBQU8sS0FBSyxVQUFVO0FBRXRCLGFBQU87O0FBR1QsZ0NBQTRCLE9BQUs7QUFDL0IsVUFBTSxPQUFPLFdBQ1AsVUFBVSxRQUNWLFlBQVc7QUFFakIsaUNBQTJCLE9BQU8sU0FBUzs7QUFHN0Msd0NBQW9DLE9BQU8sU0FBUyxXQUFRO0FBQzFELG1DQUE2QixRQUFRLFNBQUMsNkJBQUE7QUFDcEMsWUFBUSx3QkFBaUUsNEJBQWpFLHVCQUFnQywrQkFBaUMsNEJBQTFDO0FBRS9CLDhCQUFzQixLQUFLLDhCQUE4QixPQUFPLFNBQVM7OztBQUk3RSw0Q0FBd0MsdUJBQXVCLFNBQU87QUFDcEUsVUFBTSw4QkFBOEIsa0NBQWtDLHVCQUF1QjtBQUU3RixtQ0FBNkIsS0FBSztBQUVsQyxhQUFPOztBQUdULCtDQUEyQyx1QkFBdUIsU0FBTztBQUN2RSxVQUFNLDhCQUE4QixnQ0FBZ0MsdUJBQXVCLFVBQ3JGLFFBQVEsNkJBQTZCLFFBQVEsOEJBQzdDLFFBQVEsT0FDUixjQUFjO0FBRXBCLG1DQUE2QixPQUFPLE9BQU87QUFFM0MsYUFBTzs7QUFHVCwrQ0FBMkMsdUJBQXVCLFNBQU87QUFDdkUsVUFBSTtBQUVKLG9DQUE4QixXQUFBOztBQUU5QixhQUFPLE9BQU8sNkJBQTZCO1FBQ3pDO1FBQ0E7O0FBR0YsYUFBTzs7QUFHVCw2Q0FBeUMsdUJBQXVCLFNBQU87QUFDckUsVUFBTSw4QkFBOEIsNkJBQTZCLEtBQUssU0FBQyw4QkFBQTtBQUNyRSxZQUFLLDZCQUE0QixZQUFZLFdBQWEsNkJBQTRCLDBCQUEwQix1QkFBd0I7QUFDdEksaUJBQU87OztBQUlYLGFBQU87Ozs7O0FDM0pUOzs7Ozs7Ozs7Ozs7O01BSVMsYUFBVyxXQUFBO2VBQVgsWUFBQTs7TUFBMkQsbUJBQWlCLFdBQUE7ZUFBakIsWUFBQTs7TUFBbEIsa0JBQWdCLFdBQUE7ZUFBaEIsWUFBQTs7TUFBZixlQUFhLFdBQUE7ZUFBYixZQUFBOztNQUFiLGFBQVcsV0FBQTtlQUFYLFlBQUE7Ozs7Ozs7QUNKdEI7Ozs7OztBQUlBLFFBQVEsbUJBQXdDLFNBQXhDO0FBQVIsUUFBMEIsb0JBQXNCLFNBQXRCO0FBRTFCLHFCQUFpQjtBQUVqQixZQUFRLElBQUk7QUFFWixlQUFXO0FBSVgscUNBQVM7QUFDUCxjQUFRLElBQUk7OzsiLAogICJuYW1lcyI6IFtdCn0K
