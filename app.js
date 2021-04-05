const action = document.getElementById('action');
const alert = document.getElementById('alert');
const undo = document.getElementById('undo');

action.addEventListener('click', e => {
  alert.classList.toggle('hide-alert');
  alert.classList.add('show-alert-right');
});
