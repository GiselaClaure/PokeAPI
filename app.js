const display=document.querySelector(".display");

const getPokemon = async () => {
    const pokemonData = []
    for (let i = 1; i <=151; i++) {
        const result=await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonToJson= await result.json();

        pokemonData.push(pokemonToJson)
    }
    console.log(pokemonData); 
    
    const pokemons = pokemonData.map((element,image) => ({
        name: element.name,
        image: element.sprites.other["official-artwork"]["front_default"],
        id: element.id,
      }
      ));
    displayPokemon(pokemons);
}

const displayPokemon=(pokemons)=>{
    const characterHTML=pokemons.map((pokemon)=>
        `<div class="display__element">
            <h2 class="display__name">${pokemon.name}</h2>
            <img class="display__image" src="${pokemon.image}" alt="${pokemon.name}"/>
            <p class= "display__id">${pokemon.id}</p>
        </div>`
    ).join("");
    display.innerHTML=characterHTML
    
};

getPokemon();