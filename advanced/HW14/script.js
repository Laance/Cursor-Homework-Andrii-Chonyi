const baseUrl = "https://swapi.dev/api";

const movieInput = document.getElementById('movieId');
const characters = document.getElementById("charactersBox");
const planets = document.getElementById("planetBox");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 1;

const getCharacters = (part) => {
    characters.innerHTML = "loading...";
    axios
    .get(`${baseUrl}/films/${part}`)
    .then((response) => {
        let list = "";
        let listElems = response.data.characters;
        listElems.forEach(item => {
            axios
            .get(`${item}`)
            .then((response) => {
                Object.values(response).forEach((data) => {
                    if(data.name !== undefined){
                        list += `
                        <div class="characters">  
                            <h3>${data.name}</h3>
                            <p>Date of birth: ${data.birth_year}</p>
                            <p>Gender: ${data.gender}</p>
                        </div>
                        `
                    }
                });
                characters.innerHTML = list;
            })
        });
    })
    .catch((err) => {
        console.log("Error:", err);
        characters.innerHTML = "Error occured ";
    });
};
const getPlanets = () => {
    planets.innerHTML="loading...";
    axios
        .get(`${baseUrl}/planets/?page=${currentPage}`)
        .then((response) =>{
            const listElems = response.data.results.map((item) => `
                <div class ="characters">
                <h3> ${item.name}</h3>
                </div>`
            );
            planets.innerHTML = listElems.join("")
        })
        .catch((err) => {
            console.log("Error:", err)
            planets.innerHTML = "Error occured :("
        })
}

nextBtn.addEventListener("click", () => {
    if(currentPage === 6) return;
    currentPage += 1;
    getPlanets();
});
prevBtn.addEventListener("click", () => {
    if(currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
});

document.addEventListener('click', (event) => {
    if (event.target.id === 'getCharacters') {
        getCharacters(movieInput.value);
    } else if (event.target.id === 'getPlanets') {
        getPlanets();
    }
});