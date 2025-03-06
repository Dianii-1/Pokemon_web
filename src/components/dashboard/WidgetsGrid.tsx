"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import {  IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.count.counter);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center gap-2">
      <SimpleWidget
        label="Contador"
        title={String(count)}
        subtitle="Carrito de compras"
        href="/dashboard/menu"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
