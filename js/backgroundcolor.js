function lightSwitch() {
  var el = document.querySelector('.app');
  var elTime = document.querySelectorAll('.msg_time');

  const color = el.dataset.color;

  if (color === 'black') {
    el.style.backgroundColor = "#F5F5F5";
    el.dataset.color = "white";
    elTime.forEach((e) => {
      e.style.color = "black";
    });

    return

  }

  el.style.backgroundColor = "#36393F";
  el.dataset.color = "black";
  elTime.forEach((e) => {
    e.style.color = "white";
  });