const btnLeft = document.getElementById('left');
const alert = document.getElementById('alert');

btnLeft.addEventListener('click', e => {
  alert.classList.remove('hide-alert');
  alert.classList.add('alert-left');
});
