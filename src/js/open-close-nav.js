const hiddenNav = document.getElementById('hidden-nav');

document.getElementById('open-nav-btn').addEventListener('click', () => {
  hiddenNav.style.width = '100%';
});

document.getElementById('close-nav-btn').addEventListener('click', () => {
  hiddenNav.style.width = '0%';
});

window.addEventListener('resize', function (event) {
  if (window.innerWidth > 768) {
    hiddenNav.style.width = '0%';
  }
});