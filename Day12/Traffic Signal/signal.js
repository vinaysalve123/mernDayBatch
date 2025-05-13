let lights = document.querySelectorAll(".light");
let timer = document.querySelectorAll(".timer");
// console.log(timer);
// console.log(lights);

let currLight = 0;
let countDown = 10;

timer[currLight].textContent = countDown;
lights[currLight].classList.add("active");

//Interval to change light after 3 seconds
setInterval(()=>{
    countDown--;
    updateTimer(); //Show the timer

    if(countDown < 0){
        countDown = 10;
        changeLight();
    }
    
},1000);

//Function to show the timer
const updateTimer = ()=>{
    timer[currLight].textContent = countDown;
}

//Function to change lights
const changeLight = ()=>{
    timer[currLight].textContent = "";
    lights[currLight].classList.remove("active");
    
    currLight++;
    if(currLight>2)currLight = 0;

    lights[currLight].classList.add("active");
    timer[currLight].textContent = countDown;
}

