import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Pokémons',
 description: 'Pagina en donde se encuentran los primeros 151 pokémons',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!, // codigo para tomar la penultima posicion
    name: pokemon.name,
  }));

  // throw new Error('esto no deberia sucedor');

  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl text-center">Listado de Pokemons</h1>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
