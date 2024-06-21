const name = document.getElementById("name");
const tagDiv = document.querySelector(".tags");

const addName = ()=>{
    if(name.value===""){
        return null;
    }

    const tag = document.createElement("div");
    tag.innerText = `Hey, I am ${name.value}`;
    tag.setAttribute("class","tag_css");
    tagDiv.append(tag);
};