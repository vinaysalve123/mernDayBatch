let a = "hello";
// console.log(A);
console.log(a);

let p = new Promise((resolve,reject) =>{
    resolve("Kaam Ho Gaya");
    reject("Kaam nahi hua");
})

p.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error("The problem is : " + error);
})



let myCalculation =  new Promise((resolve, reject)=>{
    let a = 2;
    let b = 2;
    if((a+b) === 4){
        resolve("Matched with 4");
    }
    else{
        reject("Didn't matched with 4");
    }
});

myCalculation.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
})
