const pokemonListElement = document.getElementById('pokemons-list');
const loadButton = document.getElementById('btn-load');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButtonModal = document.getElementById('btn-close');
const maxRecords = 151;
const limit = 8;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return ` 
    <li class="pokemon-list-item ${pokemon.type}" data-pokemon-id="${pokemon.number}">
      <span class="pokemon-number">#${pokemon.number}</span>
      <span class="pokemon-name">${pokemon.name}</span>

      <div class="pokemon-details">
        <ul class="pokemon-types-list">
          ${pokemon.types.map(type => `<li class="type-item ${type}">${type}</li>`).join('')}
        </ul>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>
  `
}

function convertPokemonModal(pokemon) {
  return `
    <div class="modal-content">
      <img src="${pokemon.photo}" alt="${pokemon.name}" class="modal-image">
      <span class="modal-pokemon-name">${pokemon.name}</span>
      <span class="modal-pokemon-number">Nº${pokemon.number}</span>
      <div class="modal-details">
        <ul class="type-list">
          ${pokemon.types.map(type => `<li class="type-item ${type}">${type}</li>`).join('')}
        </ul>
        <ul class="pokemon-details-list">
          <li>
            <span class="detail-label">Weight</span>
            <span class="detail-value">${pokemon.weight}</span>
          </li>
          <li>
            <span class="detail-label">Height</span>
            <span class="detail-value">${pokemon.height}</span>
          </li>
          <li>
            <span class="detail-label">Abilities</span>
            <div class="abilities-wrapper">  ${pokemon.abilities.map(ability => `<span class="detail-value">${ability}</span>`).join('')}
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
}

loadPokemonItens(offset, limit);

function loadPokemonItens(offset, limit) {
  pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonListElement.innerHTML += pokemons.map(convertPokemonToLi).join('');
  });
}

function openModal(pokemonId) {

  pokeAPI.getPokemon(pokemonId).then(pokemon => {
    const pokemonDetail = convertPokeApiDetailPokemon(pokemon);
    console.log(pokemonDetail);
    const color = `var(--${pokemonDetail.type})`;
    modal.style.setProperty('--cor-before', color);
    modalContent.innerHTML = convertPokemonModal(pokemonDetail);
    modal.showModal();
  });
}

loadButton.addEventListener('click', () => {
  offset += limit;

  const qtyRecordNextPage = offset + limit;

  if (qtyRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    loadPokemonItens(offset, newLimit);

    loadButton.parentElement.removeChild(loadButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

pokemonListElement.addEventListener('click', (event) => {
  event.stopPropagation();
  if (event.target.classList.contains('pokemon-list-item')) {
    const pokemonId = event.target.dataset.pokemonId;
    openModal(pokemonId);
  }
});

closeButtonModal.addEventListener('click', () => {
  modal.close();
});