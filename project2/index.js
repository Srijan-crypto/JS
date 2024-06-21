const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = ()=>{
    let sign = zodiac.value;
    switch (sign) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "tarus":
            body.style.backgroundColor = "blue";
            break;
        case "gemini":
            body.style.backgroundColor = "pink";
            break;
        case "virgo":
            body.style.backgroundColor = "violet";
            break;
        default:
            body.style.backgroundColor = "white";
            break;
    }
}