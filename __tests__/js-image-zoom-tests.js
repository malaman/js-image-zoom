test('check that setup function returns HTMLElement for sourceImg, zoomedImg and zoomLens', () => {
    const ImageZoom = require('../package/js-image-zoom');
    document.body.innerHTML =
        '<div>' +
        '  <div id="container">' +
        '  </div>' +
        '</div>';


    const imageZoom = new ImageZoom(document.getElementById('container'), {width: 400, height: 250, zoomWidth: 500, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}});
    const setupData = imageZoom._getPrivateFunctions().setup();
    expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
    expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
    expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
});
