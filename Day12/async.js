// function add(a,b){
//     return a+b;
// }

// console.log(add(92,5));


// const add1 = (a,b)=>{
//     return a+b;
// }

// console.log(add1(35,56));



console.log("Good Morning");
setTimeout(()=>{
    console.log("Good Night");
}, 5000);

const a = setInterval(()=>{
    console.log("Tea Time");
},1000);

setTimeout(()=>{
    clearInterval(a);
    console.log("No tea from now on !!!");
},7000);
console.log("Good Afternoon");