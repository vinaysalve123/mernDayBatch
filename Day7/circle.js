z = document.getElementById("a");

function color(){
    if(z.style.background === "yellow")z.style.background = "green";
    else if(z.style.background === "blue")z.style.background = "yellow";
    else if(z.style.background === "green")z.style.background = "red";
    else z.style.background = "blue";
}