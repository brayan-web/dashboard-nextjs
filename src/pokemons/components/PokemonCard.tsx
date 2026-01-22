import React from "react";
import { PokemonSimple } from "../interfaces/pokemon-simple";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";  
import Link from "next/link";


interface Props {
  pokemon: PokemonSimple;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto w-60 mt-2 h-full">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gradient-to-t from-slate-900 to-slate-700 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={pokemon.name}
            width={100}
            height={100}
            className="object-contain mx-auto h-40 w-40"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas informacion
            </Link>
          </div>
        </div>
        <div className="border-b ">
          <a className="px-4 py-2  hover:bg-gray-100 flex items-center">
            <div className="text-red-600">
             <IoHeartOutline size={25}/>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </a>

          
        </div>
   
      </div>
    </div>
  );
};
