const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000; //in milliseconds bcz in JS, methods of Date() class return values in milliseconds
const minute = 60*second;
const hour = 60*minute;
const day = 24*hour;

const timerFunction = ()=>{

    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0");
    let mm = String(now.getMonth()+1).padStart(2,"0");
    let yyyy = now.getFullYear();
    const days31 = ["01","03","05","07","08","10","12"];
    const days30 = ["01","03","04","05","06","07","08","09","10","11","12"];

    let enteredDay = prompt("Enter Day").padStart(2,"0");
    while(enteredDay<"01" || enteredDay>"31"){
        alert("Enter valid day");
        enteredDay = prompt("Enter Day").padStart(2,"0");
    }
    let enteredMonth = prompt("Enter Month").padStart(2,"0");
    while(enteredMonth<"01" || enteredMonth>"12" || (enteredDay==="31" && days31.includes(enteredMonth)===false) || (enteredDay==="30" && days30.includes(enteredMonth)===false)){
        alert("Enter valid month");
        enteredMonth = prompt("Enter Month").padStart(2,"0");
    }
    now = `${mm}/${dd}/${yyyy}`;

    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    // console.log(now);
    // console.log(targetDate);
    if(targetDate<now) targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;

    const intervalID = setInterval(() => {
        const enddate = new Date(targetDate).getTime(); //returns value in milliseconds
        const today = new Date().getTime();
        const diff = enddate-today;
        // console.log(enddate);
        // console.log(today);
        // console.log(diff);

        const daysLeft = Math.floor(diff/day);
        const hoursLeft = Math.floor((diff%day)/hour);
        const minutesLeft = Math.floor((diff%hour)/minute);
        const secondsLeft = Math.floor((diff%minute)/second);
        // console.log(`${daysLeft}:${hoursLeft}:${minutesLeft}:${secondsLeft}`);

        daysElement.textContent = daysLeft;
        hoursElement.textContent = hoursLeft;
        minutesElement.textContent = minutesLeft;
        secondsElement.textContent = secondsLeft;

        if(diff<0){
            counterTimer.style.display = "none";
            heading.innerText = "Time's Up!";
            clearInterval(intervalID);
        }
    }, 0);
    
}
timerFunction();