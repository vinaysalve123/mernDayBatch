let myName = "Vinay"
let age = 23, city = "Pune"
// let city = "Pune"

console.log("My name is : " + myName + ", my age is : " + age + ". I live in " + city + ".");
console.log(`My name is : ${myName}, my age is : ${age}. I live in ${city}.`); 

console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")
console.log("")


for(let i=1;i<=5;i++)console.log(`This line is : ${i}`);

// for(let i=1;i<=10;i++)console.log(`2 * ${i} = ${2*i}`); console.log(" ");
// for(let i=1;i<=10;i++)console.log(`3 * ${i} = ${3*i}`); console.log(" ");
// for(let i=1;i<=10;i++)console.log(`4 * ${i} = ${4*i}`); console.log(" ");
// for(let i=1;i<=10;i++)console.log(`5 * ${i} = ${5*i}`); console.log(" ");

for(let i=2;i<=5;i++){
    for(let j=1;j<=10;j++)console.log(`${i} * ${j} = ${i*j}`); 
    console.log(" ");
}


speed = 40;

while(speed <50){
    speed += 4;
}
console.log(speed);