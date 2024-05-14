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
      var fragment2 = _constants.EMPTY_STRING;
      setFragment(fragment2, silently);
      var href = location.href;
      var index = href.indexOf(_constants.HASH);
      if (index !== -1) {
        var start = 0, end = index;
        href = href.substring(start, end);
        history.replaceState({}, _constants.EMPTY_STRING, href);
      }
    }
    function onFragmentChange(fragmentChangeHandler) {
      addFragmentChangeEventListener(fragmentChangeHandler);
    }
    function offFragmentChange(fragmentChangeHandler) {
      removeFragmentChangeEventListener(fragmentChangeHandler);
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
    var fragmentChangeHandlers = [];
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
      fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(event, element, fragment2);
      });
    }
    function addFragmentChangeEventListener(fragmentChangeHandler) {
      fragmentChangeHandlers.push(fragmentChangeHandler);
      return fragmentChangeHandler;
    }
    function removeFragmentChangeEventListener(fragmentChangeHandler) {
      var index = fragmentChangeHandlers.indexOf(fragmentChangeHandler), start = index, deleteCount = 1;
      fragmentChangeHandlers.splice(start, deleteCount);
      return fragmentChangeHandler;
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
    var resetFragment = fragment.resetFragment;
    var onFragmentChange = fragment.onFragmentChange;
    onFragmentChange(fragmentChangeHandler);
    console.log("Initially: '".concat(fragment, "'."));
    fragment = "test";
    function fragmentChangeHandler() {
      console.log("Changed to '".concat(fragment, "'."));
    }
    window.addEventListener("click", function() {
      var silently = false;
      resetFragment(silently);
    });
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgSEFTSENIQU5HRV9FVkVOVF9UWVBFID0gXCJoYXNoY2hhbmdlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIID0gXCIjXCI7XG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEhBU0gsIEZSQUdNRU5ULCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgcmVzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZyYWdtZW50KHNpbGVudGx5ID0gdHJ1ZSkge1xuICBjb25zdCBmcmFnbWVudCA9IEVNUFRZX1NUUklORztcblxuICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuXG4gIGxldCB7IGhyZWYgfSA9IGxvY2F0aW9uO1xuXG4gIGNvbnN0IGluZGV4ID0gaHJlZi5pbmRleE9mKEhBU0gpO1xuXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IDAsXG4gICAgICAgICAgZW5kID0gaW5kZXg7ICAvLy9cblxuICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZyhzdGFydCwgZW5kKTsgLy8vXG5cbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgRU1QVFlfU1RSSU5HLCBocmVmKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgYWRkRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgcmVtb3ZlRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBGUkFHTUVOVCwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG5jb25zdCBldmVudFR5cGUgPSBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuZnVuY3Rpb24gZ2V0SGFzaCgpIHtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gd2luZG93O1xuXG4gIGxldCB7IGhhc2ggfSA9IGxvY2F0aW9uO1xuXG4gIGNvbnN0IHN0YXJ0ID0gMTtcblxuICBoYXNoID0gaGFzaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5mdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgaGFzaCA9IGdldEhhc2goKSxcbiAgICAgICAgZWxlbWVudCA9IHdpbmRvdywgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gaGFzaDsgIC8vL1xuXG4gIGNhbGxGcmFnbWVudENoYW5nZUhhbmRsZXJzKGV2ZW50LCBlbGVtZW50LCBmcmFnbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNhbGxGcmFnbWVudENoYW5nZUhhbmRsZXJzKGV2ZW50LCBlbGVtZW50LCBmcmFnbWVudCkge1xuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmZvckVhY2goKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikgPT4ge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnB1c2goZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICByZXR1cm4gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGNvbnN0IGluZGV4ID0gZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5pbmRleE9mKGZyYWdtZW50Q2hhbmdlSGFuZGxlciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgcmV0dXJuIGZyYWdtZW50Q2hhbmdlSGFuZGxlcjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9mcmFnbWVudGVkXCI7XG5cbmV4cG9ydCB7IGdldEZyYWdtZW50LCBzZXRGcmFnbWVudCwgcmVzZXRGcmFnbWVudCwgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSBmcm9tIFwiLi9mcmFnbWVudGVkXCI7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyByZXNldEZyYWdtZW50LCBvbkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxub25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5jb25zb2xlLmxvZyhgSW5pdGlhbGx5OiAnJHtmcmFnbWVudH0nLmApXG5cbmZyYWdtZW50ID0gXCJ0ZXN0XCI7XG5cbmZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgY29uc29sZS5sb2coYENoYW5nZWQgdG8gJyR7ZnJhZ21lbnR9Jy5gKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICByZXNldEZyYWdtZW50KHNpbGVudGx5KTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7bUNBRWEseUJBQUE7OztlQUFBOzs7QUFBTixRQUFNLHdCQUF3Qjs7OztBQ0ZyQzs7Ozs7Ozs7Ozs7OztNQUlhLGNBQVksV0FBQTtlQUFaOztNQURBLFVBQVEsV0FBQTtlQUFSOztNQURBLE1BQUksV0FBQTtlQUFKOzs7QUFBTixRQUFNLE9BQU87QUFDYixRQUFNLFdBQVc7QUFDakIsUUFBTSxlQUFlOzs7O0FDSjVCOzs7Ozs7Ozs7Ozs7O01BS2dCLGFBQVcsV0FBQTtlQUFYOztNQXNEQSxtQkFBaUIsV0FBQTtlQUFqQjs7TUFKQSxrQkFBZ0IsV0FBQTtlQUFoQjs7TUFuQkEsZUFBYSxXQUFBO2VBQWI7O01BaEJBLGFBQVcsV0FBQTtlQUFYOzs7OztBQWZULDJCQUFTO0FBQ2QsVUFBTSxPQUFPLFdBQ1AsWUFBVyxJQUFJLE9BQU87QUFFNUIsYUFBTyxPQUFPLFdBQVU7UUFDdEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7QUFHRixhQUFPOztBQUdGLHlCQUFxQixXQUFRO1VBQUUsV0FBQSxVQUFBLFNBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxVQUFBLEtBQVc7QUFDL0MsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBb0IsV0FBVzs7QUFHeEMsVUFBTSxPQUFPO0FBRWIsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVcsV0FBQTtBQUNULGlCQUFPLGlCQUFpQixXQUFXO1dBQ2xDOzs7QUFJQSw2QkFBUztVQUFjLFdBQUEsVUFBQSxTQUFBLEtBQUEsVUFBQSxPQUFBLFNBQUEsVUFBQSxLQUFXO0FBQ3ZDLFVBQU0sWUFBVyxXQUFBO0FBRWpCLGtCQUFZLFdBQVU7QUFFdEIsVUFBTSxPQUFTLFNBQVQ7QUFFTixVQUFNLFFBQVEsS0FBSyxRQUFRLFdBQUE7QUFFM0IsVUFBSSxVQUFVLElBQUk7QUFDaEIsWUFBTSxRQUFRLEdBQ1IsTUFBTTtBQUVaLGVBQU8sS0FBSyxVQUFVLE9BQU87QUFFN0IsZ0JBQVEsYUFBYSxJQUFJLFdBQUEsY0FBYzs7O0FBSXBDLDhCQUEwQix1QkFBcUI7QUFDcEQscUNBQStCOztBQUcxQiwrQkFBMkIsdUJBQXFCO0FBQ3JELHdDQUFrQzs7QUFHcEMsV0FBTyxlQUFlLFlBQVksV0FBQSxVQUFVO01BQzFDLEtBQUssZUFBTDtBQUNFLFlBQU0sWUFBVztBQUVqQixlQUFPOztNQUdULEtBQUssYUFBUyxXQUFRO0FBQ3BCLFlBQU0sV0FBVztBQUVqQixvQkFBWSxXQUFVOzs7QUFJMUIsUUFBTSxZQUFZLFlBQUE7QUFBbEIsUUFDTSx5QkFBeUI7QUFFL0IsV0FBTyxpQkFBaUIsV0FBVztBQUVuQyx1QkFBUztBQUNQLFVBQVEsWUFBYSxPQUFiO0FBRVIsVUFBTSxPQUFTLFVBQVQ7QUFFTixVQUFNLFFBQVE7QUFFZCxhQUFPLEtBQUssVUFBVTtBQUV0QixhQUFPOztBQUdULGdDQUE0QixPQUFLO0FBQy9CLFVBQU0sT0FBTyxXQUNQLFVBQVUsUUFDVixZQUFXO0FBRWpCLGlDQUEyQixPQUFPLFNBQVM7O0FBRzdDLHdDQUFvQyxPQUFPLFNBQVMsV0FBUTtBQUMxRCw2QkFBdUIsUUFBUSxTQUFDLHVCQUFBO0FBQzlCLDhCQUFzQixPQUFPLFNBQVM7OztBQUkxQyw0Q0FBd0MsdUJBQXFCO0FBQzNELDZCQUF1QixLQUFLO0FBRTVCLGFBQU87O0FBR1QsK0NBQTJDLHVCQUFxQjtBQUM5RCxVQUFNLFFBQVEsdUJBQXVCLFFBQVEsd0JBQ3ZDLFFBQVEsT0FDUixjQUFjO0FBRXBCLDZCQUF1QixPQUFPLE9BQU87QUFFckMsYUFBTzs7Ozs7QUN6SFQ7Ozs7Ozs7Ozs7Ozs7TUFJUyxhQUFXLFdBQUE7ZUFBWCxZQUFBOztNQUEyRCxtQkFBaUIsV0FBQTtlQUFqQixZQUFBOztNQUFsQixrQkFBZ0IsV0FBQTtlQUFoQixZQUFBOztNQUFmLGVBQWEsV0FBQTtlQUFiLFlBQUE7O01BQWIsYUFBVyxXQUFBO2VBQVgsWUFBQTs7Ozs7OztBQ0p0Qjs7Ozs7O0FBSUEsUUFBUSxnQkFBb0MsU0FBcEM7QUFBUixRQUF1QixtQkFBcUIsU0FBckI7QUFFdkIscUJBQWlCO0FBRWpCLFlBQVEsSUFBSyxlQUF1QixPQUFULFVBQVM7QUFFcEMsZUFBVztBQUVYLHFDQUFTO0FBQ1AsY0FBUSxJQUFLLGVBQXVCLE9BQVQsVUFBUzs7QUFHdEMsV0FBTyxpQkFBaUIsU0FBUyxXQUFBO0FBQy9CLFVBQU0sV0FBVztBQUVqQixvQkFBYzs7OyIsCiAgIm5hbWVzIjogW10KfQo=
