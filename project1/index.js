const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

const getText = (n)=>{
    let text="";
    let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;++i){
        let word = "";
        let len_of_word = Number((Math.random()*15).toFixed(0));
        len_of_word+=1;  //to avoid 0 length words
        for(let j=0;j<len_of_word;++j){
            let index = (Math.random()*25).toFixed(0);
            word+=letters[index];
        }
        text+=word;
        text+=" ";
    }
    return text;
}

const generatePara = ()=>{
    let numOfWords=Number(input.value);
    const text = getText(numOfWords);
    const para = document.createElement("p");
    para.setAttribute("class","paras");
    para.innerText = text;
    container.append(para);
}

const button = document.querySelector("button");
button.onclick = generatePara;