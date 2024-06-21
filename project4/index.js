const container = document.querySelector(".container");
const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");


const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
showAllTasks();

function showAllTasks(){

    tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");

        const innerdiv = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = value.title;
        innerdiv.append(p);
        const span = document.createElement("span");
        span.innerText = value.description;
        innerdiv.append(span);

        div.append(innerdiv);
        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");
        btn.innerText = "-";
        btn.addEventListener("click",()=>{
            clearScreen();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAllTasks();
        })
        div.append(btn);

        container.append(div);
    })
    
}

function clearScreen(){

    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
    
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // tasks = [];
    clearScreen();

    tasks.push({
        title:title.value,
        description:description.value,
    });
    // console.log(tasks);

    localStorage.setItem("tasks",JSON.stringify(tasks)); // taaki page refresh krne par memory se delete na ho jaye

    showAllTasks();
})