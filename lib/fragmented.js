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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFnbWVudGVkLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiZ2V0IiwiZnJhZ21lbnQiLCJnZXRGcmFnbWVudCIsInNldCIsInNpbGVudGx5Iiwic2V0RnJhZ21lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFzaENoYW5nZUxpc3RlbmVyIiwiZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyIsImhhc2giLCJsb2NhdGlvbiIsInN1YnN0ciIsIlN0cmluZyIsImFzc2lnbiIsIm9uRnJhZ21lbnRDaGFuZ2UiLCJvZmZGcmFnbWVudENoYW5nZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiZnJhZ21lbnRDaGFuZ2VIYW5kbGVyIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJmb3JFYWNoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZO0FBRVosTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUUsUUFBVSxHQUFFLENBQUM7SUFDekMsR0FBRyxFQUFFLFFBQVEsQ0FBYixHQUFHLEdBQWEsQ0FBQztRQUNmLEdBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVztRQUU1QixNQUFNLENBQUMsUUFBUTtJQUNqQixDQUFDO0lBRUQsR0FBRyxFQUFFLFFBQVEsQ0FBYixHQUFHLENBQVcsUUFBUSxFQUFFLENBQUM7UUFDdkIsR0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBRXRCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUTtJQUNoQyxDQUFDO0FBQ0gsQ0FBQztBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBQyxVQUFZLEdBQUUsa0JBQWtCO0FBRXhELEdBQUssQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7U0FFeEIsV0FBVyxHQUFHLENBQUM7SUFDdEIsR0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUNwQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsV0FBVyxFQUFYLFdBQVc7UUFDWCxXQUFXLEVBQVgsV0FBVztRQUNYLGdCQUFnQixFQUFoQixnQkFBZ0I7UUFDaEIsaUJBQWlCLEVBQWpCLGlCQUFpQjtJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVE7QUFDakIsQ0FBQztTQUVRLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBZSxFQUFFLENBQUM7UUFBbEIsUUFBUSxHQUFSLEtBQWUsY0FBSixJQUFJLEdBQWYsS0FBZTtJQUM1QyxHQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLG1CQUFtQixFQUFDLFVBQVksR0FBRSxrQkFBa0I7SUFDN0QsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUk7SUFFM0IsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2IsVUFBVSxDQUFDLFFBQ2YsR0FEcUIsQ0FBQztZQUNoQixNQUFNLENBQUMsZ0JBQWdCLEVBQUMsVUFBWSxHQUFFLGtCQUFrQjtRQUMxRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7QUFDSCxDQUFDO1NBRVEsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNoRCxzQkFBc0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCO0FBQ25ELENBQUM7U0FFUSxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pELEdBQUssQ0FBQyxLQUFLLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtJQUVsRSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2YsR0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQ2IsV0FBVyxHQUFHLENBQUM7UUFFckIsc0JBQXNCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxXQUFXO0lBQ2xELENBQUM7QUFDSCxDQUFDO1NBRVEsa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixHQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQ3BDLFFBQVEsR0FBRyxJQUFJLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRTNCLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQVAscUJBQXFCLEVBQUssQ0FBQztRQUN6RCxxQkFBcUIsQ0FBQyxRQUFRO0lBQ2hDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csIFwiZnJhZ21lbnRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZ2V0RnJhZ21lbnQoKTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uKGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lsZW50bHkgPSBmYWxzZTtcblxuICAgIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSk7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgaGFzaENoYW5nZUxpc3RlbmVyKTtcblxuY29uc3QgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBnZXRGcmFnbWVudCgpIHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSwgIC8vL1xuICAgICAgICBmcmFnbWVudCA9IG5ldyBTdHJpbmcoaGFzaCk7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGZyYWdtZW50LCB7XG4gICAgZ2V0RnJhZ21lbnQsXG4gICAgc2V0RnJhZ21lbnQsXG4gICAgb25GcmFnbWVudENoYW5nZSxcbiAgICBvZmZGcmFnbWVudENoYW5nZVxuICB9KTtcblxuICByZXR1cm4gZnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIHNldEZyYWdtZW50KGZyYWdtZW50LCBzaWxlbnRseSA9IHRydWUpIHtcbiAgY29uc3QgaGFzaCA9IGZyYWdtZW50OyAgLy8vXG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGhhc2hDaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XG5cbiAgaWYgKHNpbGVudGx5KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgaGFzaENoYW5nZUxpc3RlbmVyKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkZyYWdtZW50Q2hhbmdlKGZyYWdtZW50Q2hhbmdlSGFuZGxlcikge1xuICBmcmFnbWVudENoYW5nZUhhbmRsZXJzLnB1c2goZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb2ZmRnJhZ21lbnRDaGFuZ2UoZnJhZ21lbnRDaGFuZ2VIYW5kbGVyKSB7XG4gIGNvbnN0IGluZGV4ID0gZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5pbmRleE9mKGZyYWdtZW50Q2hhbmdlSGFuZGxlcik7XG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgZnJhZ21lbnQgPSBoYXNoOyAgLy8vXG5cbiAgZnJhZ21lbnRDaGFuZ2VIYW5kbGVycy5mb3JFYWNoKChmcmFnbWVudENoYW5nZUhhbmRsZXIpID0+IHtcbiAgICBmcmFnbWVudENoYW5nZUhhbmRsZXIoZnJhZ21lbnQpO1xuICB9KTtcbn1cbiJdfQ==