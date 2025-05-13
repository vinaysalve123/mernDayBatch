let characters = document.querySelector("input");
let data = document.querySelector("form");
const POKE = "https://pokeapi.co/api/v2/pokemon/";

data.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = characters.value.toLowerCase();
    console.log(name);
    
    fetch(POKE+ name)
        .then(res=>{
            if(!res.ok)throw new Error("Pokemon not Found !!");

            return res.json();
        })
        .then(data=>{
            console.log(data);
            document.querySelector("img").src = data.sprites.front_default;
            document.querySelector("img").alt = name;
            
        })
        .catch((error)=>{
            console.log(error);
            document.querySelector("img").src = "";
            alert("Pokemon not found !!!!");
        })

    characters.value = "";
})