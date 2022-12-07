import { Dispatch, SetStateAction } from "react"
import { PokemonCardProps } from "../PokemonCard"
import { FilterBox } from "./styles"
import TypeFilter from "./TypeFilter"

interface Props {
  setPokemons: Dispatch<SetStateAction<PokemonCardProps[]>>
}

export default function ({ setPokemons }: Props) {
  return (
    <>
      <FilterBox>
        <TypeFilter setPokemons={setPokemons}/>
      </FilterBox>
    </>
  )
}
