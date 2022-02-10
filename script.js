const pokemonFrame = document.querySelector('.pokemon-frame');
const btn = document.querySelector('.random-button');

const randomId = () => {
  const generatedId = Math.floor(Math.random() * 898) + 1;
  return generatedId;
}

const fetchData = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
}

const pokemonImage = async () => {
  const id = randomId();
  console.log(id);
  const data = await fetchData(id);

  const image = document.createElement('img');
  image.className = 'pokemon-image';
  image.src = data.sprites.other['official-artwork'].front_default;

  if(pokemonFrame.firstChild) pokemonFrame.firstChild.remove();
  pokemonFrame.appendChild(image);
}

btn.addEventListener('click', pokemonImage);
