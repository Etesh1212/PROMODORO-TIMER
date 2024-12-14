const start=document.getElementsByClassName('start');
const stop=document.getElementsByClassName('stop');
const reset=document.getElementsByClassName('reset');

const timer=document.getElementsByClassName('timer');


let minutes=25;
let seconds=0;
let timerId;

console.log(timer,"timer");

start.addEventListener('click',()=>{
    setInterval(()=>{
        if(seconds === 0){
            seconds=59;
            if(minutes === 0){
                minutes--;
            }
         
        }else{
            seconds--;
        }
        seconds--;
        console.log(seconds);
        console.log(minutes);
        timer.textHTML= `${minutes}:${seconds}`;



    },1000);
});