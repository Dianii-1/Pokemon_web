import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonState{
    [key:string]:SimplePokemon
}
const initialState:PokemonState = {
'1':{id:'1', name:'bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorites(state, action:PayloadAction<SimplePokemon>){
        const pokemon = action.payload
        const {id} = pokemon

        // se utiliza la doble negacion para combertirlo en boolean
        if(!!state[id]){
            delete state[id]
            return
        }

        state[id] = pokemon
    }
  }
});

export const {toggleFavorites} = pokemonsSlice.actions

export default pokemonsSlice.reducer