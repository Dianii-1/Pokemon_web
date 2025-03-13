'use client'
import { PokemonGrid } from "@/pokemons"
import { useAppSelector } from "@/store"

export const FavoritePokemons = () => {
    const favoritesPokemons = useAppSelector(state => state.pokemons)

    const listfavorites = Object.values(favoritesPokemons)

  return (
    <div>
        <PokemonGrid pokemons={listfavorites }/>
    </div>
  )
}

