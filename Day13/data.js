const heroes = [
    {
        name: "Shahrukh",
        age: 59,
        weigth: 75,
        hobbies: ["acting","coffee","Flirting"]
    },
    {
        name: "Salman",
        age: 60,
        weigth: 85,
        hobbies: ["Driving","Shooting","Painting"]
    },
    {
        name: "Saif",
        age: 56,
        weigth: 70,
        hobbies: ["acting","Business","Investor"]
    }
]
document.querySelector("span").textContent = heroes[1].name;
document.querySelectorAll("span")[1].textContent = heroes[1].hobbies[0];
// console.log(typeof heroes);
// console.log(heroes);