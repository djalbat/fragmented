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
        onFragmentChange: onFragmentChange2,
        offFragmentChange: offFragmentChange2
      });
      return fragment2;
    }
    function setFragment(fragment2, param) {
      var silently = param === void 0 ? true : param;
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
    function onFragmentChange2(fragmentChangeHandler2) {
      fragmentChangeHandlers.push(fragmentChangeHandler2);
    }
    function offFragmentChange2(fragmentChangeHandler2) {
      var index = fragmentChangeHandlers.indexOf(fragmentChangeHandler2);
      if (index > -1) {
        var start = index, deleteCount = 1;
        fragmentChangeHandlers.splice(start, deleteCount);
      }
    }
    function hashChangeListener() {
      var hash = window.location.hash.substr(1), fragment2 = hash;
      fragmentChangeHandlers.forEach(function(fragmentChangeHandler2) {
        fragmentChangeHandler2(fragment2);
      });
    }
  });

  // lib/example.js
  "use strict";
  require_fragmented();
  var onFragmentChange = fragment.onFragmentChange;
  var offFragmentChange = fragment.offFragmentChange;
  onFragmentChange(fragmentChangeHandler);
  console.log(fragment);
  fragment = "test";
  function fragmentChangeHandler() {
    console.log(fragment);
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2ZyYWdtZW50ZWQuanMiLCAic3JjL2V4YW1wbGUuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBcImZyYWdtZW50XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmNvbnN0IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIG9uRnJhZ21lbnRDaGFuZ2UsXG4gICAgb2ZmRnJhZ21lbnRDaGFuZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gaGFzaDsgIC8vL1xuXG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSA9PiB7XG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKGZyYWdtZW50KTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vZnJhZ21lbnRlZFwiO1xuXG5jb25zdCB7IG9uRnJhZ21lbnRDaGFuZ2UsIG9mZkZyYWdtZW50Q2hhbmdlIH0gPSBmcmFnbWVudDtcblxub25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG5jb25zb2xlLmxvZyhmcmFnbWVudClcblxuZnJhZ21lbnQgPSBcInRlc3RcIjtcblxuLy8gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuZnVuY3Rpb24gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKCkge1xuICBjb25zb2xlLmxvZyhmcmFnbWVudClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7OztBQUVBLFdBQU8sZUFBZSxRQUFNLFlBQVk7TUFDdEMsS0FBRyxlQUFhO0FBQ2QsWUFBTSxZQUFXO2VBRVY7O01BR1QsS0FBRyxhQUFXLFdBQVU7QUFDdEIsWUFBTSxXQUFXO0FBRWpCLG9CQUFZLFdBQVU7OztBQUkxQixXQUFPLGlCQUFnQixjQUFlO0FBRXRDLFFBQU0seUJBQXNCOzJCQUVMO0FBQ3JCLFVBQU0sT0FBTyxPQUFPLFNBQVMsS0FBSyxPQUFPLElBQ25DLFlBQVcsSUFBSSxPQUFPO0FBRTVCLGFBQU8sT0FBTyxXQUFRO1FBQ3BCO1FBQ0E7UUFDQSxrQkFBQTtRQUNBLG1CQUFBOzthQUdLOzt5QkFHWSxXQUFVLE9BQWlCO1VBQWpCLFdBQUEsVUFBZSxTQUFKLE9BQVg7QUFDN0IsVUFBTSxPQUFPO0FBRWIsVUFBSSxVQUFVO0FBQ1osZUFBTyxvQkFBbUIsY0FBZTs7QUFHM0MsYUFBTyxTQUFTLE9BQU87QUFFdkIsVUFBSSxVQUFVO0FBQ1osbUJBQVUsV0FBTztBQUNmLGlCQUFPLGlCQUFnQixjQUFlO1dBQ3JDOzs7K0JBSW1CLHdCQUF1QjtBQUMvQyw2QkFBdUIsS0FBSzs7Z0NBR0gsd0JBQXVCO0FBQ2hELFVBQU0sUUFBUSx1QkFBdUIsUUFBUTtBQUU3QyxVQUFJLFFBQUssSUFBTztBQUNkLFlBQU0sUUFBUSxPQUNSLGNBQWM7QUFFcEIsK0JBQXVCLE9BQU8sT0FBTzs7O2tDQUlYO0FBQzVCLFVBQU0sT0FBTyxPQUFPLFNBQVMsS0FBSyxPQUFPLElBQ25DLFlBQVc7QUFFakIsNkJBQXVCLFFBQU8sU0FBRSx3QkFBMEI7QUFDeEQsK0JBQXNCOzs7Ozs7OztBQ2xFMUIsTUFBUSxtQkFBd0MsU0FBeEM7QUFBUixNQUEwQixvQkFBc0IsU0FBdEI7QUFFMUIsbUJBQWlCO0FBRWpCLFVBQVEsSUFBSTtBQUVaLGFBQVE7bUNBSXlCO0FBQy9CLFlBQVEsSUFBSTs7IiwKICAibmFtZXMiOiBbXQp9Cg==
