const baseUrl = "https://swapi.dev/api";
const movieInput = document.getElementById('movieId');
const characters = document.getElementById("characters");
const planets = document.getElementById("planets");

const getCharacters = ()=>{
    characters.innerHTML = "loading..."
    axios
        .get(`${baseUrl}/films/2/`)
        .then((response) => {
            const listElems = response.map((item) => `
                <div class="characters">
                <h3>${item.name}</h3>
                <p>Gender: ${item.gender}</p>
                <p>Birth year:${item.birth_year}</p>
                </div>`   
        );
        characters.innerHTML = listElems.join("")
    })  
    .catch((err) => {
        console.log("Error:", err)
        characters.innerHTML = "Error occured :("
    }
    )
}

const getPlanets = () => {
    axios
        .get(`${baseUrl}/planets/`)
        .then((response) =>{
            const listPlanetName = response.map(item => `
            <div class='character'>
                <h3> ${item.name}</h3>
            </div>
        `);
            planets.innerHTML = listPlanetName.join("")
        })
        .catch((err) => {
            console.log("Error:", err)
            list.innerHTML = "Error occured :("
        })
}

document.addEventListener('click', (event) => {
    if (event.target.id === 'getCharacters') {
        getCharacters();
    } else if (event.target.id === 'getPlanets') {
        getPlanets();
    }
});