const turnOn = document.getElementById('ligar');
const turnOff = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function ligar (){
    lamp.src = 'lamp_on.jpeg'
}

function desligar (){
    lamp.src = 'lamp_off.jpeg'
}

turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);