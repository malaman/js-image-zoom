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
        var image = container.children[0];
        var zoomedImage = container.appendChild(image.cloneNode(true));
        zoomedImage.style.width = 'auto';
    }
}));
