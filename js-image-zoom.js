(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.ImageZoom = factory();
    }
}(this, function () {
    return function ImageZoom(container, options) {
        "use strict";
        if (!container) {
            return;
        }
        var element = container.children[0];
    }
};




