describe('js-image-zoom tests', () => {
    var ImageZoom  = require('../package/js-image-zoom');
    beforeEach(() => {
        document.body.innerHTML =
            '<div>' +
            '  <div id="container">' +
            '  </div>' +
            '</div>';
});
    it('check creation of elements with width, height, zoomWidth, img', () => {
        const imageZoom = new ImageZoom(document.getElementById('container'), {width: 400, height: 250, zoomWidth: 500, img: "../1.jpg"});
        const setupData = imageZoom._getInstanceInfo().setup();
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));

    });

    it('check creation of elements with width, height, zoomWidth, img, offset', () => {
        const imageZoom = new ImageZoom(document.getElementById('container'), {width: 400, height: 250, zoomWidth: 500, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}});
        const setupData = imageZoom._getInstanceInfo().setup();
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
    });

    it('check creation of elements with width, height, zoomWidth, img, scale, offset', () => {
        const imageZoom = new ImageZoom(document.getElementById('container'), {width: 400, height: 250, scale: 1.5, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}});
        const setupData = imageZoom._getInstanceInfo().setup();
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
    });
    it('check creation of elements with width, height, zoomWidth, img, scale, offset, style', () => {
        const imageZoom = new ImageZoom(document.getElementById('container'), {width: 400, height: 250, scale: 1.5, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}, zoomStyle: "opacity:0.1;"});
        const setupData = imageZoom._getInstanceInfo().setup();
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
    });

    it('check creation of elements without height in options', () => {
        const options = {width: 400, scale: 1.5, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}, zoomStyle: "opacity:0.1;"};
        const imageZoom = new ImageZoom(document.getElementById('container'), options);
        const setupData = imageZoom._getInstanceInfo().setup();
        imageZoom._getInstanceInfo().data.sourceImg.element.height = 555;
        imageZoom._getInstanceInfo().onSourceImgLoad();
        expect(imageZoom._getInstanceInfo().options.height).toEqual(555);
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
    });


    it('check kill method ', () => {
        const imageZoom = new ImageZoom(document.getElementById('container'), {width: 0, height: 250, scale: 1.5, img: "../1.jpg", offset: {vertical: 0, horizontal: 10}});
        const setupData = imageZoom._getInstanceInfo().setup();
        expect(setupData.sourceImg.element).toEqual(jasmine.any(HTMLImageElement));
        expect(setupData.zoomedImg.element).toEqual(jasmine.any(HTMLDivElement));
        expect(setupData.zoomLens.element).toEqual(jasmine.any(HTMLDivElement));
        const killData = imageZoom._getInstanceInfo().kill();
        expect(JSON.stringify(setupData.zoomLens.element)).toEqual('{}');
        expect(JSON.stringify(setupData.sourceImg.element)).toEqual('{}');
        expect(JSON.stringify(setupData.zoomedImg.element)).toEqual('{}');
    });


});
