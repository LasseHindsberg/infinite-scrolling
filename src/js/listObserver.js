var observer = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0) return;
    observer.unobserve(entries[0].target);
    if (offset > count) return;
    offset = offset + 10;
    catchEmAll(offset)
}, {
    threshold: 1
});