let currentPokemon;

const pokemonNumber = 151;

const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};


async function initPokemon() {
    for (let i = 1; i <= pokemonNumber; i++) {
        await loadPokemon(i)
    }
}


async function loadPokemon(id) {
    // let pokemonName = document.getElementById('inputField').value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log(currentPokemon);
    renderPokemonCards(currentPokemon);
}

function renderPokemonCards(pokemon) {
    const name = pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].slice(1);
    const image = pokemon['sprites']['other']['dream_world']['front_default'];
    const number = pokemon['id'].toString().padStart(3, '0');
    const id = pokemon['id'].toString();
    const type = pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
    const color = colors[type.toLowerCase()];

    let container = document.getElementById('allPokemon');

    container.innerHTML += `<div id="pokeBox${id}" class="pokeBox" onclick="showPokemon(${pokemon})">
        <h5>${name}</h5>
        <img src="${image}">
        <div style="background-color: rgba(255, 255, 255, 0.5); border-radius: 5px"><b>${type}</b></div>
        <div><b>#${number}</b></div>
         </div>`;

    document.getElementById('pokeBox' + id).style.backgroundColor = `${color}`;
}



// function renderPokemonInfo(pokemon) {
//     document.getElementById('pokemonName').innerHTML = pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].slice(1); //Name with first character in big letter//
//     document.getElementById('pokemonImage').src = pokemon['sprites']['other']['dream_world']['front_default'];
//     document.getElementById('pokemonNumber').innerHTML = '#' + pokemon.id.toString().padStart(3, '0');
//     document.getElementById('pokemonType').innerHTML = pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + pokemon['types'][0]['type']['name'].slice(1); //type with first character in big letter//
//     document.getElementById('stat1').innerHTML = pokemon['stats'][0]['base_stat'];
//     document.getElementById('stat2').innerHTML = pokemon['stats'][1]['base_stat'];
//     document.getElementById('stat3').innerHTML = pokemon['stats'][2]['base_stat'];
//     document.getElementById('stat4').innerHTML = pokemon['stats'][3]['base_stat'];
//     document.getElementById('stat5').innerHTML = pokemon['stats'][4]['base_stat'];
//     document.getElementById('stat6').innerHTML = pokemon['stats'][5]['base_stat'];
// }