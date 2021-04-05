const action = document.getElementById('action');

btnLeft.addEventListener('click', e => {
  //   alert.classList.remove('hide-alert');
  //   alert.classList.add('show-alert-left');
  alert.classList = alert.classList.filter(c => c !== 'show-alert-left');
});

butRight.addEventListener('click', e => {
  alert.classList.toggle('hide-alert');
  alert.classList.add('show-alert-right');
});
