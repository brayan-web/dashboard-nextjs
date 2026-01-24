import Image from "next/image";
import React from "react";
import { IoLogoReact, IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline } from "react-icons/io5";
import { SidebarMenuItems } from "..";




const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30}/>,
        title: 'Dashboard',
        subtitle: 'Visualizacion'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30}/>,
        title: 'Counter',
        subtitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={30}/>,
        title: 'Pokemones',
        subtitle: 'Generacion estatica'
    },
     {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={30}/>,
        title: 'Favorites',
        subtitle: 'Global state'
    }
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "300px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300  h-full"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <span className="text-blue-500">
            <IoLogoReact />
            </span>
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
              width={50}
              height={50}
              className="rounded-full w-11 h-11 object-cover"
              src="/avatar.jpeg"
              alt="user avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Brayan Antonio</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">

        { menuItems.map(item => (
            
        <SidebarMenuItems key={item.path}  {...item}/>
        )) }
        
        
      </div>
    </div>
  );
};
