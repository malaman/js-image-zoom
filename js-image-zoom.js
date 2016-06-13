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
        var originalImgWidth;
        var originalImgHeight;
        var div = document.createElement('div');
        var lensDiv = document.createElement('div');
        var zoomDiv;
        var zoomLens;
        var scaleX;
        var scaleY;
        var offset;
        var zoomLensWidth;
        var zoomLensHeight;
        
        options = options || {};
        container.style.position = 'absolute';
        image.style.width = options.width + 'px' || 'auto';
        image.style.height = options.height + 'px' || 'auto';
        zoomLens = container.appendChild(lensDiv);
        zoomLens.style.display = 'none';
        zoomDiv = container.appendChild(div);
        zoomDiv.style.width = options.zoomWidth + 'px';
        zoomDiv.style.height = image.style.height;
        zoomDiv.style.display = 'inline-block';
        zoomDiv.style.backgroundImage = 'url(' + image.src + ')';
        zoomDiv.style.backgroundRepeat = 'no-repeat';
        zoomDiv.style.display = 'none';


        function getOffset(el) {
            if (el) {
                var elRect = el.getBoundingClientRect();
                var scrollX = window.scrollX || window.pageXOffset;
                var scrollY = window.scrollY || window.pageYOffset;
                return {left: elRect.left + scrollX, top: elRect.top + scrollY};
            }
            return {left: 0, top: 0};
        }

        function leftLimit(min) {
            return options.width  - min;
        }

        function topLimit(min) {
            return options.height - min;
        }

        function getValue(val, min, max) {
            if (val < min) {
                return min;
            }
            if (val > max) {
                return max;
            }
            return val;
        }

        function getPosition(v, min, max) {
            const value = getValue(v, min, max);
            return value - min;
        }

        function zoomLensLeft(left) {
            var leftMin = zoomLensWidth / 2;
            return getPosition(left, leftMin, leftLimit(leftMin));
        }

        function zoomLensTop(top) {
            const topMin = zoomLensHeight / 2;
            return getPosition(top, topMin , topLimit(topMin));
        }

        image.onload = function() {
            originalImgWidth = image.naturalWidth;
            originalImgHeight = image.naturalHeight;
            zoomDiv.style.backgroundSize = originalImgWidth + 'px ' + originalImgHeight + 'px';
            scaleX = originalImgWidth / options.width;
            scaleY = originalImgHeight / options.height;
            offset = getOffset(container);
            zoomLensWidth = options.zoomWidth / scaleX;
            zoomLensHeight =options.height / scaleY;
            zoomLens.style.width = zoomLensWidth + 'px';
            zoomLens.style.height =  zoomLensHeight + 'px';
            zoomLens.style.position = 'absolute';
            zoomLens.style.background = 'white';
            zoomLens.style.opacity = 0.4;
            zoomLens.pointerEvents = 'none';

        };

        var events = {
            handleEvent: function(event) {
                switch(event.type) {
                    case 'mousemove': return this.handleMouseMove(event);
                    case 'mouseenter': return this.handleMouseEnter(event);
                    case 'mouseleave': return this.handleMouseLeave(event);
                }
            },
            handleMouseMove: function(event) {
                var offsetX = zoomLensLeft(event.clientX - offset.left);
                var offsetY = zoomLensTop(event.clientY - offset.top);

                var backgroundTop = offsetX * scaleX;
                var backgroundRight = offsetY * scaleY;
                var backgroundPosition = '-' + backgroundTop + 'px ' +  '-' + backgroundRight + 'px';
                zoomDiv.style.backgroundPosition = backgroundPosition;
                zoomLens.style.top = offsetY + 'px';
                zoomLens.style.left = offsetX + 'px';
            },
            handleMouseEnter: function() {
                zoomDiv.style.display  = 'inline-block';
                zoomLens.style.display = 'block';
            },
            handleMouseLeave: function() {
                zoomDiv.style.display  = 'none';
                zoomLens.style.display = 'none';
            }
        };

        container.addEventListener('mousemove', events, false);
        container.addEventListener('mouseenter', events, false);
        zoomLens.addEventListener('mouseleave', events, false);
    }
}));
