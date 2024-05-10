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
function hashChangeListener(event) {
    var hash = window.location.hash.substr(1), fragment = hash; ///
    fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(event, fragment);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGUkFHTUVOVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSEFTSENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBGUkFHTUVOVCwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG5jb25zdCBldmVudFR5cGUgPSBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUsXG4gICAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIG9uRnJhZ21lbnRDaGFuZ2UsXG4gICAgb2ZmRnJhZ21lbnRDaGFuZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZGcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gaGFzaDsgIC8vL1xuXG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSA9PiB7XG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBmcmFnbWVudCk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIm9mZkZyYWdtZW50Q2hhbmdlIiwib25GcmFnbWVudENoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiRlJBR01FTlQiLCJnZXQiLCJmcmFnbWVudCIsImdldEZyYWdtZW50Iiwic2V0Iiwic2lsZW50bHkiLCJzZXRGcmFnbWVudCIsImV2ZW50VHlwZSIsIkhBU0hDSEFOR0VfRVZFTlRfVFlQRSIsImZyYWdtZW50Q2hhbmdlSGFuZGxlcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzaENoYW5nZUxpc3RlbmVyIiwiaGFzaCIsImxvY2F0aW9uIiwic3Vic3RyIiwiU3RyaW5nIiwiYXNzaWduIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJmcmFnbWVudENoYW5nZUhhbmRsZXIiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImV2ZW50IiwiZm9yRWFjaCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUEwRGdCQSxpQkFBaUI7ZUFBakJBOztJQUpBQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBcERTOzBCQUNhO0FBRXRDQyxPQUFPQyxjQUFjLENBQUNDLFFBQVFDLG1CQUFRLEVBQUU7SUFDdENDLEtBQUssU0FBTEE7UUFDRSxJQUFNQyxXQUFXQztRQUVqQixPQUFPRDtJQUNUO0lBRUFFLEtBQUssU0FBTEEsSUFBY0YsUUFBUTtRQUNwQixJQUFNRyxXQUFXO1FBRWpCQyxZQUFZSixVQUFVRztJQUN4QjtBQUNGO0FBRUEsSUFBTUUsWUFBWUMsaUNBQXFCLEVBQ2pDQyx5QkFBeUIsRUFBRTtBQUVqQ1YsT0FBT1csZ0JBQWdCLENBQUNILFdBQVdJO0FBRW5DLFNBQVNSO0lBQ1AsSUFBTVMsT0FBT2IsT0FBT2MsUUFBUSxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxJQUNuQ1osV0FBVyxJQUFJYSxPQUFPSCxPQUFRLEdBQUc7SUFFdkNmLE9BQU9tQixNQUFNLENBQUNkLFVBQVU7UUFDdEJDLGFBQUFBO1FBQ0FHLGFBQUFBO1FBQ0FWLGtCQUFBQTtRQUNBRCxtQkFBQUE7SUFDRjtJQUVBLE9BQU9PO0FBQ1Q7QUFFQSxTQUFTSSxZQUFZSixRQUFRO1FBQUVHLFdBQUFBLGlFQUFXO0lBQ3hDLElBQU1PLE9BQU9WLFVBQVcsR0FBRztJQUUzQixJQUFJRyxVQUFVO1FBQ1pOLE9BQU9rQixtQkFBbUIsQ0FBQ1YsV0FBV0k7SUFDeEM7SUFFQVosT0FBT2MsUUFBUSxDQUFDRCxJQUFJLEdBQUdBO0lBRXZCLElBQUlQLFVBQVU7UUFDWmEsV0FBVztZQUNUbkIsT0FBT1csZ0JBQWdCLENBQUNILFdBQVdJO1FBQ3JDLEdBQUc7SUFDTDtBQUNGO0FBRU8sU0FBU2YsaUJBQWlCdUIscUJBQXFCO0lBQ3BEVix1QkFBdUJXLElBQUksQ0FBQ0Q7QUFDOUI7QUFFTyxTQUFTeEIsa0JBQWtCd0IscUJBQXFCO0lBQ3JELElBQU1FLFFBQVFaLHVCQUF1QmEsT0FBTyxDQUFDSDtJQUU3QyxJQUFJRSxRQUFRLENBQUMsR0FBRztRQUNkLElBQU1FLFFBQVFGLE9BQ1JHLGNBQWM7UUFFcEJmLHVCQUF1QmdCLE1BQU0sQ0FBQ0YsT0FBT0M7SUFDdkM7QUFDRjtBQUVBLFNBQVNiLG1CQUFtQmUsS0FBSztJQUMvQixJQUFNZCxPQUFPYixPQUFPYyxRQUFRLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLElBQ25DWixXQUFXVSxNQUFPLEdBQUc7SUFFM0JILHVCQUF1QmtCLE9BQU8sQ0FBQyxTQUFDUjtRQUM5QkEsc0JBQXNCTyxPQUFPeEI7SUFDL0I7QUFDRiJ9