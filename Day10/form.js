let user = document.querySelectorAll("input")[0];
// console.log(user);
let pswd = document.querySelectorAll("input")[1];
// console.log(pswd);

let myData = document.querySelector("form");
// console.log(myData);

myData.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(user.value);
    console.log(pswd.value);

    //Condition satisfied by using "required" attribute
    // if(user.value =="" || pswd.value == ""){
    //     alert("No blank/s Allowed !!");
    // }
    // else{
    //     window.location.href = "welcome.html";
    // }

   if(user.value.trim() == "" || pswd.value.trim() == ""){
        alert("Blank username");
        return;
    }

    if(pswd.value.length < 6){
        event.preventDefault();
        alert("Password is #Weak !!");
    }
    else if(pswd.value.length > 15){
        event.preventDefault();
        alert("Password is Too #BIG !!");
    }
    else{ 
        // window.location.href = "welcome.html";
        window.open("welcome.html", "_blank");
    }
    
})