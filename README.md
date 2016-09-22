#js-image-zoom


##Overview

Pure JavaScript utility for desktop browsers for image zoom on mouse hover. No external dependencies required.

##Demo

[Demo](http://malaman.github.io/js-image-zoom/)

##Arguments

- **container** (Object) - DOM element, which contains an source image
- **options** (Object) - js-image-zoom options
    * **width** (number) - width of the source image(required)
    * **height** (number) - height of the source image(required)
    * **zoomWidth** (number) - width of the zoomed image. Zoomed image height equals source image height(optional if scale param is provided)
    * **img** (string) - url of the source image. Provided if container does not contain img element as a tag(optional)    
    * **scale** (number) - zoom scale. if not provided, scale is calculated as natural image size / image size, provided in params (optional if zoomWidth param is provided)
    * **offset** (object) - {vertical: number, horizontal: number}. Zoomed image offset (optional)

##RouteMap

- [ ] extend testing coverage
