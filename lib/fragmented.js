"use strict";
Object.defineProperty(window, "fragment", {
    get: function get() {
        var fragment = getFragment();
        return fragment;
    },
    set: function set(fragment) {
        var silently = false;
        setFragment(fragment, silently);
    }
});
window.addEventListener("hashchange", hashChangeListener);
var fragmentChangeHandlers = [];
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
function setFragment(fragment, param) {
    var silently = param === void 0 ? true : param;
    var hash = fragment; ///
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
    var hash = window.location.hash.substr(1), fragment = hash; ///
    fragmentChangeHandlers.forEach(function(fragmentChangeHandler) {
        fragmentChangeHandler(fragment);
    });
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCBcImZyYWdtZW50XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGdldEZyYWdtZW50KCk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihmcmFnbWVudCkge1xuICAgIGNvbnN0IHNpbGVudGx5ID0gZmFsc2U7XG5cbiAgICBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkpO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG5cbmNvbnN0IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gZ2V0RnJhZ21lbnQoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBuZXcgU3RyaW5nKGhhc2gpOyAgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihmcmFnbWVudCwge1xuICAgIGdldEZyYWdtZW50LFxuICAgIHNldEZyYWdtZW50LFxuICAgIG9uRnJhZ21lbnRDaGFuZ2UsXG4gICAgb2ZmRnJhZ21lbnRDaGFuZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBzZXRGcmFnbWVudChmcmFnbWVudCwgc2lsZW50bHkgPSB0cnVlKSB7XG4gIGNvbnN0IGhhc2ggPSBmcmFnbWVudDsgIC8vL1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXG4gIGlmIChzaWxlbnRseSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25GcmFnbWVudENoYW5nZShmcmFnbWVudENoYW5nZUhhbmRsZXIpIHtcbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5wdXNoKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBjb25zdCBpbmRleCA9IGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuaW5kZXhPZihmcmFnbWVudENoYW5nZUhhbmRsZXIpO1xuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzaENoYW5nZUxpc3RlbmVyKCkge1xuICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgIGZyYWdtZW50ID0gaGFzaDsgIC8vL1xuXG4gIGZyYWdtZW50Q2hhbmdlSGFuZGxlcnMuZm9yRWFjaCgoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSA9PiB7XG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKGZyYWdtZW50KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTtBQUVBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxHQUFBLFFBQUE7QUFDQSxPQUFBLFdBQUEsR0FBQTtZQUNBLFFBQUEsR0FBQSxXQUFBO2VBRUEsUUFBQTs7QUFHQSxPQUFBLFdBQUEsR0FBQSxDQUFBLFFBQUE7WUFDQSxRQUFBLEdBQUEsS0FBQTtBQUVBLG1CQUFBLENBQUEsUUFBQSxFQUFBLFFBQUE7OztBQUlBLE1BQUEsQ0FBQSxnQkFBQSxFQUFBLFVBQUEsR0FBQSxrQkFBQTtJQUVBLHNCQUFBO1NBRUEsV0FBQTtRQUNBLElBQUEsR0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUNBLFFBQUEsT0FBQSxNQUFBLENBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsVUFBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBO0FBQ0EsbUJBQUEsRUFBQSxXQUFBO0FBQ0EsbUJBQUEsRUFBQSxXQUFBO0FBQ0Esd0JBQUEsRUFBQSxnQkFBQTtBQUNBLHlCQUFBLEVBQUEsaUJBQUE7O1dBR0EsUUFBQTs7U0FHQSxXQUFBLENBQUEsUUFBQSxFQUFBLEtBQUE7UUFBQSxRQUFBLEdBQUEsS0FBQSxjQUFBLElBQUEsR0FBQSxLQUFBO1FBQ0EsSUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtRQUVBLFFBQUE7QUFDQSxjQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBLEdBQUEsa0JBQUE7O0FBR0EsVUFBQSxDQUFBLFFBQUEsQ0FBQSxJQUFBLEdBQUEsSUFBQTtRQUVBLFFBQUE7QUFDQSxrQkFBQTtBQUNBLGtCQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBLEdBQUEsa0JBQUE7V0FDQSxDQUFBOzs7U0FJQSxnQkFBQSxDQUFBLHFCQUFBO0FBQ0EsMEJBQUEsQ0FBQSxJQUFBLENBQUEscUJBQUE7O1NBR0EsaUJBQUEsQ0FBQSxxQkFBQTtRQUNBLEtBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUEsQ0FBQSxxQkFBQTtRQUVBLEtBQUEsSUFBQSxDQUFBO1lBQ0EsS0FBQSxHQUFBLEtBQUEsRUFDQSxXQUFBLEdBQUEsQ0FBQTtBQUVBLDhCQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsRUFBQSxXQUFBOzs7U0FJQSxrQkFBQTtRQUNBLElBQUEsR0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUNBLFFBQUEsR0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSwwQkFBQSxDQUFBLE9BQUEsVUFBQSxxQkFBQTtBQUNBLDZCQUFBLENBQUEsUUFBQSJ9