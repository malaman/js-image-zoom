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
     *          @param {number} scale zoom scale
     */
    return function ImageZoom(container, options) {
        "use strict";
        if (!container) {
            return;
        }
        var image = container.children[0];
        var originalImgWidth;
        var originalImgHeight;
        var div = document.createElement('div');
        var zoomDiv;
        var scaleX;
        var scaleY;
        var offset;
        
        options = options || {};
        image.style.width = options.width + 'px' || 'auto';
        image.style.height = options.height + 'px' || 'auto';

        zoomDiv = container.appendChild(div);
        zoomDiv.style.width = options.zoomWidth + 'px';
        zoomDiv.style.height = image.style.height;
        zoomDiv.style.display = 'inline-block';
        zoomDiv.style.backgroundImage = 'url(' + image.src + ')';
        zoomDiv.style.backgroundRepeat = 'no-repeat';

        function getOffset(el) {
            if (el) {
                var elRect = el.getBoundingClientRect();
                var scrollX = window.scrollX || window.pageXOffset;
                var scrollY = window.scrollY || window.pageYOffset;
                return {left: elRect.left + scrollX, top: elRect.top + scrollY};
            }
            return {left: 0, top: 0};
        }

        image.onload=function() {
            originalImgWidth = image.naturalWidth;
            originalImgHeight = image.naturalHeight;
            zoomDiv.style.backgroundSize = originalImgWidth + 'px ' + originalImgHeight + 'px';
            scaleX = originalImgWidth / options.width;
            scaleY = originalImgHeight / options.height;
            offset = getOffset(image)
        };

        var events = {
            handleEvent: function(event) {
                switch(event.type) {
                    case 'mousemove': return this.handleMouseOver(event);
                }
            },
            handleMouseOver: function(event) {
                var offsetX = event.clientX - offset.left;
                var offsetY = event.clientY - offset.top;
                var backgroundTop = offsetX * scaleX;
                var backgroundRight = offsetY * scaleX;
                var backgroundPosition = '-' + backgroundTop + 'px ' +  '-' + backgroundRight + 'px';
                zoomDiv.style.backgroundPosition = backgroundPosition;
            }
        };

        image.addEventListener('mousemove', events, false);
    }
}));
