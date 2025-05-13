let btn = document.querySelector("button");
let image = document.querySelector("img");
console.log(btn);

// btn.addEventListener("click", ()=>{
//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then(data=> data.json())
//     .then(res=>{
//         console.log(res)
//         image.src = res[0].url;
//     }
        
//     )
// })



async function catty() {
    try{
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();

        // console.log(data);
        image.src = data[0].url;
    }
    catch(error){
        console.log(error);
    }
}

