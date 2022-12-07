import PokemonCard, { PokemonCardProps } from "../PokemonCard"
import { Pokemons } from "./styles"

export default function ({ pokemons }: { pokemons: PokemonCardProps[] }) {
  return (
    <Pokemons>
      {pokemons.map((pokemon,) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </Pokemons>
  )
}
