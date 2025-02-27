import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoDiscSharp, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";


const menuItems = [
    {
        path:'/dashboard/menu',
        title:'Dashboard',
        subtitle:'Visualización',
        icon:<IoBrowsersOutline size={32}/>
    },
    {
        path:'/dashboard/counter',
        title:'Contador',
        subtitle:'Contador client side',
        icon:<IoCalculator size={32}/>
    },
    {
      path:'/dashboard/pokemons',
      title:'Pokemons',
      subtitle:'Generación estática',
      icon:<IoDiscSharp size={32}/>
  }
]
export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "300px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-auto"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Diana Pinilla</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map(item=>(
            <SidebarMenuItem key={item.path} {...item}/>
        ))}
      </div>
    </div>
  );
};
