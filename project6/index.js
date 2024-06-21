let counter = 0;
const container = document.querySelector(".container");
const timer = document.querySelector(".timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset= document.getElementById("reset");
let intervalID;
const timerFunction = ()=>{
     intervalID = setInterval(() => {
        const hr = Math.floor(counter/3600);
        const min = Math.floor((counter%3600)/60);
        const sec = (counter%3600)%60;
        const hours = String(hr).padStart(2,"0");
        const minutes = String(min).padStart(2,"0");
        const seconds = String(sec).padStart(2,"0");
        timer.innerText = `${hours}:${minutes}:${seconds}`;
        // console.log(`${hours}:${minutes}:${seconds}`);
        counter+=1;
     }, 1000);
}


start.addEventListener("click",()=>{
    timerFunction();
});
stop.addEventListener("click",()=>{
    clearInterval(intervalID);
})
reset.addEventListener("click",()=>{
    counter=0;
    clearInterval(intervalID);
    timer.textContent = "00:00:00";
})