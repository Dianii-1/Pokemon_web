//rxslice para crear la funcion
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState{
    counter:number
    isInicial:boolean
}
const initialState:CounterState = {
counter:5,
isInicial:false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // aca se colocan todas las acciones que necesitamos

    initCounterState (state, accion:PayloadAction<number>) {
      if(state.isInicial) return;

      state.counter = accion.payload
      state.isInicial=true
    },

    addOne (state) {
        state.counter ++;
    },

    substractOne (state) {
        if(state.counter === 0) return;
        state.counter --;
    },

    resetCount(state, accion :PayloadAction<number>){
        if(accion.payload < 0) accion.payload = 0

        state.counter = accion.payload
    }
  }
});

// todas las acciones hay que exportarlas
export const {addOne,resetCount,substractOne, initCounterState} = counterSlice.actions

export default counterSlice.reducer