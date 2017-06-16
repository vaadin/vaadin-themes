describe('material theme', function() {
  ['vaadin-date-picker', 'vaadin-text-field'].forEach(element => {
    it(element, function() {
       browser.url(`http://localhost:4567/vaadin-themes/test/visual/material/${element}.html`);

        browser.waitUntil(function () {
        return browser.getAttribute('body', 'ready') === 'true';
        }, 20000, 'expected page to be ready in 20s');

        expect(browser.checkViewport()[0].isWithinMisMatchTolerance).to.be.true;
    });
  });
});