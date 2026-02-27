"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get getFragment () {
        return getFragment;
    },
    get offFragmentChange () {
        return offFragmentChange;
    },
    get onFragmentChange () {
        return onFragmentChange;
    },
    get resetFragment () {
        return resetFragment;
    },
    get setFragment () {
        return setFragment;
    }
});
const _eventTypes = require("./eventTypes");
const _constants = require("./constants");
function getFragment() {
    const hash = getHash(), fragment = new String(hash); ///
    Object.assign(fragment, {
        getFragment,
        setFragment,
        resetFragment,
        onFragmentChange,
        offFragmentChange
    });
    return fragment;
}
function setFragment(fragment, silently = true) {
    if (silently) {
        window.removeEventListener(eventType, hashChangeListener);
    }
    const hash = fragment; ///
    window.location.hash = hash;
    if (silently) {
        setTimeout(()=>{
            window.addEventListener(eventType, hashChangeListener);
        }, 0);
    }
}
function resetFragment(silently = true) {
    const fragment = _constants.EMPTY_STRING;
    setFragment(fragment, silently);
    let { href } = location;
    const index = href.indexOf(_constants.HASH);
    if (index !== -1) {
        const start = 0, end = index; ///
        href = href.substring(start, end); ///
        history.replaceState({}, _constants.EMPTY_STRING, href);
    }
}
function onFragmentChange(fragmentChangeHandler) {
    addFragmentChangeEventListener(fragmentChangeHandler);
}
function offFragmentChange(fragmentChangeHandler) {
    removeFragmentChangeEventListener(fragmentChangeHandler);
}
Object.defineProperty(globalThis, _constants.FRAGMENT, {
    get: function() {
        const fragment = getFragment();
        return fragment;
    },
    set: function(fragment) {
        const silently = false;
        setFragment(fragment, silently);
    }
});
const eventType = _eventTypes.HASHCHANGE_EVENT_TYPE, fragmentChangeHandlers = [];
window.addEventListener(eventType, hashChangeListener);
function getHash() {
    const { location: location1 } = window;
    let { hash } = location1;
    const start = 1;
    hash = hash.substring(start);
    return hash;
}
function hashChangeListener(event) {
    const hash = getHash(), element = window, fragment = hash; ///
    callFragmentChangeHandlers(event, element, fragment);
}
function callFragmentChangeHandlers(event, element, fragment) {
    fragmentChangeHandlers.forEach((fragmentChangeHandler)=>{
        fragmentChangeHandler(event, element, fragment);
    });
}
function addFragmentChangeEventListener(fragmentChangeHandler) {
    fragmentChangeHandlers.push(fragmentChangeHandler);
    return fragmentChangeHandler;
}
function removeFragmentChangeEventListener(fragmentChangeHandler) {
    const index = fragmentChangeHandlers.indexOf(fragmentChangeHandler), start = index, deleteCount = 1;
    fragmentChangeHandlers.splice(start, deleteCount);
    return fragmentChangeHandler;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBIQVNILCBGUkFHTUVOVCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmFnbWVudCgpIHtcbiAgY29uc3QgaGFzaCA9IGdldEhhc2goKSxcbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIHJlc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGcmFnbWVudChzaWxlbnRseSA9IHRydWUpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBFTVBUWV9TVFJJTkc7XG5cbiAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcblxuICBsZXQgeyBocmVmIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBpbmRleCA9IGhyZWYuaW5kZXhPZihIQVNIKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSAwLFxuICAgICAgICAgIGVuZCA9IGluZGV4OyAgLy8vXG5cbiAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7IC8vL1xuXG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIEVNUFRZX1NUUklORywgaHJlZik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIHJlbW92ZUZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywgRlJBR01FTlQsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxuY29uc3QgZXZlbnRUeXBlID0gSEFTSENIQU5HRV9FVkVOVF9UWVBFLFxuICAgICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIGdldEhhc2goKSB7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHdpbmRvdztcblxuICBsZXQgeyBoYXNoIH0gPSBsb2NhdGlvbjtcblxuICBjb25zdCBzdGFydCA9IDE7XG5cbiAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IGhhc2ggPSBnZXRIYXNoKCksXG4gICAgICAgIGVsZW1lbnQgPSB3aW5kb3csIC8vL1xuICAgICAgICBmcmFnbWVudCA9IGhhc2g7ICAvLy9cblxuICBjYWxsRnJhZ21lbnRDaGFuZ2VIYW5kbGVycyhldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpO1xufVxuXG5mdW5jdGlvbiBjYWxsRnJhZ21lbnRDaGFuZ2VIYW5kbGVycyhldmVudCwgZWxlbWVudCwgZnJhZ21lbnQpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKChmcmFnbWVudENoYW5nZUhhbmRsZXIpID0+IHtcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgcmV0dXJuIGZyYWdtZW50Q2hhbmdlSGFuZGxlcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIHJldHVybiBmcmFnbWVudENoYW5nZUhhbmRsZXI7XG59XG4iXSwibmFtZXMiOlsiZ2V0RnJhZ21lbnQiLCJvZmZGcmFnbWVudENoYW5nZSIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJyZXNldEZyYWdtZW50Iiwic2V0RnJhZ21lbnQiLCJoYXNoIiwiZ2V0SGFzaCIsImZyYWdtZW50IiwiU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic2lsZW50bHkiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFzaENoYW5nZUxpc3RlbmVyIiwibG9jYXRpb24iLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVNUFRZX1NUUklORyIsImhyZWYiLCJpbmRleCIsImluZGV4T2YiLCJIQVNIIiwic3RhcnQiLCJlbmQiLCJzdWJzdHJpbmciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwiZnJhZ21lbnRDaGFuZ2VIYW5kbGVyIiwiYWRkRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyIiwicmVtb3ZlRnJhZ21lbnRDaGFuZ2VFdmVudExpc3RlbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJnbG9iYWxUaGlzIiwiRlJBR01FTlQiLCJnZXQiLCJzZXQiLCJIQVNIQ0hBTkdFX0VWRU5UX1RZUEUiLCJmcmFnbWVudENoYW5nZUhhbmRsZXJzIiwiZXZlbnQiLCJlbGVtZW50IiwiY2FsbEZyYWdtZW50Q2hhbmdlSGFuZGxlcnMiLCJmb3JFYWNoIiwicHVzaCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFLZ0JBO2VBQUFBOztRQXNEQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQW5CQUM7ZUFBQUE7O1FBaEJBQztlQUFBQTs7OzRCQWxCc0I7MkJBQ087QUFFdEMsU0FB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