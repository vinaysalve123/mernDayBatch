age = 18;
if(age < 18){
    console.log("Age less than 18, so cannot VOTE !!!");
}
else{
    console.log("You can vote. So please VOTE !!!");
}

a = document.getElementById("gfg");
function abc(){
    if(a.textContent === "I am Studying MERN Full Stack"){
        a.textContent = "I am in GFG Batch";
    }
    else{
        a.textContent = "I am Studying MERN Full Stack";
    }   
}