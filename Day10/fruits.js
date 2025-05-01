const fruits = ["🍎", "🥭", "🍇","🍇","🥭","🍎","🥭","🍎","🍎","🍎","🍇"];

let div1 = document.getElementById("a");
let div2 = document.getElementById("b");
let div3 = document.getElementById("c");

for(let fruit of fruits){
    if(fruit === "🍎")div1.textContent += "🍎";
    if(fruit === "🥭")div2.textContent += "🥭";
    if(fruit === "🍇")div3.textContent += "🍇";
}


// let a =20, b=30;

// a = a^b;
// b=  a^b;
// a=  a^b;

// [a,b] = [b,a]


// console.log(a);
// console.log(b);

// for(let i=1;i<=100;i++){
//     if(i%2 == 0)console.log(i);
// }



let a =20, b=30;

console.log(`The value of a before swapping is : ${a}`);
console.log(`The value of b before swapping is : ${b} `);

// let temp = a;
// a = b;
// b = temp;

// a = a + b;
// b = a - b;
// a = a - b;

[a, b] = [b, a];


console.log( `The value of a after swapping is : ${a}`);
console.log(`The value of b after swapping is : ${b}`);


