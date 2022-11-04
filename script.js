//model
let bulb = 'bulbOff';
let room = 'black';
let lightSwitch = '<img src="img/off.png"/>';
let illumination = 'off';

//view
showContent();
function showContent(){
    document.getElementById('page').innerHTML = /*html*/`
    <!-- lyspæra -->
    <div class ="${bulb}"></div>
    <div class ="socket"></div>
    <div class = "switch" onclick="switchLight()"> ${lightSwitch} </div>
    <audio autoplay src="sound/klikklakk.wav"></audio>
    `;
    document.body.style.backgroundColor = room;

}

//controller
function switchLight(){
    if(illumination == 'off'){
        room = 'white';
        bulb = 'bulbOn';
        illumination = 'on'
        lightSwitch = '<img src="img/on.png"/>'
    }else {
        room = 'black';
        bulb = 'bulbOff';
        illumination = 'off'
        lightSwitch = '<img src="img/off.png"/>'
    }

    showContent();
}