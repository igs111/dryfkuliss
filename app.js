const routes = {
  home: document.getElementById('view-home'),
  music: document.getElementById('view-music'),
  release: document.getElementById('view-release'),
  contact: document.getElementById('view-contact'),
};
const loader = document.getElementById('loader');

function showView(viewKey) {
  Object.values(routes).forEach(v => v.classList.remove('active'));
  routes[viewKey].classList.add('active');
}

function withLoader(nextViewKey) {
  loader.classList.remove('hidden');
  setTimeout(() => {
    loader.classList.add('hidden');
    showView(nextViewKey);
  }, 2000);
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = e.target.getAttribute('data-route');
    if (key === 'muzyka') withLoader('music');
    else if (key === 'wydanie') withLoader('release');
    else if (key === 'kontakt') showView('contact');
  });
});

showView('home');
