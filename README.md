# js-image-zoom


## Overview

Pure JavaScript utility for desktop browsers for image zoom on mouse hover. No external dependencies required.

## Demo

[Demo](http://malaman.github.io/js-image-zoom/example)


## Install

```
npm install js-image-zoom --save
```

## Usage

Basic usage example

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF8">
    <title>Title</title>
    <script src="https://unpkg.com/js-image-zoom@0.4.1/js-image-zoom.js" type="application/javascript"></script>
</head>
<body>
    <div id="img-container" style="width: 400px">
        <img src="https://static.franks-travelbox.com/e/7/4/9/e749959ea9e2864e304a5024754efbeaa6e71b59/allerlei-leckereien-und-der-exklusive-rathausmarkt-gluehwein-laden-zum-schauen-shoppen-und-schlemmen-am-weihnachtsmarkt-vor-dem-hamburger-rathaus-ein-deutschland.jpg" />
    <div>
<script>
var options = {
    width: 400,
    zoomWidth: 500,
    offset: {vertical: 0, horizontal: 10}
};
new ImageZoom(document.getElementById("img-container"), options);

</script>
</body>
</html>

```

Check basic example in browser:
[Basic Example](http://malaman.github.io/js-image-zoom/example/basic.html)




## Arguments

- **container** (Object) - DOM element, which contains an source image
- **options** (Object) - js-image-zoom options
    * **width** (number) - width of the source image(required)
    * **height** (number) - height of the source image(optional).
    * **zoomWidth** (number) - width of the zoomed image. Zoomed image height equals source image height(optional if scale param is provided)
    * **img** (string) - url of the source image. Provided if container does not contain img element as a tag(optional)
    * **scale** (number) - zoom scale. if not provided, scale is calculated as natural image size / image size, provided in params (optional if zoomWidth param is provided)
    * **offset** (object) - {vertical: number, horizontal: number}. Zoomed image offset (optional)
    * **zoomStyle** (string) - custom style applied to the zoomed image (i.e. 'opacity: 0.1;background-color: white;')
    * **zoomLensStyle** (string) custom style applied to to zoom lents (i.e. 'opacity: 0.1;background-color: white;')

## For react users

React wrapper around js-image-zoom is available:

[react-image-zoom](https://www.npmjs.com/package/react-image-zoom)

## RouteMap

- [ ] extend testing coverage
- [ ] add aditioinal examples
