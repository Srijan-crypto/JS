// Initializing all elements constants
const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "Allahabad"; //default location

const fetchData = async (target)=>{  // Function to fetch Data from Weather API
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=ccbe808825c6488093a65907240706&q=${target}`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        // Destructuring
        // const {
        //     current: {
        //       temp_c,
        //       condition: { text, icon },
        //     },
        //     location: { name, localtime },
        // } = data;
        updateDom(data);
    } catch (error) {
        alert("Location not found");
    }
}

function updateDom(data){
    temperatureField.innerText = `${data.current.temp_c}°`;
    cityField.innerText = data.location.name;
    emojiField.src = data.current.condition.icon;
    weatherField.innerText = data.current.condition.text;

    const daydate = data.location.localtime;
    const exactTime = daydate.split(" ")[1];
    const exactDate = daydate.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();

    dateField.innerText = `${exactTime} ${getFullDay(exactDay)} ${exactDate}`;
}

function getFullDay(num){ // Function to get the name of day
    switch (num) {
        case 0: 
            return "Sunday";
        case 1: 
            return "Monday";
        case 2: 
            return "Tuesday";
        case 3: 
            return "Wednesday";
        case 4: 
            return "Thursday";
        case 5: 
            return "Friday";
        case 6: 
            return "Saturday";
        default:
            return "Don't Know";
    }
}

fetchData(target);

// Adding event listen to the form and updating target value and calling fetchData()
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
})


// if you want to show weather of your current location !!!

// var x=document.getElementById("demo");
// function getLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition,showError);
//     }
//     else{
//         x.innerHTML="Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position){
//     lat=position.coords.latitude;
//     lon=position.coords.longitude;
//     displayLocation(lat,lon);
// }

// function showError(error){
//     switch(error.code){
//         case error.PERMISSION_DENIED:
//             x.innerHTML="User denied the request for Geolocation."
//         break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML="Location information is unavailable."
//         break;
//         case error.TIMEOUT:
//             x.innerHTML="The request to get user location timed out."
//         break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML="An unknown error occurred."
//         break;
//     }
// }

// function displayLocation(latitude,longitude){
//     var geocoder;
//     geocoder = new google.maps.Geocoder();
//     var latlng = new google.maps.LatLng(latitude, longitude);

//     geocoder.geocode(
//         {'latLng': latlng}, 
//         function(results, status) {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 if (results[0]) {
//                     var add= results[0].formatted_address ;
//                     var  value=add.split(",");

//                     count=value.length;
//                     country=value[count-1];
//                     state=value[count-2];
//                     city=value[count-3];
//                     x.innerHTML = "city name is: " + city;
//                 }
//                 else  {
//                     x.innerHTML = "address not found";
//                 }
//             }
//             else {
//                 x.innerHTML = "Geocoder failed due to: " + status;
//             }
//         }
//     );
// }