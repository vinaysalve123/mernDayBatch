// console.log("Hello");

let z = Math.floor(Math.random()*10);
// console.log(z);

let btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    // console.log(z);
    let otp = "";
    for(let i=0;i<6;i++){
        otp += Math.floor(Math.random()*10);
    }

    document.getElementById("sp").textContent = otp;
})