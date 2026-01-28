
import { PokemonFavorites } from "@/pokemons";  
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pokemones favoritos',
    description: 'Aqui se muestran tus pokeones favoritos'

}



export default function PokemonsPage(){

   
    return(
        <div className="w-full flex flex-col">
            <span className="text-5xl my-2">Pokemones favoritos <small className="text-blue-500">Global state</small></span>
            <PokemonFavorites/>
        </div>
    )
}