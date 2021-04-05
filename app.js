const action = document.getElementById('action');
const alert = document.getElementById('alert');

action.addEventListener('click', e => {
  alert.classList.toggle('hide-alert');
  alert.classList.add('show-alert-right');
});
