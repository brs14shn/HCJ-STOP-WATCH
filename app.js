
let minutes=00;
let seconds=00;
let milliseconds=00;
let interval;

const minutesSpan=document.getElementById("minutes");
const secondsSpan=document.getElementById("seconds");
const millisecondsSpan=document.getElementById("milliseconds");

const startBtn=document.querySelector(".start");
const stopBtn=document.querySelector(".stop");
const resetBtn=document.querySelector(".reset");

const startTimer=()=>{
    clearInterval(interval);
    interval=setInterval(startWatch,10)
}
const stopTimer=()=>{
    clearInterval(interval);  
}

const resetTimer=()=>{
    miliseconds=0;
    seconds=0;
    minutes=0;
    minutesSpan.innerHTML="00"
    secondsSpan.innerHTML="00";
    millisecondsSpan.innerHTML="00";
}

function startWatch(){
    milliseconds++;
    if(milliseconds<9){
        millisecondsSpan.innerHTML=`0${milliseconds}`
    }else if(milliseconds>99){
        milliseconds=0;
        millisecondsSpan.innerHTML="00";
    }

}
