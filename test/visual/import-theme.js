function importHref(href) {
  const link = document.createElement('link');
  link.setAttribute('rel', 'import');
  link.setAttribute('href', href);
  document.head.appendChild(link);
}

(function() {
  if (this.HTMLImports) {
    var theme = window.location.hash.substr(1);
    importHref('../../' + theme + '-theme.html');
  }
})();
