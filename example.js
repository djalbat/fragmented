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
      getFragment: function() {
        return getFragment;
      },
      offFragmentChange: function() {
        return offFragmentChange;
      },
      onFragmentChange: function() {
        return onFragmentChange;
      },
      setFragment: function() {
        return setFragment;
      }
    });
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
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
      getFragment: function() {
        return _fragmented.getFragment;
      },
      offFragmentChange: function() {
        return _fragmented.offFragmentChange;
      },
      onFragmentChange: function() {
        return _fragmented.onFragmentChange;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvZnJhZ21lbnRlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRlJBR01FTlQgPSBcImZyYWdtZW50XCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImhhc2hjaGFuZ2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlJBR01FTlQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIEZSQUdNRU5ULCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBzaWxlbnRseSA9IGZhbHNlO1xuXG4gICAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcbiAgfVxufSk7XG5cbmNvbnN0IGV2ZW50VHlwZSA9IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSxcbiAgICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMgPSBbXTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgaGFzaCA9IGdldEhhc2goKSxcbiAgICAgICAgZnJhZ21lbnQgPSBoYXNoOyAgLy8vXG5cbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKChmcmFnbWVudENoYW5nZUhhbmRsZXIpID0+IHtcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGZyYWdtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2goKSB7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdpbmRvdztcblxuICBsZXQgeyBoYXNoIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBzdGFydCA9IDE7XG5cbiAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICByZXR1cm4gaGFzaDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vZnJhZ21lbnRlZFwiO1xuXG5leHBvcnQgeyBzZXRGcmFnbWVudCwgZ2V0RnJhZ21lbnQsIG9uRnJhZ21lbnRDaGFuZ2UsIG9mZkZyYWdtZW50Q2hhbmdlIH0gZnJvbSBcIi4vZnJhZ21lbnRlZFwiO1xuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSA9IGZyYWdtZW50O1xuXG5vbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbmNvbnNvbGUubG9nKGZyYWdtZW50KVxuXG5mcmFnbWVudCA9IFwidGVzdFwiO1xuXG4vLyBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5mdW5jdGlvbiBmcmFnbWVudENoYW5nZUhhbmRsZXIoKSB7XG4gIGNvbnNvbGUubG9nKGZyYWdtZW50KVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7OzttQ0FFYSxZQUFBOzs7ZUFBQTs7O0FBQU4sUUFBTSxXQUFXOzs7O0FDRnhCOzs7OzttQ0FFYSx5QkFBQTs7O2VBQUE7OztBQUFOLFFBQU0sd0JBQXdCOzs7O0FDRnJDOzs7Ozs7Ozs7Ozs7O01BS2dCLGFBQVcsV0FBQTtlQUFYOztNQWtDQSxtQkFBaUIsV0FBQTtlQUFqQjs7TUFKQSxrQkFBZ0IsV0FBQTtlQUFoQjs7TUFoQkEsYUFBVyxXQUFBO2VBQVg7Ozs7O0FBZFQsMkJBQVM7QUFDZCxVQUFNLE9BQU8sV0FDUCxZQUFXLElBQUksT0FBTztBQUU1QixhQUFPLE9BQU8sV0FBVTtRQUN0QjtRQUNBO1FBQ0E7UUFDQTs7QUFHRixhQUFPOztBQUdGLHlCQUFxQixXQUFRO1VBQUUsV0FBQSxVQUFBLFNBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxVQUFBLEtBQVc7QUFDL0MsVUFBTSxPQUFPO0FBRWIsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBb0IsV0FBVzs7QUFHeEMsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVcsV0FBQTtBQUNULGlCQUFPLGlCQUFpQixXQUFXO1dBQ2xDOzs7QUFJQSw4QkFBMEIsdUJBQXFCO0FBQ3BELDZCQUF1QixLQUFLOztBQUd2QiwrQkFBMkIsdUJBQXFCO0FBQ3JELFVBQU0sUUFBUSx1QkFBdUIsUUFBUTtBQUU3QyxVQUFJLFFBQVEsSUFBSTtBQUNkLFlBQU0sUUFBUSxPQUNSLGNBQWM7QUFFcEIsK0JBQXVCLE9BQU8sT0FBTzs7O0FBSXpDLFdBQU8sZUFBZSxRQUFRLFdBQUEsVUFBVTtNQUN0QyxLQUFLLGVBQUw7QUFDRSxZQUFNLFlBQVc7QUFFakIsZUFBTzs7TUFHVCxLQUFLLGFBQVMsV0FBUTtBQUNwQixZQUFNLFdBQVc7QUFFakIsb0JBQVksV0FBVTs7O0FBSTFCLFFBQU0sWUFBWSxZQUFBO0FBQWxCLFFBQ00seUJBQXlCO0FBRS9CLFdBQU8saUJBQWlCLFdBQVc7QUFFbkMsZ0NBQTRCLE9BQUs7QUFDL0IsVUFBTSxPQUFPLFdBQ1AsWUFBVztBQUVqQiw2QkFBdUIsUUFBUSxTQUFDLHVCQUFBO0FBQzlCLDhCQUFzQixPQUFPOzs7QUFJakMsdUJBQVM7QUFDUCxVQUFRLFdBQWEsT0FBYjtBQUVSLFVBQU0sT0FBUyxTQUFUO0FBRU4sVUFBTSxRQUFRO0FBRWQsYUFBTyxLQUFLLFVBQVU7QUFFdEIsYUFBTzs7Ozs7QUN2RlQ7Ozs7Ozs7Ozs7Ozs7TUFJc0IsYUFBVyxXQUFBO2VBQVgsWUFBQTs7TUFBK0IsbUJBQWlCLFdBQUE7ZUFBakIsWUFBQTs7TUFBbEIsa0JBQWdCLFdBQUE7ZUFBaEIsWUFBQTs7TUFBMUIsYUFBVyxXQUFBO2VBQVgsWUFBQTs7Ozs7OztBQ0pUOzs7Ozs7QUFJQSxRQUFRLG1CQUF3QyxTQUF4QztBQUFSLFFBQTBCLG9CQUFzQixTQUF0QjtBQUUxQixxQkFBaUI7QUFFakIsWUFBUSxJQUFJO0FBRVosZUFBVztBQUlYLHFDQUFTO0FBQ1AsY0FBUSxJQUFJOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
