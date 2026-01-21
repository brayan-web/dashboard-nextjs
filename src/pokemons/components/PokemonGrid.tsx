import { PokemonSimple } from "../interfaces/pokemon-simple";
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: PokemonSimple[];
}

export const PokemoGrid = ({pokemons}: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        { pokemons.map((pokemon) =>(
            <PokemonCard key={pokemon.id}  pokemon={pokemon}/>
        )) }
      
    </div>
  )
}


