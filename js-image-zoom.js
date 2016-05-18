(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.ImageZoom = factory();
    }
}(this, function () {
    /**
     * @param {Object} container DOM element, which contains an image to be zoomed
     * @param {Object} options js-image-zoom options
     *          @param {number} width Image width
     *          @param {number} height Image height
     *          @param {number} zoomWidth  Zoomed image width
     */
    return function ImageZoom(container, options) {
        "use strict";
        if (!container) {
            return;
        }
        var image = container.children[0];
        var originalImgWidth = image.getBoundingClientRect().width;
        var zoomHeight;
        var div = document.createElement('div');
        var zoomDiv = container.appendChild(div);
        options = options || {};

        image.style.width = options.width + 'px' || 'auto';
        image.style.height = options.height + 'px' || 'auto';
        zoomDiv.style.width = options.zoomWidth + 'px';
        zoomDiv.style.height = image.style.height;
        zoomDiv.style.display = 'inline-block';
        zoomDiv.style.backgroundImage = 'url(' + image.src + ')';

        var events = {
            handleEvent: function(event) {
                switch(event.type) {
                    case 'mousemove': return this.handleMouseOver(event);
                }
            },
            handleMouseOver: function(event) {

            }
        };

        image.addEventListener('mousemove', events, false);

    }
}));
