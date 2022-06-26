
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
const btn=document.querySelector(".buttons");

const startTimer=()=>{
   
    clearInterval(interval);
    interval=setInterval(startWatch,10)
}
const stopTimer=()=>{
 
    clearInterval(interval);  
}

const resetTimer=()=>{
   
    milliseconds=0;
    seconds=0;
    minutes=0;
    minutesSpan.innerHTML="00"
    secondsSpan.innerHTML="00";
    millisecondsSpan.innerHTML="00";
}

function startWatch(){
    //* ===Milliseconds========
    milliseconds++;
    if(milliseconds<9){
        millisecondsSpan.innerHTML=`0${milliseconds}`
    }else if(milliseconds>99){
        milliseconds=0;
        millisecondsSpan.innerHTML="00";
        seconds++;
    }else{
    millisecondsSpan.innerHTML=milliseconds;
    }
    //* =======Seconds==========*
    if(seconds<10){
        secondsSpan.innerHTML=`0${seconds}`;
    }else if(seconds>59){
        minutes++;
        seconds=0;
        secondsSpan.innerHTML="00";
    }else{
        secondsSpan.innerHTML=seconds;
    }
    //*=========minutes===========*
    if(minutes<10){
       minutesSpan.innerHTML=`0${minutes}`;
    }else if(minutes>59){
       
       minutes=0;
       minutesSpan.innerHTML=minutes; //? Change
    }else{
       minutesSpan.innerHTML=minutes;
    }

}

btn.addEventListener("click",(e)=>{
   if(e.target.classList.contains("start")){
    startTimer()
   }else if(e.target.classList.contains("stop")){
    stopTimer()
   }else{
    resetTimer()
   }
})
// startBtn.addEventListener("click",startTimer);
// stopBtn.addEventListener("click",stopTimer);
// resetBtn.addEventListener("click",resetTimer);

