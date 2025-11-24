const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav a');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('data-view');
    showView(id);
  });
});

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Dziękuję! Wkrótce odpiszę.');
  e.target.reset();
});
