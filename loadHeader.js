document.addEventListener('DOMContentLoaded', function () {
  fetch('/partials/header.html')
    .then(function (response) { return response.text(); })
    .then(function (html) {
      var container = document.getElementById('header');
      if (container) {
        container.innerHTML = html;

        var langButton = document.getElementById('lang-toggle');
        var langMenu = document.getElementById('lang-menu');
        var menuButton = document.getElementById('menu-toggle');
        var nav = document.getElementById('main-menu');

        langButton.addEventListener('click', function (e) {
          e.stopPropagation();
          var expanded = langButton.getAttribute('aria-expanded') === 'true';
          langButton.setAttribute('aria-expanded', !expanded);
          langMenu.hidden = expanded;
        });

        menuButton.addEventListener('click', function (e) {
          e.stopPropagation();
          nav.classList.toggle('is-visible');
        });

        document.addEventListener('click', function () {
          langButton.setAttribute('aria-expanded', false);
          langMenu.hidden = true;
          nav.classList.remove('is-visible');
        });

        langMenu.addEventListener('click', function (e) {
          e.stopPropagation();
        });
        nav.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    });
});
