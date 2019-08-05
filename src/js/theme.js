import Storage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const swichTheme = document.getElementById('theme-switch-control');
const bodySelector = document.querySelector('body');

if (Storage.load('theme') === 'dark-theme') {
  bodySelector.classList.add(Theme.DARK);
  swichTheme.setAttribute('checked', true);
}
swichTheme.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (swichTheme.checked === false) {
    bodySelector.classList.remove(Theme.DARK);
    bodySelector.classList.add(Theme.LIGHT);
    Storage.save('theme', 'light-theme');
  } else {
    bodySelector.classList.remove(Theme.LIGHT);
    bodySelector.classList.add(Theme.DARK);
    Storage.save('theme', 'dark-theme');
  }
}
