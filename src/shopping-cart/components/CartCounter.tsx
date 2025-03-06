"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

// siempre las cosas que tengan que ver con redux se manejan del lado del cliente, entonces toca ubicar los que necesitemos 
//en un componente de useClient

interface CounterResponse {
  counter: number;
  method:  string;
}

const getApiCounter = async () :Promise<CounterResponse>=>{
  const data = await fetch('/api/counter').then(response => response.json())
  return data;
}

export const CartCounter = () => {

  // se trae el count desde el estado
  const count = useAppSelector(state => state.count.counter)
  // se trae el dispatch para poder acceder a las acciones
  const dispatch = useAppDispatch()

  useEffect(()=>{
    getApiCounter().then(({counter})=> dispatch(initCounterState(counter)) )
  },[dispatch])

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-2">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() =>dispatch(addOne())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
