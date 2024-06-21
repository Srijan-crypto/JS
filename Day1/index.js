// alert("Hello Srijan");

// let a = "Srijan";
// let b = "Sinha";
// console.log("Hey, my name is "+a+" "+b);
// console.log(`Hey, my name is ${a} ${b}`);

// let x = 33;
// let y = "one";
// console.log(x+y);

// let arr = [12,"singh",44,[1,2]];
// console.log(arr);

// normal function :-
// function func(a,b,c){
//     let res = a+b+c;
//     console.log(res);
// }
// func(1,2,3);

// anonymous fucntion :-
// let func = function (a,b,c){
//     let res = (a+b+c);
//     console.log(res);
// }
// func(1,2,3);

// function intro(name,age){
//     console.log(`Hi my name is ${name} and age is ${age}.`)
//     return name;
// }
// let name = intro("Srijan",21);
// console.log(name);

// let arr1 = [1,2,3,4];
// function sum(arr=[]){
//     let sum=0;
//     for(let i=0;i<arr.length;++i) sum+=arr[i];
//     return sum;
// }
// console.log(sum(arr1));


                                                // New LEC (Dom Manipulation)


// console.log(document.body.firstElementChild);
// console.log(document.body.children);
// const arr_ = document.body.children;
// const newArr = Array.from(arr_);
// console.log(newArr);
// for(let i=0;i<newArr.length;++i){
//     console.log(newArr[i]);
// }

// thisId = 12;
// console.log(thisId); OR console.log(document.getElementById("thisId"));
// Both of above do same thing but 2nd one is used to avoid any variable name clash from the current scope!

// console.log(document.getElementsByClassName("thisClass"));
// const xxx = document.getElementsByClassName("thisClass"); // this returns a collection
// console.log(xxx[1]);

// const xxx = document.getElementsByName("email");
// console.log(xxx);
// console.log(xxx[0]);

// const xxx = document.getElementsByTagName("div");
// console.log(xxx);
// console.log(xxx[0]);
// const x = xxx[0];
// x.innerText = "New Text";
// x.style.backgroundColor = "black";
// x.style.color = "white";
// x.innerHTML = "<div class='thisClass'>HHH</div>";
// console.log(x);
// console.log(document.getElementsByClassName("thisClass"));

// const myBtn = document.getElementById("myBtn"); Here we did all styling with the help of only JS
// myBtn.style.backgroundColor = "green";
// myBtn.style.cursor = "pointer";
// myBtn.style.padding = 2;
// myBtn.style.border = "none";

// const btn = document.querySelector("input");
// btn.innerText = "Enter"
// console.log(btn);


// const myBtn = document.getElementById("myBtn");
// myBtn.setAttribute("class","myClass");
// console.log(myBtn.getAttribute("id"));
// console.log(myBtn.getAttribute("class"));
// const c = document.getElementsByClassName("myClass");
// console.log(c);


// const h2 = document.createElement("h2");
// h2.innerText = "h2";
// document.body.append(h2);
// document.body.prepend(h2);


// const but = document.getElementById("myBtn");
// const del = document.querySelectorAll("button")[1];
// but.onclick = addHeading; //When button clicked h2 will be prepended
// del.onclick = deleteHeading; //When this clicked h2 will be removed
// function addHeading(){
//     const h2 = document.createElement("h2");
//     h2.textContent = "yoyo";
//     document.body.prepend(h2);
// }
// function deleteHeading(){
//     const h2 = document.querySelector("h2");
//     h2.remove();
// }

                                        // New LEC (Advanced array functions)

// const arr = [2,4,6,8,10];
// const myFunc = (value,index) => {
//     if(value===8){
//         console.log("8 exists");
//     }
// };
// arr.find(myFunc);

        // OR

// const res = arr.find((value,index)=>{
//     if(value>4){
//         return value;
//     }
// });
// console.log(res);

// const res = arr.filter((value,index)=>{
//     if(value>4){
//         return value;
//     }
// });
// console.log(res);

// const res = arr.every((value,index)=>{
//     return value > 4;
// });
// const res = arr.some((value,index)=>{
//     return value < 8;
// });
// console.log(res);

// for(let value of arr){
//     value+=3;
//     console.log(value);
// }
// console.log(arr); // -----> value of array is unchanged;

//OR

// arr.forEach((value,index)=>{
//     console.log(value);
// })

// Find sum of array
// let sum=0;
// arr.forEach((value,index)=>{
//     sum+=value;
// })
// console.log(sum);

// arr.forEach((value,index)=>{
//     value+=20;
//     console.log(value);
// })
// console.log(arr);

// const res = arr.map((value,index)=>{
//     return value+20;
// })
// console.log(res);
// console.log(arr);

                                        // New LEC (Advanced array functions)

