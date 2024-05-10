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
      var hash = window.location.hash.substr(1), fragment2 = new String(hash);
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
      var hash = window.location.hash.substr(1), fragment2 = hash;
      fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(event, fragment2);
      });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImhhc2hjaGFuZ2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlJBR01FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgRlJBR01FTlQsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxuY29uc3QgZXZlbnRUeXBlID0gSEFTSENIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gbmV3IFN0cmluZyhoYXNoKTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICBnZXRGcmFnbWVudCxcbiAgICBzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5ID0gdHJ1ZSkge1xuICBjb25zdCBoYXNoID0gZnJhZ21lbnQ7ICAvLy9cblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMucHVzaChmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGNvbnN0IGluZGV4ID0gZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5pbmRleE9mKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSwgIC8vL1xuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmZvckVhY2goKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikgPT4ge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZnJhZ21lbnQpO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9mcmFnbWVudGVkXCI7XG5cbmV4cG9ydCB7IG9uRnJhZ21lbnRDaGFuZ2UsIG9mZkZyYWdtZW50Q2hhbmdlIH0gZnJvbSBcIi4vZnJhZ21lbnRlZFwiO1xuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSA9IGZyYWdtZW50O1xuXG5vbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbmNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG5mcmFnbWVudCA9IFwidGVzdFwiO1xuXG4vLyBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5mdW5jdGlvbiBmcmFnbWVudENoYW5nZUhhbmRsZXIoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7OzttQ0FFYSxZQUFBOzs7ZUFBQTs7O0FBQU4sUUFBTSxXQUFXOzs7O0FDRnhCOzs7OzttQ0FFYSx5QkFBQTs7O2VBQUE7OztBQUFOLFFBQU0sd0JBQXdCOzs7O0FDRnJDOzs7Ozs7Ozs7Ozs7O01BMERnQixtQkFBaUIsV0FBQTtlQUFqQjs7TUFKQSxrQkFBZ0IsV0FBQTtlQUFoQjs7Ozs7QUFqRGhCLFdBQU8sZUFBZSxRQUFRLFdBQUEsVUFBVTtNQUN0QyxLQUFLLGVBQUw7QUFDRSxZQUFNLFlBQVc7QUFFakIsZUFBTzs7TUFHVCxLQUFLLGFBQVMsV0FBUTtBQUNwQixZQUFNLFdBQVc7QUFFakIsb0JBQVksV0FBVTs7O0FBSTFCLFFBQU0sWUFBWSxZQUFBO0FBQWxCLFFBQ00seUJBQXlCO0FBRS9CLFdBQU8saUJBQWlCLFdBQVc7QUFFbkMsMkJBQVM7QUFDUCxVQUFNLE9BQU8sT0FBTyxTQUFTLEtBQUssT0FBTyxJQUNuQyxZQUFXLElBQUksT0FBTztBQUU1QixhQUFPLE9BQU8sV0FBVTtRQUN0QjtRQUNBO1FBQ0E7UUFDQTs7QUFHRixhQUFPOztBQUdULHlCQUFxQixXQUFRO1VBQUUsV0FBQSxVQUFBLFNBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxVQUFBLEtBQVc7QUFDeEMsVUFBTSxPQUFPO0FBRWIsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBb0IsV0FBVzs7QUFHeEMsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVcsV0FBQTtBQUNULGlCQUFPLGlCQUFpQixXQUFXO1dBQ2xDOzs7QUFJQSw4QkFBMEIsdUJBQXFCO0FBQ3BELDZCQUF1QixLQUFLOztBQUd2QiwrQkFBMkIsdUJBQXFCO0FBQ3JELFVBQU0sUUFBUSx1QkFBdUIsUUFBUTtBQUU3QyxVQUFJLFFBQVEsSUFBSTtBQUNkLFlBQU0sUUFBUSxPQUNSLGNBQWM7QUFFcEIsK0JBQXVCLE9BQU8sT0FBTzs7O0FBSXpDLGdDQUE0QixPQUFLO0FBQy9CLFVBQU0sT0FBTyxPQUFPLFNBQVMsS0FBSyxPQUFPLElBQ25DLFlBQVc7QUFFakIsNkJBQXVCLFFBQVEsU0FBQyx1QkFBQTtBQUM5Qiw4QkFBc0IsT0FBTzs7Ozs7O0FDMUVqQzs7Ozs7Ozs7Ozs7OztNQUkyQixtQkFBaUIsV0FBQTtlQUFqQixZQUFBOztNQUFsQixrQkFBZ0IsV0FBQTtlQUFoQixZQUFBOzs7Ozs7O0FDSlQ7Ozs7OztBQUlBLFFBQVEsbUJBQXdDLFNBQXhDO0FBQVIsUUFBMEIsb0JBQXNCLFNBQXRCO0FBRTFCLHFCQUFpQjtBQUVqQixZQUFRLElBQUk7QUFFWixlQUFXO0FBSVgscUNBQVM7QUFDUCxjQUFRLElBQUk7OzsiLAogICJuYW1lcyI6IFtdCn0K
