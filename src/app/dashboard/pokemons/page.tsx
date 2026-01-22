import { PokemonSimple, PokemonsResponse } from "@/pokemons";
import Image from "next/image";
import { PokemoGrid } from "@/pokemons";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Listado de pokemones',
    description: 'Aqui se muestra un listado de 151 pokenones'

}

const getPokemons = async(limit= 20, offset = 0) : Promise<PokemonSimple[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }));

    // throw new Error("Esto es un error que no deberia de suceder")
    return pokemons;

}


export default async function PokemonsPage(){

    const pokemons = await getPokemons(151);
   
    return(
        <div className="w-full">
            <PokemoGrid pokemons={pokemons}/>
        </div>
    )
}