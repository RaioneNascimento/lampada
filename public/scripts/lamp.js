const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
  if(!isLampBroken ()) {
    lamp.src = './public/images/ligada.jpg';
  }
}

function lampOff() {
  if(!isLampBroken ()) {
    lamp.src = './public/images/desligada.jpg';
  }  
}

function broken() {
  lamp.src = './public/images/quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener('click', broken);