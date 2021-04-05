const action = document.getElementById('action');

action.addEventListener('click', e => {
  alert.classList.toggle('hide-alert');
  alert.classList.add('show-alert-right');
});
