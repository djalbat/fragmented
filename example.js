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
//# sourceMappingURL=example.js.map
