import { PokemonGrid} from "@/pokemons";


export const metadata = {
 title: 'Favoritos',
 description: 'Pagina en donde se encuentran los primeros 151 pokémons',
};

export default async function FavoritePage() {

  return (
    <div className="flex flex-col">
      <h1 className="text-6xl text-center">Pokemons favoritos</h1>
      <PokemonGrid pokemons={[]}/>
    </div>
  );
}