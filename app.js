const views = document.querySelectorAll('.view');
const loader = document.getElementById('loader');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function loadThenShow(id) {
  loader.classList.remove('hidden');
  setTimeout(() =>
