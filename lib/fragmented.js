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
var _constants = require("./constants");
var _eventTypes = require("./eventTypes");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGUkFHTUVOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSEFTSENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSBnZXRIYXNoKCksXG4gICAgICAgIGZyYWdtZW50ID0gbmV3IFN0cmluZyhoYXNoKTsgIC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oZnJhZ21lbnQsIHtcbiAgICBnZXRGcmFnbWVudCxcbiAgICBzZXRGcmFnbWVudCxcbiAgICBvbkZyYWdtZW50Q2hhbmdlLFxuICAgIG9mZkZyYWdtZW50Q2hhbmdlXG4gIH0pO1xuXG4gIHJldHVybiBmcmFnbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH0sIDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnB1c2goZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgRlJBR01FTlQsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxuY29uc3QgZXZlbnRUeXBlID0gSEFTSENIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmZvckVhY2goKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikgPT4ge1xuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcihldmVudCwgZnJhZ21lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCgpIHtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gd2luZG93O1xuXG4gIGxldCB7IGhhc2ggfSA9IGxvY2F0aW9uO1xuXG4gIGNvbnN0IHN0YXJ0ID0gMTtcblxuICBoYXNoID0gaGFzaC5zdWJzdHJpbmcoc3RhcnQpO1xuXG4gIHJldHVybiBoYXNoO1xufSJdLCJuYW1lcyI6WyJnZXRGcmFnbWVudCIsIm9mZkZyYWdtZW50Q2hhbmdlIiwib25GcmFnbWVudENoYW5nZSIsInNldEZyYWdtZW50IiwiaGFzaCIsImdldEhhc2giLCJmcmFnbWVudCIsIlN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsInNpbGVudGx5Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50VHlwZSIsImhhc2hDaGFuZ2VMaXN0ZW5lciIsImxvY2F0aW9uIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmcmFnbWVudENoYW5nZUhhbmRsZXIiLCJmcmFnbWVudENoYW5nZUhhbmRsZXJzIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJkZWZpbmVQcm9wZXJ0eSIsIkZSQUdNRU5UIiwiZ2V0Iiwic2V0IiwiSEFTSENIQU5HRV9FVkVOVF9UWVBFIiwiZXZlbnQiLCJmb3JFYWNoIiwic3Vic3RyaW5nIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFLZ0JBLFdBQVc7ZUFBWEE7O0lBa0NBQyxpQkFBaUI7ZUFBakJBOztJQUpBQyxnQkFBZ0I7ZUFBaEJBOztJQWhCQUMsV0FBVztlQUFYQTs7O3lCQWpCUzswQkFDYTtBQUUvQixTQUFTSDtJQUNkLElBQU1JLE9BQU9DLFdBQ1BDLFdBQVcsSUFBSUMsT0FBT0gsT0FBUSxHQUFHO0lBRXZDSSxPQUFPQyxNQUFNLENBQUNILFVBQVU7UUFDdEJOLGFBQUFBO1FBQ0FHLGFBQUFBO1FBQ0FELGtCQUFBQTtRQUNBRCxtQkFBQUE7SUFDRjtJQUVBLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTSCxZQUFZRyxRQUFRO1FBQUVJLFdBQUFBLGlFQUFXO0lBQy9DLElBQU1OLE9BQU9FLFVBQVcsR0FBRztJQUUzQixJQUFJSSxVQUFVO1FBQ1pDLE9BQU9DLG1CQUFtQixDQUFDQyxXQUFXQztJQUN4QztJQUVBSCxPQUFPSSxRQUFRLENBQUNYLElBQUksR0FBR0E7SUFFdkIsSUFBSU0sVUFBVTtRQUNaTSxXQUFXO1lBQ1RMLE9BQU9NLGdCQUFnQixDQUFDSixXQUFXQztRQUNyQyxHQUFHO0lBQ0w7QUFDRjtBQUVPLFNBQVNaLGlCQUFpQmdCLHFCQUFxQjtJQUNwREMsdUJBQXVCQyxJQUFJLENBQUNGO0FBQzlCO0FBRU8sU0FBU2pCLGtCQUFrQmlCLHFCQUFxQjtJQUNyRCxJQUFNRyxRQUFRRix1QkFBdUJHLE9BQU8sQ0FBQ0o7SUFFN0MsSUFBSUcsUUFBUSxDQUFDLEdBQUc7UUFDZCxJQUFNRSxRQUFRRixPQUNSRyxjQUFjO1FBRXBCTCx1QkFBdUJNLE1BQU0sQ0FBQ0YsT0FBT0M7SUFDdkM7QUFDRjtBQUVBaEIsT0FBT2tCLGNBQWMsQ0FBQ2YsUUFBUWdCLG1CQUFRLEVBQUU7SUFDdENDLEtBQUssU0FBTEE7UUFDRSxJQUFNdEIsV0FBV047UUFFakIsT0FBT007SUFDVDtJQUVBdUIsS0FBSyxTQUFMQSxJQUFjdkIsUUFBUTtRQUNwQixJQUFNSSxXQUFXO1FBRWpCUCxZQUFZRyxVQUFVSTtJQUN4QjtBQUNGO0FBRUEsSUFBTUcsWUFBWWlCLGlDQUFxQixFQUNqQ1gseUJBQXlCLEVBQUU7QUFFakNSLE9BQU9NLGdCQUFnQixDQUFDSixXQUFXQztBQUVuQyxTQUFTQSxtQkFBbUJpQixLQUFLO0lBQy9CLElBQU0zQixPQUFPQyxXQUNQQyxXQUFXRixNQUFPLEdBQUc7SUFFM0JlLHVCQUF1QmEsT0FBTyxDQUFDLFNBQUNkO1FBQzlCQSxzQkFBc0JhLE9BQU96QjtJQUMvQjtBQUNGO0FBRUEsU0FBU0Q7SUFDUCxJQUFNLEFBQUVVLFdBQWFKLE9BQWJJO0lBRVIsSUFBSSxBQUFFWCxPQUFTVyxTQUFUWDtJQUVOLElBQU1tQixRQUFRO0lBRWRuQixPQUFPQSxLQUFLNkIsU0FBUyxDQUFDVjtJQUV0QixPQUFPbkI7QUFDVCJ9