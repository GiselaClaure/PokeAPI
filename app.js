const display=document.querySelector(".display");
const getPokemon= async()=>{
    const result=await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=150`);
    
    const pokemonData= await result.json();
    
    console.log(pokemonData);
    
    const pokemons = pokemonData.results.map((element,image) => ({
        name: element.name,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image+1}.png`
      }
      ));
    
    displayPokemon(pokemons);
}

const displayPokemon=(pokemons)=>{
    const characterHTML=pokemons.map((pokemon)=>
        `<div class="display__element">
            <h2 class="display__name">${pokemon.name}</h2>
            <img class="display__image" src="${pokemon.image}" alt="${pokemon.name}"/>
        </div>`
    ).join("");
    display.innerHTML=characterHTML
    
};

getPokemon();