import { WidgetsGrid } from "@/components";



export const metadata = {
 title: 'Admin dashboard',
 description: 'Admin dashboard',
};

export default function MenuPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <WidgetsGrid/>
    </div>
  );
}