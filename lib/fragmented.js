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
        defer(()=>{
            window.addEventListener(eventType, hashChangeListener);
        });
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
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBIQVNIQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBIQVNILCBGUkFHTUVOVCwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcmFnbWVudCgpIHtcbiAgY29uc3QgaGFzaCA9IGdldEhhc2goKSxcbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIHJlc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblxuICBpZiAoc2lsZW50bHkpIHtcbiAgICBkZWZlcigoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0RnJhZ21lbnQoc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gRU1QVFlfU1RSSU5HO1xuXG4gIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG5cbiAgbGV0IHsgaHJlZiB9ID0gbG9jYXRpb247XG5cbiAgY29uc3QgaW5kZXggPSBocmVmLmluZGV4T2YoSEFTSCk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgICBlbmQgPSBpbmRleDsgIC8vL1xuXG4gICAgaHJlZiA9IGhyZWYuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpOyAvLy9cblxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBFTVBUWV9TVFJJTkcsIGhyZWYpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBhZGRGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICByZW1vdmVGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIEZSQUdNRU5ULCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBnZXRGcmFnbWVudCgpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBzaWxlbnRseSA9IGZhbHNlO1xuXG4gICAgc2V0RnJhZ21lbnQoZnJhZ21lbnQsIHNpbGVudGx5KTtcbiAgfVxufSk7XG5cbmNvbnN0IGV2ZW50VHlwZSA9IEhBU0hDSEFOR0VfRVZFTlRfVFlQRSxcbiAgICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMgPSBbXTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBnZXRIYXNoKCkge1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSB3aW5kb3c7XG5cbiAgbGV0IHsgaGFzaCB9ID0gbG9jYXRpb247XG5cbiAgY29uc3Qgc3RhcnQgPSAxO1xuXG4gIGhhc2ggPSBoYXNoLnN1YnN0cmluZyhzdGFydCk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cbmZ1bmN0aW9uIGhhc2hDaGFuZ2VMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCBoYXNoID0gZ2V0SGFzaCgpLFxuICAgICAgICBlbGVtZW50ID0gd2luZG93LCAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBoYXNoOyAgLy8vXG5cbiAgY2FsbEZyYWdtZW50Q2hhbmdlSGFuZGxlcnMoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KTtcbn1cblxuZnVuY3Rpb24gY2FsbEZyYWdtZW50Q2hhbmdlSGFuZGxlcnMoZXZlbnQsIGVsZW1lbnQsIGZyYWdtZW50KSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSA9PiB7XG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBmcmFnbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRGcmFnbWVudENoYW5nZUV2ZW50TGlzdGVuZXIoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMucHVzaChmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIHJldHVybiBmcmFnbWVudENoYW5nZUhhbmRsZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lcihmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgY29uc3QgaW5kZXggPSBmcmFnbWVudENoYW5nZUhhbmRsZXJzLmluZGV4T2YoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICByZXR1cm4gZnJhZ21lbnRDaGFuZ2VIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0RnJhZ21lbnQiLCJvZmZGcmFnbWVudENoYW5nZSIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJyZXNldEZyYWdtZW50Iiwic2V0RnJhZ21lbnQiLCJoYXNoIiwiZ2V0SGFzaCIsImZyYWdtZW50IiwiU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIiwic2lsZW50bHkiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFzaENoYW5nZUxpc3RlbmVyIiwibG9jYXRpb24iLCJkZWZlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJFTVBUWV9TVFJJTkciLCJocmVmIiwiaW5kZXgiLCJpbmRleE9mIiwiSEFTSCIsInN0YXJ0IiwiZW5kIiwic3Vic3RyaW5nIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImZyYWdtZW50Q2hhbmdlSGFuZGxlciIsImFkZEZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUZyYWdtZW50Q2hhbmdlRXZlbnRMaXN0ZW5lciIsImRlZmluZVByb3BlcnR5IiwiZ2xvYmFsVGhpcyIsIkZSQUdNRU5UIiwiZ2V0Iiwic2V0IiwiSEFTSENIQU5HRV9FVkVOVF9UWVBFIiwiZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyIsImV2ZW50IiwiZWxlbWVudCIsImNhbGxGcmFnbWVudENoYW5nZUhhbmRsZXJzIiwiZm9yRWFjaCIsInB1c2giLCJkZWxldGVDb3VudCIsInNwbGljZSIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFLZ0JBO2VBQUFBOztRQXNEQUM7ZUFBQUE7O1FBSkFD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