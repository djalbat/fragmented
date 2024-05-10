(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "FRAGMENT", {
      enumerable: true,
      get: function() {
        return FRAGMENT;
      }
    });
    var FRAGMENT = "fragment";
  });

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
      offFragmentChange: function() {
        return offFragmentChange;
      },
      onFragmentChange: function() {
        return onFragmentChange;
      }
    });
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    Object.defineProperty(window, _constants.FRAGMENT, {
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
    function getFragment() {
      var hash = getHash(), fragment2 = new String(hash);
      Object.assign(fragment2, {
        getFragment,
        setFragment,
        onFragmentChange,
        offFragmentChange
      });
      return fragment2;
    }
    function setFragment(fragment2) {
      var silently = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      var hash = fragment2;
      if (silently) {
        window.removeEventListener(eventType, hashChangeListener);
      }
      window.location.hash = hash;
      if (silently) {
        setTimeout(function() {
          window.addEventListener(eventType, hashChangeListener);
        }, 0);
      }
    }
    function onFragmentChange(fragmentChangeHandler) {
      fragmentChangeHandlers.push(fragmentChangeHandler);
    }
    function offFragmentChange(fragmentChangeHandler) {
      var index = fragmentChangeHandlers.indexOf(fragmentChangeHandler);
      if (index > -1) {
        var start = index, deleteCount = 1;
        fragmentChangeHandlers.splice(start, deleteCount);
      }
    }
    function hashChangeListener(event) {
      var hash = getHash(), fragment2 = hash;
      fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(event, fragment2);
      });
    }
    function getHash() {
      var location = window.location;
      var hash = location.hash;
      var start = 1;
      hash = hash.substring(start);
      return hash;
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
      offFragmentChange: function() {
        return _fragmented.offFragmentChange;
      },
      onFragmentChange: function() {
        return _fragmented.onFragmentChange;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImhhc2hjaGFuZ2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlJBR01FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgRlJBR01FTlQsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxuY29uc3QgZXZlbnRUeXBlID0gSEFTSENIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnB1c2goZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IGhhc2ggPSBnZXRIYXNoKCksXG4gICAgICAgIGZyYWdtZW50ID0gaGFzaDsgIC8vL1xuXG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSA9PiB7XG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmcmFnbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRIYXNoKCkge1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSB3aW5kb3c7XG5cbiAgbGV0IHsgaGFzaCB9ID0gbG9jYXRpb247XG5cbiAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gIGhhc2ggPSBoYXNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgcmV0dXJuIGhhc2g7XG59IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2ZyYWdtZW50ZWRcIjtcblxuZXhwb3J0IHsgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSBmcm9tIFwiLi9mcmFnbWVudGVkXCI7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyBvbkZyYWdtZW50Q2hhbmdlLCBvZmZGcmFnbWVudENoYW5nZSB9ID0gZnJhZ21lbnQ7XG5cbm9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuY29uc29sZS5sb2coZnJhZ21lbnQpXG5cbmZyYWdtZW50ID0gXCJ0ZXN0XCI7XG5cbi8vIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbmZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgY29uc29sZS5sb2coZnJhZ21lbnQpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7O21DQUVhLFlBQUE7OztlQUFBOzs7QUFBTixRQUFNLFdBQVc7Ozs7QUNGeEI7Ozs7O21DQUVhLHlCQUFBOzs7ZUFBQTs7O0FBQU4sUUFBTSx3QkFBd0I7Ozs7QUNGckM7Ozs7Ozs7Ozs7Ozs7TUEwRGdCLG1CQUFpQixXQUFBO2VBQWpCOztNQUpBLGtCQUFnQixXQUFBO2VBQWhCOzs7OztBQWpEaEIsV0FBTyxlQUFlLFFBQVEsV0FBQSxVQUFVO01BQ3RDLEtBQUssZUFBTDtBQUNFLFlBQU0sWUFBVztBQUVqQixlQUFPOztNQUdULEtBQUssYUFBUyxXQUFRO0FBQ3BCLFlBQU0sV0FBVztBQUVqQixvQkFBWSxXQUFVOzs7QUFJMUIsUUFBTSxZQUFZLFlBQUE7QUFBbEIsUUFDTSx5QkFBeUI7QUFFL0IsV0FBTyxpQkFBaUIsV0FBVztBQUVuQywyQkFBUztBQUNQLFVBQU0sT0FBTyxXQUNQLFlBQVcsSUFBSSxPQUFPO0FBRTVCLGFBQU8sT0FBTyxXQUFVO1FBQ3RCO1FBQ0E7UUFDQTtRQUNBOztBQUdGLGFBQU87O0FBR1QseUJBQXFCLFdBQVE7VUFBRSxXQUFBLFVBQUEsU0FBQSxLQUFBLFVBQUEsT0FBQSxTQUFBLFVBQUEsS0FBVztBQUN4QyxVQUFNLE9BQU87QUFFYixVQUFJLFVBQVU7QUFDWixlQUFPLG9CQUFvQixXQUFXOztBQUd4QyxhQUFPLFNBQVMsT0FBTztBQUV2QixVQUFJLFVBQVU7QUFDWixtQkFBVyxXQUFBO0FBQ1QsaUJBQU8saUJBQWlCLFdBQVc7V0FDbEM7OztBQUlBLDhCQUEwQix1QkFBcUI7QUFDcEQsNkJBQXVCLEtBQUs7O0FBR3ZCLCtCQUEyQix1QkFBcUI7QUFDckQsVUFBTSxRQUFRLHVCQUF1QixRQUFRO0FBRTdDLFVBQUksUUFBUSxJQUFJO0FBQ2QsWUFBTSxRQUFRLE9BQ1IsY0FBYztBQUVwQiwrQkFBdUIsT0FBTyxPQUFPOzs7QUFJekMsZ0NBQTRCLE9BQUs7QUFDL0IsVUFBTSxPQUFPLFdBQ1AsWUFBVztBQUVqQiw2QkFBdUIsUUFBUSxTQUFDLHVCQUFBO0FBQzlCLDhCQUFzQixPQUFPOzs7QUFJakMsdUJBQVM7QUFDUCxVQUFRLFdBQWEsT0FBYjtBQUVSLFVBQU0sT0FBUyxTQUFUO0FBRU4sVUFBTSxRQUFRO0FBRWQsYUFBTyxLQUFLLFVBQVU7QUFFdEIsYUFBTzs7Ozs7QUN2RlQ7Ozs7Ozs7Ozs7Ozs7TUFJMkIsbUJBQWlCLFdBQUE7ZUFBakIsWUFBQTs7TUFBbEIsa0JBQWdCLFdBQUE7ZUFBaEIsWUFBQTs7Ozs7OztBQ0pUOzs7Ozs7QUFJQSxRQUFRLG1CQUF3QyxTQUF4QztBQUFSLFFBQTBCLG9CQUFzQixTQUF0QjtBQUUxQixxQkFBaUI7QUFFakIsWUFBUSxJQUFJO0FBRVosZUFBVztBQUlYLHFDQUFTO0FBQ1AsY0FBUSxJQUFJOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
