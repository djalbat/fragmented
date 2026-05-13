(() => {
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);

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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get FRAGMENT() {
        return FRAGMENT;
      },
      get HASH() {
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get getFragment() {
        return getFragment;
      },
      get offFragmentChange() {
        return offFragmentChange;
      },
      get onFragmentChange() {
        return onFragmentChange;
      },
      get resetFragment() {
        return resetFragment;
      },
      get setFragment() {
        return setFragment;
      }
    });
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    function getFragment() {
      const hash = getHash(), fragment2 = new String(hash);
      Object.assign(fragment2, {
        getFragment,
        setFragment,
        resetFragment,
        onFragmentChange,
        offFragmentChange
      });
      return fragment2;
    }
    function setFragment(fragment2, silently = true) {
      if (silently) {
        window.removeEventListener(eventType, hashChangeListener);
      }
      const hash = fragment2;
      window.location.hash = hash;
      if (silently) {
        defer(() => {
          window.addEventListener(eventType, hashChangeListener);
        });
      }
    }
    function resetFragment(silently = true) {
      const fragment2 = _constants.EMPTY_STRING;
      setFragment(fragment2, silently);
      let {href} = location;
      const index = href.indexOf(_constants.HASH);
      if (index !== -1) {
        const start = 0, end = index;
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
      get: function() {
        const fragment2 = getFragment();
        return fragment2;
      },
      set: function(fragment2) {
        const silently = false;
        setFragment(fragment2, silently);
      }
    });
    var eventType = _eventTypes.HASHCHANGE_EVENT_TYPE;
    var fragmentChangeHandlers = [];
    window.addEventListener(eventType, hashChangeListener);
    function getHash() {
      const {location: location1} = window;
      let {hash} = location1;
      const start = 1;
      hash = hash.substring(start);
      return hash;
    }
    function hashChangeListener(event) {
      const hash = getHash(), element = window, fragment2 = hash;
      callFragmentChangeHandlers(event, element, fragment2);
    }
    function callFragmentChangeHandlers(event, element, fragment2) {
      fragmentChangeHandlers.forEach((fragmentChangeHandler) => {
        fragmentChangeHandler(event, element, fragment2);
      });
    }
    function addFragmentChangeEventListener(fragmentChangeHandler) {
      fragmentChangeHandlers.push(fragmentChangeHandler);
      return fragmentChangeHandler;
    }
    function removeFragmentChangeEventListener(fragmentChangeHandler) {
      const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler), start = index, deleteCount = 1;
      fragmentChangeHandlers.splice(start, deleteCount);
      return fragmentChangeHandler;
    }
    function defer(func) {
      setTimeout(func, 0);
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
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get getFragment() {
        return _fragmented.getFragment;
      },
      get offFragmentChange() {
        return _fragmented.offFragmentChange;
      },
      get onFragmentChange() {
        return _fragmented.onFragmentChange;
      },
      get resetFragment() {
        return _fragmented.resetFragment;
      },
      get setFragment() {
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
    var {resetFragment, onFragmentChange} = fragment;
    onFragmentChange(fragmentChangeHandler);
    console.log(`Initially: '${fragment}'.`);
    fragment = "test";
    function fragmentChangeHandler() {
      console.log(`Changed to '${fragment}'.`);
    }
    window.addEventListener("click", () => {
      const silently = false;
      resetFragment(silently);
    });
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2V2ZW50VHlwZXMuanMiLCAic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgSEFTSENIQU5HRV9FVkVOVF9UWVBFID0gXCJoYXNoY2hhbmdlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIID0gXCIjXCI7XG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjsiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEhBU0gsIEZSQUdNRU5ULCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgcmVzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIGRlZmVyKCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGcmFnbWVudChzaWxlbnRseSA9IHRydWUpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcblxuICBsZXQgeyBocmVmIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBpbmRleCA9IGhyZWYuaW5kZXhPZihIQVNIKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IC8vL1xuXG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIEVNUFRZX1NUUklORywgaHJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIHJlbW92ZUZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgRlJBR01FTlQsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxuY29uc3QgZXZlbnRUeXBlID0gSEFTSENIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGdldEhhc2goKSB7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdpbmRvdztcblxuICBsZXQgeyBoYXNoIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBzdGFydCA9IDE7XG5cbiAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IGhhc2ggPSBnZXRIYXNoKCksXG4gICAgICAgIGVsZW1lbnQgPSB3aW5kb3csIC8vL1xuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBjYWxsRnJhZ21lbnRDaGFuZ2VIYW5kbGVycyhldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBjYWxsRnJhZ21lbnRDaGFuZ2VIYW5kbGVycyhldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKChmcmFnbWVudENoYW5nZUhhbmRsZXIpID0+IHtcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgcmV0dXJuIGZyYWdtZW50Q2hhbmdlSGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIHJldHVybiBmcmFnbWVudENoYW5nZUhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9mcmFnbWVudGVkXCI7XG5cbmV4cG9ydCB7IGdldEZyYWdtZW50LCBzZXRGcmFnbWVudCwgcmVzZXRGcmFnbWVudCwgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSBmcm9tIFwiLi9mcmFnbWVudGVkXCI7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyByZXNldEZyYWdtZW50LCBvbkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxub25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5jb25zb2xlLmxvZyhgSW5pdGlhbGx5OiAnJHtmcmFnbWVudH0nLmApXG5cbmZyYWdtZW50ID0gXCJ0ZXN0XCI7XG5cbmZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgY29uc29sZS5sb2coYENoYW5nZWQgdG8gJyR7ZnJhZ21lbnR9Jy5gKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICByZXNldEZyYWdtZW50KHNpbGVudGx5KTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQTs7Ozs7bUNBRWEseUJBQUE7OztlQUFBOzs7QUFBTixRQUFNLHdCQUF3Qjs7OztBQ0ZyQzs7Ozs7Ozs7Ozs7OztVQUlhLGVBQUE7ZUFBQTs7VUFEQSxXQUFBO2VBQUE7O1VBREEsT0FBQTtlQUFBOzs7QUFBTixRQUFNLE9BQU87QUFDYixRQUFNLFdBQVc7QUFDakIsUUFBTSxlQUFlOzs7O0FDSjVCOzs7Ozs7Ozs7Ozs7O1VBS2dCLGNBQUE7ZUFBQTs7VUFzREEsb0JBQUE7ZUFBQTs7VUFKQSxtQkFBQTtlQUFBOztVQW5CQSxnQkFBQTtlQUFBOztVQWhCQSxjQUFBO2VBQUE7Ozs7O0FBZlQsMkJBQVM7QUFDZCxZQUFNLE9BQU8sV0FDUCxZQUFXLElBQUksT0FBTztBQUU1QixhQUFPLE9BQU8sV0FBVTtRQUN0QjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztBQUdGLGFBQU87O0FBR0YseUJBQXFCLFdBQVUsV0FBVyxNQUFJO0FBQ25ELFVBQUksVUFBVTtBQUNaLGVBQU8sb0JBQW9CLFdBQVc7O0FBR3hDLFlBQU0sT0FBTztBQUViLGFBQU8sU0FBUyxPQUFPO0FBRXZCLFVBQUksVUFBVTtBQUNaLGNBQU0sTUFBQTtBQUNKLGlCQUFPLGlCQUFpQixXQUFXOzs7O0FBS2xDLDJCQUF1QixXQUFXLE1BQUk7QUFDM0MsWUFBTSxZQUFXLFdBQUE7QUFFakIsa0JBQVksV0FBVTtBQUV0QixVQUFJLENBQUUsUUFBUztBQUVmLFlBQU0sUUFBUSxLQUFLLFFBQVEsV0FBQTtBQUUzQixVQUFJLFVBQVUsSUFBSTtBQUNoQixjQUFNLFFBQVEsR0FDUixNQUFNO0FBRVosZUFBTyxLQUFLLFVBQVUsT0FBTztBQUU3QixnQkFBUSxhQUFhLElBQUksV0FBQSxjQUFjOzs7QUFJcEMsOEJBQTBCLHVCQUFxQjtBQUNwRCxxQ0FBK0I7O0FBRzFCLCtCQUEyQix1QkFBcUI7QUFDckQsd0NBQWtDOztBQUdwQyxXQUFPLGVBQWUsWUFBWSxXQUFBLFVBQVU7TUFDMUMsS0FBSyxXQUFBO0FBQ0gsY0FBTSxZQUFXO0FBRWpCLGVBQU87O01BR1QsS0FBSyxTQUFTLFdBQVE7QUFDcEIsY0FBTSxXQUFXO0FBRWpCLG9CQUFZLFdBQVU7OztBQUkxQixRQUFNLFlBQVksWUFBQTtBQUFsQixRQUNNLHlCQUF5QjtBQUUvQixXQUFPLGlCQUFpQixXQUFXO0FBRW5DLHVCQUFTO0FBQ1AsWUFBTSxDQUFFLFVBQUEsYUFBYTtBQUVyQixVQUFJLENBQUUsUUFBUztBQUVmLFlBQU0sUUFBUTtBQUVkLGFBQU8sS0FBSyxVQUFVO0FBRXRCLGFBQU87O0FBR1QsZ0NBQTRCLE9BQUs7QUFDL0IsWUFBTSxPQUFPLFdBQ1AsVUFBVSxRQUNWLFlBQVc7QUFFakIsaUNBQTJCLE9BQU8sU0FBUzs7QUFHN0Msd0NBQW9DLE9BQU8sU0FBUyxXQUFRO0FBQzFELDZCQUF1QixRQUFRLENBQUMsMEJBQUE7QUFDOUIsOEJBQXNCLE9BQU8sU0FBUzs7O0FBSTFDLDRDQUF3Qyx1QkFBcUI7QUFDM0QsNkJBQXVCLEtBQUs7QUFFNUIsYUFBTzs7QUFHVCwrQ0FBMkMsdUJBQXFCO0FBQzlELFlBQU0sUUFBUSx1QkFBdUIsUUFBUSx3QkFDdkMsUUFBUSxPQUNSLGNBQWM7QUFFcEIsNkJBQXVCLE9BQU8sT0FBTztBQUVyQyxhQUFPOztBQUdULG1CQUFlLE1BQUk7QUFDakIsaUJBQVcsTUFBTTs7Ozs7QUM3SG5COzs7Ozs7Ozs7Ozs7O1VBSVMsY0FBQTtlQUFBLFlBQUE7O1VBQTJELG9CQUFBO2VBQUEsWUFBQTs7VUFBbEIsbUJBQUE7ZUFBQSxZQUFBOztVQUFmLGdCQUFBO2VBQUEsWUFBQTs7VUFBYixjQUFBO2VBQUEsWUFBQTs7Ozs7OztBQ0p0Qjs7Ozs7O0FBSUEsUUFBTSxDQUFFLGVBQWUsb0JBQXFCO0FBRTVDLHFCQUFpQjtBQUVqQixZQUFRLElBQUksZUFBZTtBQUUzQixlQUFXO0FBRVgscUNBQVM7QUFDUCxjQUFRLElBQUksZUFBZTs7QUFHN0IsV0FBTyxpQkFBaUIsU0FBUyxNQUFBO0FBQy9CLFlBQU0sV0FBVztBQUVqQixvQkFBYzs7OyIsCiAgIm5hbWVzIjogW10KfQo=
