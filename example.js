(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // lib/fragmented.js
  var require_fragmented = __commonJS(() => {
    "use strict";
    Object.defineProperty(window, "fragment", {
      get: function get() {
        var fragment2 = getFragment();
        return fragment2;
      },
      set: function set(fragment2) {
        var silently = false;
        setFragment(fragment2, silently);
      }
    });
    window.addEventListener("hashchange", hashChangeListener);
    var fragmentChangeHandlers = [];
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
        window.removeEventListener("hashchange", hashChangeListener);
      }
      window.location.hash = hash;
      if (silently) {
        setTimeout(function() {
          window.addEventListener("hashchange", hashChangeListener);
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
    function hashChangeListener() {
      var hash = window.location.hash.substr(1), fragment2 = hash;
      fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(fragment2);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2ZyYWdtZW50ZWQuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgXCJmcmFnbWVudFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBzaWxlbnRseSA9IGZhbHNlO1xuXG4gICAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG5jb25zdCBmcmFnbWVudENoYW5nZUhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIGdldEZyYWdtZW50KCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gbmV3IFN0cmluZyhoYXNoKTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICBnZXRGcmFnbWVudCxcbiAgICBzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5ID0gdHJ1ZSkge1xuICBjb25zdCBoYXNoID0gZnJhZ21lbnQ7ICAvLy9cblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMucHVzaChmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSwgIC8vL1xuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmZvckVhY2goKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikgPT4ge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcihmcmFnbWVudCk7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2ZyYWdtZW50ZWRcIjtcblxuZXhwb3J0IHsgb25GcmFnbWVudENoYW5nZSwgb2ZmRnJhZ21lbnRDaGFuZ2UgfSBmcm9tIFwiLi9mcmFnbWVudGVkXCI7XG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9pbmRleFwiOyAvLy9cblxuY29uc3QgeyBvbkZyYWdtZW50Q2hhbmdlLCBvZmZGcmFnbWVudENoYW5nZSB9ID0gZnJhZ21lbnQ7XG5cbm9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuY29uc29sZS5sb2coZnJhZ21lbnQpXG5cbmZyYWdtZW50ID0gXCJ0ZXN0XCI7XG5cbi8vIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbmZ1bmN0aW9uIGZyYWdtZW50Q2hhbmdlSGFuZGxlcigpIHtcbiAgY29uc29sZS5sb2coZnJhZ21lbnQpXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsV0FBTyxlQUFlLFFBQVEsWUFBWTtNQUN4QyxLQUFLLGVBQUw7QUFDRSxZQUFNLFlBQVc7QUFFakIsZUFBTzs7TUFHVCxLQUFLLGFBQVMsV0FBUTtBQUNwQixZQUFNLFdBQVc7QUFFakIsb0JBQVksV0FBVTs7O0FBSTFCLFdBQU8saUJBQWlCLGNBQWM7QUFFdEMsUUFBTSx5QkFBeUI7QUFFL0IsMkJBQVM7QUFDUCxVQUFNLE9BQU8sT0FBTyxTQUFTLEtBQUssT0FBTyxJQUNuQyxZQUFXLElBQUksT0FBTztBQUU1QixhQUFPLE9BQU8sV0FBVTtRQUN0QjtRQUNBO1FBQ0E7UUFDQTs7QUFHRixhQUFPOztBQUdULHlCQUFxQixXQUFRO1VBQUUsV0FBQSxVQUFBLFNBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxVQUFBLEtBQVc7QUFDeEMsVUFBTSxPQUFPO0FBRWIsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBb0IsY0FBYzs7QUFHM0MsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVcsV0FBQTtBQUNULGlCQUFPLGlCQUFpQixjQUFjO1dBQ3JDOzs7QUFJUCw4QkFBMEIsdUJBQXFCO0FBQzdDLDZCQUF1QixLQUFLOztBQUc5QiwrQkFBMkIsdUJBQXFCO0FBQzlDLFVBQU0sUUFBUSx1QkFBdUIsUUFBUTtBQUU3QyxVQUFJLFFBQVEsSUFBSTtBQUNkLFlBQU0sUUFBUSxPQUNSLGNBQWM7QUFFcEIsK0JBQXVCLE9BQU8sT0FBTzs7O0FBSXpDLGtDQUFTO0FBQ1AsVUFBTSxPQUFPLE9BQU8sU0FBUyxLQUFLLE9BQU8sSUFDbkMsWUFBVztBQUVqQiw2QkFBdUIsUUFBUSxTQUFDLHVCQUFBO0FBQzlCLDhCQUFzQjs7Ozs7O0FDdEUxQjs7Ozs7Ozs7Ozs7OztNQUkyQixtQkFBaUIsV0FBQTtlQUFqQixZQUFBOztNQUFsQixrQkFBZ0IsV0FBQTtlQUFoQixZQUFBOzs7Ozs7O0FDSlQ7Ozs7OztBQUlBLFFBQVEsbUJBQXdDLFNBQXhDO0FBQVIsUUFBMEIsb0JBQXNCLFNBQXRCO0FBRTFCLHFCQUFpQjtBQUVqQixZQUFRLElBQUk7QUFFWixlQUFXO0FBSVgscUNBQVM7QUFDUCxjQUFRLElBQUk7OzsiLAogICJuYW1lcyI6IFtdCn0K
