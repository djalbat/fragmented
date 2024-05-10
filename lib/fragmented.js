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
    var hash = getHash(), fragment = new String(hash); ///
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
function hashChangeListener(event) {
    var hash = getHash(), fragment = hash; ///
    fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(event, fragment);
    });
}
function getHash() {
    var location = window.location;
    var hash = location.hash;
    var start = 1;
    hash = hash.substring(start);
    return hash;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGUkFHTUVOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSEFTSENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBGUkFHTUVOVCwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG5jb25zdCBldmVudFR5cGUgPSBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSBnZXRIYXNoKCksXG4gICAgICAgIGZyYWdtZW50ID0gbmV3IFN0cmluZyhoYXNoKTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICBnZXRGcmFnbWVudCxcbiAgICBzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5ID0gdHJ1ZSkge1xuICBjb25zdCBoYXNoID0gZnJhZ21lbnQ7ICAvLy9cblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMucHVzaChmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGNvbnN0IGluZGV4ID0gZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5pbmRleE9mKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgaGFzaCA9IGdldEhhc2goKSxcbiAgICAgICAgZnJhZ21lbnQgPSBoYXNoOyAgLy8vXG5cbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKChmcmFnbWVudENoYW5nZUhhbmRsZXIpID0+IHtcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGZyYWdtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEhhc2goKSB7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdpbmRvdztcblxuICBsZXQgeyBoYXNoIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBzdGFydCA9IDE7XG5cbiAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICByZXR1cm4gaGFzaDtcbn0iXSwibmFtZXMiOlsib2ZmRnJhZ21lbnRDaGFuZ2UiLCJvbkZyYWdtZW50Q2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ3aW5kb3ciLCJGUkFHTUVOVCIsImdldCIsImZyYWdtZW50IiwiZ2V0RnJhZ21lbnQiLCJzZXQiLCJzaWxlbnRseSIsInNldEZyYWdtZW50IiwiZXZlbnRUeXBlIiwiSEFTSENIQU5HRV9FVkVOVF9UWVBFIiwiZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYXNoQ2hhbmdlTGlzdGVuZXIiLCJoYXNoIiwiZ2V0SGFzaCIsIlN0cmluZyIsImFzc2lnbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInNldFRpbWVvdXQiLCJmcmFnbWVudENoYW5nZUhhbmRsZXIiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImV2ZW50IiwiZm9yRWFjaCIsInN1YnN0cmluZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBMERnQkEsaUJBQWlCO2VBQWpCQTs7SUFKQUMsZ0JBQWdCO2VBQWhCQTs7O3lCQXBEUzswQkFDYTtBQUV0Q0MsT0FBT0MsY0FBYyxDQUFDQyxRQUFRQyxtQkFBUSxFQUFFO0lBQ3RDQyxLQUFLLFNBQUxBO1FBQ0UsSUFBTUMsV0FBV0M7UUFFakIsT0FBT0Q7SUFDVDtJQUVBRSxLQUFLLFNBQUxBLElBQWNGLFFBQVE7UUFDcEIsSUFBTUcsV0FBVztRQUVqQkMsWUFBWUosVUFBVUc7SUFDeEI7QUFDRjtBQUVBLElBQU1FLFlBQVlDLGlDQUFxQixFQUNqQ0MseUJBQXlCLEVBQUU7QUFFakNWLE9BQU9XLGdCQUFnQixDQUFDSCxXQUFXSTtBQUVuQyxTQUFTUjtJQUNQLElBQU1TLE9BQU9DLFdBQ1BYLFdBQVcsSUFBSVksT0FBT0YsT0FBUSxHQUFHO0lBRXZDZixPQUFPa0IsTUFBTSxDQUFDYixVQUFVO1FBQ3RCQyxhQUFBQTtRQUNBRyxhQUFBQTtRQUNBVixrQkFBQUE7UUFDQUQsbUJBQUFBO0lBQ0Y7SUFFQSxPQUFPTztBQUNUO0FBRUEsU0FBU0ksWUFBWUosUUFBUTtRQUFFRyxXQUFBQSxpRUFBVztJQUN4QyxJQUFNTyxPQUFPVixVQUFXLEdBQUc7SUFFM0IsSUFBSUcsVUFBVTtRQUNaTixPQUFPaUIsbUJBQW1CLENBQUNULFdBQVdJO0lBQ3hDO0lBRUFaLE9BQU9rQixRQUFRLENBQUNMLElBQUksR0FBR0E7SUFFdkIsSUFBSVAsVUFBVTtRQUNaYSxXQUFXO1lBQ1RuQixPQUFPVyxnQkFBZ0IsQ0FBQ0gsV0FBV0k7UUFDckMsR0FBRztJQUNMO0FBQ0Y7QUFFTyxTQUFTZixpQkFBaUJ1QixxQkFBcUI7SUFDcERWLHVCQUF1QlcsSUFBSSxDQUFDRDtBQUM5QjtBQUVPLFNBQVN4QixrQkFBa0J3QixxQkFBcUI7SUFDckQsSUFBTUUsUUFBUVosdUJBQXVCYSxPQUFPLENBQUNIO0lBRTdDLElBQUlFLFFBQVEsQ0FBQyxHQUFHO1FBQ2QsSUFBTUUsUUFBUUYsT0FDUkcsY0FBYztRQUVwQmYsdUJBQXVCZ0IsTUFBTSxDQUFDRixPQUFPQztJQUN2QztBQUNGO0FBRUEsU0FBU2IsbUJBQW1CZSxLQUFLO0lBQy9CLElBQU1kLE9BQU9DLFdBQ1BYLFdBQVdVLE1BQU8sR0FBRztJQUUzQkgsdUJBQXVCa0IsT0FBTyxDQUFDLFNBQUNSO1FBQzlCQSxzQkFBc0JPLE9BQU94QjtJQUMvQjtBQUNGO0FBRUEsU0FBU1c7SUFDUCxJQUFNLEFBQUVJLFdBQWFsQixPQUFia0I7SUFFUixJQUFJLEFBQUVMLE9BQVNLLFNBQVRMO0lBRU4sSUFBTVcsUUFBUTtJQUVkWCxPQUFPQSxLQUFLZ0IsU0FBUyxDQUFDTDtJQUV0QixPQUFPWDtBQUNUIn0=