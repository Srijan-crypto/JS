                                        // LEC - Event Listeners

// const heading = document.getElementById("heading");
// const btn = document.getElementById("myBtn");
// const box1 = document.getElementById("box1");
// const input = document.querySelector("input");
// btn.addEventListener("click",()=>{
//     console.log("clicked");
//     box1.style.backgroundColor = "red";
//     box1.style.padding = "30px";
//     box1.style.color = "white";
// })

// btn.addEventListener("click",()=>{
//     box1.setAttribute("class","classfordiv");
//     // OR
//     // box1.classList.add("classfordiv");
// })
// btn.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// })

// box1.addEventListener("mouseover",()=>{
//     btn.style.transform = "scale(1.1)";
//     heading.style.backgroundColor = "pink";
// })
// box1.addEventListener("mouseout",()=>{
//     btn.style.transform = "";
//     heading.style.backgroundColor = "";
// })
// box1.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor = "rgb(50,50,50)";
// })
// box1.addEventListener("click",()=>{
//     document.body.style.backgroundColor = "white";
// })

// addEventListener("contextmenu",(e)=>{  // body par right click krne pr jo menu khulta hai by default wo ni khulega isse!
//     e.preventDefault();
//     btn.style.filter = "blur(10px)"
// })

// addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

// input.addEventListener("change",()=>{
//     console.log(input.value);
// })

// btn.addEventListener("contextmenu",()=>{
//     box1.removeEventListener("mouseover",func1);
// })

                                        // LEC - Session and Local Storage

// const input = document.querySelector("input");
// const button = document.getElementById("click");
// const deleteBtn = document.getElementById("delete");

// button.addEventListener("click",()=>{
//     // alert(input.value);
//     sessionStorage.setItem("key1",input.value);
// })
// deleteBtn.addEventListener("click",()=>{
//     sessionStorage.removeItem("key1");
// })

// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"));
// }


// button.addEventListener("click",()=>{
//     // alert(input.value);
//     localStorage.setItem("key1",input.value);
// })
// deleteBtn.addEventListener("click",()=>{
//     localStorage.removeItem("key1");
// })

// if(localStorage.getItem("key1")){
//     alert(localStorage.getItem("key1"));
// }

                                        // LEC - setTimeOut() and setInterval()

// setTimeout(() => {
//     console.log(10);
// }, 2000); // log 10 after 3sec

// const printName = (name)=>{
//     console.log(`Name is ${name}.`)
// }
// const timer = setTimeout(printName, 3000, "Srijan");

// setTimeout(() => {
//     console.log(20);
// }, 4000);

// const btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     clearTimeout(timer);
// })


// const id = setInterval(() => {
//     console.log((Math.random()*100).toFixed(0));
// }, 2000);
// const btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     clearInterval(id);
// })

// setInterval(()=>{
//     console.log(new Date(Date.now()));
// },2000);


                                        // LEC - OOPS in JS

// let a = 10;
// let b = a;    // here a is paased by value to b
// console.log(a);
// console.log(b);
// a=20;          
// console.log(a);
// console.log(b);
//primitive data types are passed by value

// let a = {
//     name:"Abhi",
//     surname:"Singh",
// };
// let b = a;   // here a is passed by reference to b i.e here both a and b point to same address
// console.log(a);
// console.log(b);
// a.name = "Changed";
// console.log(a);
// console.log(b);
// b.name = "Srijan";
// console.log(a);
// console.log(b);
// reference data types are passed by reference

//How to contruct objects
// M1
// function wweSuperstars(w,h,quote){ //this is a factory function
//     return {
//         weight: w,
//         height: h,
//         quote: ()=>{
//             console.log(quote);
//         },
//     }
// }

// const romanreigns = wweSuperstars(225,180,"Head of the table");
// const sethrollins = wweSuperstars(205,165,"Burn it down");
// console.log(romanreigns);
// console.log(sethrollins);

//M2 - Constructor function
// function Star(w,h){  //this is a constructor function
//     this.weight = w;
//     this.height = h;
// }
// const romanreigns = new Star(225,185);
// console.log(romanreigns);
// romanreigns.quote = "Head of the table";
// console.log(romanreigns);
// console.log(romanreigns.constructor);

// const arr = new Array(20,30);
// arr.sample = "BOII";
// console.log(arr);
// console.log(arr.constructor);

// function Enemy(speed,skill){
//     this.speed = speed;
//     this.skill = skill;
// }
// const enemies = [];
// for(let i=0;i<100;++i){
//     enemies.push(new Enemy((Math.random()*100).toFixed(0),(Math.random()*100).toFixed(0)));
// }
// console.log(enemies);
// const e1 = new Enemy(10,20);
// const e2 = e1;  //will be passed by reference
// console.log(e1);
// console.log(e2);
// e2.speed = 22; //speed changed for both e1 and e2
// console.log(e1);
// console.log(e2);


// const arr = [1,2,3,4];
// const newArr = new Array(...arr,1,2); //OR const newArr = [...arr, 1, 2];
// //in this way a new array will be created rather than just creating a reference
// console.log(newArr);


// function Enemy(speed,skill){
//     this.speed = speed;
//     this.skill = skill;
// }
// const e1 = new Enemy(10,20);
// const e2 = {...e1, added: true};   // OR const e2 = new Object({...e1, added: true});
// console.log(e1);
// console.log(e2);
// e2.speed = 12;
// console.log(e1);
// console.log(e2);
// //thus both the objects are free of each other