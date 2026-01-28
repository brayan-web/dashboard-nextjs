'use client'

import { useAppSelector } from "@/store";
import { PokemoGrid, PokemonSimple } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorites = () => {
        const pokemons = useAppSelector(state => state.pokemons.favorites);

        const favoritesPokemons = Object.values(pokemons) as PokemonSimple[];


  return (
    <>

        { favoritesPokemons.length
            ? <PokemoGrid pokemons={favoritesPokemons}/>

              : <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500"/>
            <span className="text-4xl">No hay favoritos</span>
        </div>
     
        
        }
    
    </>
  )
}



