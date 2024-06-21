                                        // LEC - JSON and FetchAPI

// const url = "https://catfact.ninja/fact";
// console.log("a");
// const fetchData = ()=>{
//     fetch(url).then((response)=>{
//         console.log("then 1");
//         // console.log(response);
//         return response.json();
//     }).then((data)=>{
//         console.log("then 2");
//         console.log(data);
//     })
// }
// fetchData();
// console.log("z");

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = ()=>{
//     fetch(url)
//         .then((response)=> response.json())
//         // .then((data)=> console.log(data))
//         .then((data) => h1.innerText=data.fact)
//         .catch((e)=>console.log(e))
//         .finally(()=>console.log("All Done"));
// }
// fetchData();


                                        // LEC - Async Await & TryCatch

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = async ()=>{    // same thing as above but using async await
//     const response = await fetch(url);
//     const data = await response.json();
//     h1.innerText = data.fact;
// }
// fetchData();


// console.log("a");
// setTimeout(() => {
//     console.log("timeout");
// }, 0);
// Promise.resolve().then(()=>console.log("Promise"));
// console.log("z");


// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// console.log("a");
// const fetchData = async ()=>{
//     console.log("f1");
//     const response = await fetch(url); //await blocks rest of the function till it gets its response, meanwhile lines outside the function continue executing
//     console.log("f2");
//     const data = await response.json();
//     console.log("f3");
//     h1.innerText = data.fact;
//     console.log("f4");
// }
// fetchData();
// console.log("z1");
// console.log("z2");

// const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = async ()=>{
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         h1.innerText = data.fact;
//     } catch (e) {
//         console.log(e);
//     }
// }
// fetchData();

// const fetchData2 = async ()=>{
//     try {
//         //after throw the code in try block is unreachable!
//         throw new Error("meri marzi waaala error"); // better practice
//         // throw "meri marzi waala error";
//         const response = await fetch(url);
//         const data = await response.json();
//         // throw "meri marzi waala error";
//     } catch (e) {
//         // e.name = "hehe";
//         console.log(e);
//         //console.log(e.message);
//     }
// }
// fetchData2();

                                        // LEC - BOM in JS

// navigator.geolocation.getCurrentPosition((d)=>console.log(d),(e)=>console.log(e));

// console.log(history);
// const back = () => history.back(); // visits previous page
// const forward = () => history.forward(); // visits next page

// location.reload();
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.href);
// // const func = ()=>location.reload(); //when func called the page will be reloaded!
// // const func = ()=>location.assign("https://youtube.com"); //when func called this url will be opened on top of the previous page! => back option available and the url is opened in new document
// const func = ()=>location.replace("https://youtube.com"); //when func called this url will be opened on the same page! => no back option available & this url replaces our current page