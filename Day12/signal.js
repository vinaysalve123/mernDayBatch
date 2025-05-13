let lights = document.querySelectorAll(".light");
console.log(lights);

let currLight = 0;

lights[currLight].classList.add("active");

//Interval to change light after 3 seconds
setInterval(()=>{
    changeLight();
},3000);


//Function to change lights
const changeLight = ()=>{
    lights[currLight].classList.remove("active");
    currLight++;

    if(currLight>2)currLight = 0;

    lights[currLight].classList.add("active");
}

