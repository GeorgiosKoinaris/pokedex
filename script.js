let currentPokemon;

const pokemonNumber = 150;

const bg_colors = {
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


async function loadPokemon() {
    // let pokemonName = document.getElementById('inputField').value;

    let url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log(currentPokemon);
    renderPokemonCards(currentPokemon);
}





function renderPokemonCards(currentPokemon) {
    let container = document.getElementById('allPokemon');

    for (let i = 0; i < Math.min(currentPokemon.values.length, 20); i++) {
        const pokemon = currentPokemon[i];

        container.innerHTML = `<div>
             ${pokemon}
    </div>`
    }


}





// function renderPokemonInfo() {
//     document.getElementById('pokemonName').innerHTML = currentPokemon['name'].charAt(0).toUpperCase() + currentPokemon['name'].slice(1); //Name with first character in big letter//
//     document.getElementById('pokemonImage').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
//     document.getElementById('pokemonNumber').innerHTML = '#' + currentPokemon['order'];
//     document.getElementById('pokemonType').innerHTML = currentPokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + currentPokemon['types'][0]['type']['name'].slice(1); //type with first character in big letter//
//     document.getElementById('stat1').innerHTML = currentPokemon['stats'][0]['base_stat'];
//     document.getElementById('stat2').innerHTML = currentPokemon['stats'][1]['base_stat'];
//     document.getElementById('stat3').innerHTML = currentPokemon['stats'][2]['base_stat'];
//     document.getElementById('stat4').innerHTML = currentPokemon['stats'][3]['base_stat'];
//     document.getElementById('stat5').innerHTML = currentPokemon['stats'][4]['base_stat'];
//     document.getElementById('stat6').innerHTML = currentPokemon['stats'][5]['base_stat'];
// }