                                // LEC - Callback fucntion and Callback Hell

// function f(a,b,c){ //here f is a high order function
//     const result = a+b;
//     c(result);
// }
// function displaySum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }
// f(10,20,displaySum); //here displaySum is a callback function as it is passed as argument.
// f(100,230,alert); //here alert is a callback function

// const arr = [1,2,3];
// arr.forEach(()=>{ //here forEach is high order function and arrow function is callback function

// });


// const arr = [1,2,3,4,5,6];
// function calculate(arr=[],callback){
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback(arr[i]));
//     }
//     return newArr;
// }
// function multiply(a){
//     return a*10;
// }
// function divide(a){
//     return a/10;
// }
// console.log(calculate(arr,multiply));
// console.log(calculate(arr,divide));

// const arr = [1,2,3,4,5,6];
// function calculate(arr=[],callback){
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(callback(arr[i]));
//     }
//     return newArr;
// }
// // console.log(calculate(arr,(a)=>{
// //     return a*10;
// // }));
// // console.log(calculate(arr,(a)=>{
// //     return a/10;
// // }));

// //OR
// console.log(calculate(arr,(a)=>a*10));
// console.log(calculate(arr,(a)=>a/10));
// console.log(calculate(arr,(a)=>a+10));


// const gameList = [];
// const game = {};

// const fetchData = (displayData)=>{
//     setTimeout((displayData) => {
//         gameList.push(
//         {
//             name:"game1",
//             id:"qweqwewe",
//         },
//         {
//             name:"game2",
//             id:"wwcvxvve",
//         },
//         {
//             name:"game3",
//             id:"zcdvcbvnm",
//         });
//         console.log("consolelog after fetching");

//         setTimeout((displayData) => {
//             game.name = "game4";
//             game.id = "dsfhhdfjk";
//             gameList.push(game);
//             displayData();
//         }, 2000,displayData);

//     }, 4000, displayData);
// };

// const displayData = ()=>{
//     setTimeout(() => {
//         for (let i = 0; i < gameList.length; i++) {
//             const p = document.createElement("p");
//             p.innerText = gameList[i].name;
//             document.body.append(p);
//         }
//         console.log("Consolelog after displaying");
//     }, 1000);
// };

// fetchData(displayData); //here displayData is a callback function
// //the above type of nesting is called Callback Hell where the code gets very messy
// //if fetchData fucntion malfucntions then whole code disrupts, in this type of situations we use Promises.


                                    // LEC - Promises

// const a = new Promise((resolve,reject)=>{
//     // resolve("Promise resolved");
//     reject("Some error");
// })

// a.then((parameter)=>{ // a.then(onfulfilled callback fucntion, onrejected callback fucntion); but this is not good practice
//     console.log(parameter);
// },(error)=>{
//     console.log(error);
// });
// //OR
// a.then((param)=>{
//     console.log(param);
// }).catch((error)=>{
//     console.log(error);
// });


// const a = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success) resolve("Promise fulfilled");
//     else reject("Some Error");
// })
// a.then((param)=>{
//     console.log(param);
// }).catch((error)=>{
//     console.log(error);
// })


// const arr = [];
// const fetchData = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             arr.push({name:"Srijan"});
//             if(arr.length>0) resolve("Data Fetched");
//             else reject("Some Technical Error");
//         }, 2000);
//     })
// }
// fetchData()
//     .then((message)=>console.log(message))
//     .catch((message)=>console.log(message))
//     .finally(()=>console.log("Will work either way"))
//     .then(()=>console.log(1))
//     .then(()=>console.log(2))
//     .then(()=>console.log(3))