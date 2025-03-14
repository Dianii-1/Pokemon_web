import { CartCounter } from "@/shopping-cart";

// no se puede colocar un metadata donde tengo un use client
export const metadata = {
 title: 'Shopping cart',
 description: 'Un simple contador',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter/>
    </div>
  );
}
