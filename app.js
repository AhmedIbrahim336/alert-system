const btnLeft = document.getElementById('left');
const butRight = document.getElementById('right');
const alert = document.getElementById('alert');

btnLeft.addEventListener('click', e => {
  //   alert.classList.remove('hide-alert');
  //   alert.classList.add('show-alert-left');
  alert.classList = alert.classList.filter(c => c !== 'show-alert-left');
});

butRight.addEventListener('click', e => {
  alert.classList.toggle('hide-alert');
  alert.classList.add('show-alert-right');
});
