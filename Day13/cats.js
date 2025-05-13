let btn = document.querySelector("button");
let image = document.querySelector("img");
console.log(btn);

btn.addEventListener("click", ()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(data=> data.json())
    .then(res=>{
        console.log(res)
        image.src = res[0].url;
    }
        
    )
})

