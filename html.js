function generateInfoCardHtml(i) {
    const pokemon = fetchedPokemons[i];
    const name = pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].slice(1);
    const image = pokemon['sprites']['other']['dream_world']['front_default'];
    const number = '#' + pokemon['id'].toString().padStart(3, '0');
    const id = pokemon['id'].toString();
    const type = pokemon['types'][0]['type']['name'].charAt(0).toUpperCase() + pokemon['types'][0]['type']['name'].slice(1);
    const color = colors[type.toLowerCase()];
    const stat1 = pokemon['stats'][0]['base_stat'];
    const stat2 = pokemon['stats'][1]['base_stat'];
    const stat3 = pokemon['stats'][2]['base_stat'];
    const stat4 = pokemon['stats'][3]['base_stat'];
    const stat5 = pokemon['stats'][4]['base_stat'];
    const stat6 = pokemon['stats'][5]['base_stat'];

    document.getElementById('pokemonInfo').innerHTML = `<div id="pokemonInfoBg" onclick="closePokemonInfo()" class="pokemonInfoBg">
    <div id="pokemonInfo" class="card-style">
        <div id="pokedex" style="background-color: ${color}">
            <div class="d-flex justify-content-between mb-3">
                <div onclick="closePokemonInfo()" class="backArrow"><img src="img/back_arrow.png" alt=""></div>
                <div class="d-flex">
                    <h4>${number}</h4>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <h1>${name}</h1>
                
            </div>
            <div class="infoCardType">${type}</div>
        </div>

        <div class="info-container">
            <div class="jc-center">
                <img class="infoCardImage" src="${image}" alt="${name}-Bild">
            </div>
            <h3 class="margin-top-big justify-content-center d-flex">Base Stats</h3>


            <div class="d-flex flex-column align-items-center">
                <div class="d-flex">
                    <div class="stat">HP</div>
                    <div class="mt-auto font-20">${stat1}</div>
                </div>
                <div class="d-flex">
                    <div class="stat">Attack</div>
                    <div class="mt-auto font-20">${stat2}</div>
                </div>
                <div class="d-flex">
                    <div class="stat">Defense</div>
                    <div class="mt-auto font-20">${stat3}</div>
                </div>
                <div class="d-flex">
                    <div class="stat">Special Attack</div>
                    <div class="mt-auto font-20">${stat4}</div>
                </div>
                <div class="d-flex">
                    <div class="stat">Special Defense</div>
                    <div class="mt-auto font-20">${stat5}</div>
                </div>
                <div class="d-flex">
                    <div class="stat">Speed</div>
                    <div class="mt-auto font-20">${stat6}</div>
                </div>

            </div>
        </div>
    </div>
</div>`
}