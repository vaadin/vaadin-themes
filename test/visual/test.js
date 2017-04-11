gemini.suite('vaadin-themes', function(rootSuite) {
  // Hack needed for
  // - Edge (https://github.com/vaadin/vaadin-text-field/issues/10)
  // - Making sure that animations have finished
  // - FF has async focused the input.
  function wait(actions, find) {
    actions.wait(5000);
  }

  const themes = ['material'];
  const elements = ['vaadin-text-field']

  themes.forEach(function(theme) {
    gemini.suite(theme, function(themeSuite) {
      elements.forEach(function(element) {
        gemini.suite(element, function(elementSuite) {
          elementSuite
            .setUrl(element + '.html#' + theme)
            .setCaptureElements('#default-tests')
            .capture('screenshots', {}, wait);
        });
      });
    });
  });

});
