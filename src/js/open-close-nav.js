document.getElementById('open-nav-btn').addEventListener('click', () => {
  document.getElementById('hidden-nav').style.width = '100%';
});

document.getElementById('close-nav-btn').addEventListener('click', () => {
  document.getElementById('hidden-nav').style.width = '0%';
});