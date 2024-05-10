"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
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
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
Object.defineProperty(window, _constants.FRAGMENT, {
    get: function get() {
        var fragment = getFragment();
        return fragment;
    },
    set: function set(fragment) {
        var silently = false;
        setFragment(fragment, silently);
    }
});
var eventType = _eventTypes.HASHCHANGE_EVENT_TYPE, fragmentChangeHandlers = [];
window.addEventListener(eventType, hashChangeListener);
function getFragment() {
    var hash = window.location.hash.substr(1), fragment = new String(hash); ///
    Object.assign(fragment, {
        getFragment: getFragment,
        setFragment: setFragment,
        onFragmentChange: onFragmentChange,
        offFragmentChange: offFragmentChange
    });
    return fragment;
}
function setFragment(fragment) {
    var silently = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var hash = fragment; ///
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
function hashChangeListener() {
    var hash = window.location.hash.substr(1), fragment = hash; ///
    fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(fragment);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGUkFHTUVOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSEFTSENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBGUkFHTUVOVCwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG5jb25zdCBldmVudFR5cGUgPSBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIG9uRnJhZ21lbnRDaGFuZ2UsXG4gICAgb2ZmRnJhZ21lbnRDaGFuZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSwgIC8vL1xuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmZvckVhY2goKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikgPT4ge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcihmcmFnbWVudCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm9mZkZyYWdtZW50Q2hhbmdlIiwib25GcmFnbWVudENoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiRlJBR01FTlQiLCJnZXQiLCJmcmFnbWVudCIsImdldEZyYWdtZW50Iiwic2V0Iiwic2lsZW50bHkiLCJzZXRGcmFnbWVudCIsImV2ZW50VHlwZSIsIkhBU0hDSEFOR0VfRVZFTlRfVFlQRSIsImZyYWdtZW50Q2hhbmdlSGFuZGxlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzaENoYW5nZUxpc3RlbmVyIiwiaGFzaCIsImxvY2F0aW9uIiwic3Vic3RyIiwiU3RyaW5nIiwiYXNzaWduIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJmcmFnbWVudENoYW5nZUhhbmRsZXIiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZvckVhY2giXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMERnQkEsaUJBQWlCO2VBQWpCQTs7SUFKQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXBEUzswQkFDYTtBQUV0Q0MsT0FBT0MsY0FBYyxDQUFDQyxRQUFRQyxtQkFBUSxFQUFFO0lBQ3RDQyxLQUFLLFNBQUxBO1FBQ0UsSUFBTUMsV0FBV0M7UUFFakIsT0FBT0Q7SUFDVDtJQUVBRSxLQUFLLFNBQUxBLElBQWNGLFFBQVE7UUFDcEIsSUFBTUcsV0FBVztRQUVqQkMsWUFBWUosVUFBVUc7SUFDeEI7QUFDRjtBQUVBLElBQU1FLFlBQVlDLGlDQUFxQixFQUNqQ0MseUJBQXlCLEVBQUU7QUFFakNWLE9BQU9XLGdCQUFnQixDQUFDSCxXQUFXSTtBQUVuQyxTQUFTUjtJQUNQLElBQU1TLE9BQU9iLE9BQU9jLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsSUFDbkNaLFdBQVcsSUFBSWEsT0FBT0gsT0FBUSxHQUFHO0lBRXZDZixPQUFPbUIsTUFBTSxDQUFDZCxVQUFVO1FBQ3RCQyxhQUFBQTtRQUNBRyxhQUFBQTtRQUNBVixrQkFBQUE7UUFDQUQsbUJBQUFBO0lBQ0Y7SUFFQSxPQUFPTztBQUNUO0FBRUEsU0FBU0ksWUFBWUosUUFBUTtRQUFFRyxXQUFBQSxpRUFBVztJQUN4QyxJQUFNTyxPQUFPVixVQUFXLEdBQUc7SUFFM0IsSUFBSUcsVUFBVTtRQUNaTixPQUFPa0IsbUJBQW1CLENBQUNWLFdBQVdJO0lBQ3hDO0lBRUFaLE9BQU9jLFFBQVEsQ0FBQ0QsSUFBSSxHQUFHQTtJQUV2QixJQUFJUCxVQUFVO1FBQ1phLFdBQVc7WUFDVG5CLE9BQU9XLGdCQUFnQixDQUFDSCxXQUFXSTtRQUNyQyxHQUFHO0lBQ0w7QUFDRjtBQUVPLFNBQVNmLGlCQUFpQnVCLHFCQUFxQjtJQUNwRFYsdUJBQXVCVyxJQUFJLENBQUNEO0FBQzlCO0FBRU8sU0FBU3hCLGtCQUFrQndCLHFCQUFxQjtJQUNyRCxJQUFNRSxRQUFRWix1QkFBdUJhLE9BQU8sQ0FBQ0g7SUFFN0MsSUFBSUUsUUFBUSxDQUFDLEdBQUc7UUFDZCxJQUFNRSxRQUFRRixPQUNSRyxjQUFjO1FBRXBCZix1QkFBdUJnQixNQUFNLENBQUNGLE9BQU9DO0lBQ3ZDO0FBQ0Y7QUFFQSxTQUFTYjtJQUNQLElBQU1DLE9BQU9iLE9BQU9jLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsSUFDbkNaLFdBQVdVLE1BQU8sR0FBRztJQUUzQkgsdUJBQXVCaUIsT0FBTyxDQUFDLFNBQUNQO1FBQzlCQSxzQkFBc0JqQjtJQUN4QjtBQUNGIn0=