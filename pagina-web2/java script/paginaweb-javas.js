const decreaseboton = document.getElementById("decreasebutun");
const resetboton = document.getElementById("resetbutun");
const increaseboton = document.getElementById("increasebutun");
const countable = document.getElementById("countable");
let randomboton = document.getElementById("randoom-number")
let randomnum = 0;

increaseboton.onclick = function(){
    randomnum++;
    countable.textContent = randomnum;
}
decreaseboton.onclick = function(){
    randomnum--;
    countable.textContent = randomnum;
}
resetboton.onclick = function(){
    randomnum = 0;
    countable.textContent = randomnum;
}
randomboton.onclick = function(){
    randomnum =  Math.floor(Math.random()* 1000) + 1
    countable.textContent = randomnum
}
/*************************************************************/
function updateclock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timestring = ` ${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timestring
}
setInterval(updateclock,1000);
/***************************************************************/
const display = document.getElementById("display-stop");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start(){

    if(!isrunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true
    }
}
function stop(){
    
    if(isrunning){
        clearInterval(timer);
        elapsedtime = Date.now() -starttime;
        isrunning = false;
    }
}
function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;
     
    let hours2 = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes2 = Math.floor( elapsedtime / (1000 * 60) % 60);
    let seconds2 = Math.floor(elapsedtime / 1000 % 60);
    let miliseconds2 = Math.floor(elapsedtime % 1000 / 10)
    hours2 = String(hours2).padStart(2,"0");
    minutes2 = String(minutes2).padStart(2,"0");
    seconds2 = String(seconds2).padStart(2,"0");
    miliseconds2 = String(miliseconds2).padStart(2,"0");

    display.textContent = `${hours2}:${minutes2}:${seconds2}:${miliseconds2}`;
}
/*********************************************************/

const displaycalculator = document.getElementById("calculator-display");
function calculate(){
    try{
        displaycalculator.value = eval(displaycalculator.value);

    }
    catch(error){
        displaycalculator.vlaue = "ERROR"
    }
}
function cleardisplay(){
    displaycalculator.value = "";
}
function appendtodisplay(input){
  displaycalculator.value += input
}