import { SearchBox} from "./styles"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dispatch, SetStateAction } from "react"
import { PokemonCardProps } from "../PokemonCard"
import { useForm }  from "react-hook-form" 
import api, { getPokemons } from "../../services/api"

interface Props {
  setPokemons: Dispatch<SetStateAction<PokemonCardProps[]>>
}


export default ({setPokemons}: Props) => {
  const { register, handleSubmit } = useForm()

  const searchPokemon =  handleSubmit( async (data: any) => {
    const { name } = data
    if (name === '') return
    const result = await api.get(`pokemon/${name}`)
    let pokemon = result.data
    let pokemons = [{
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types.map((type: any) => type.type.name),
    }]
    setPokemons(pokemons)
  })
  

  return (<>
    <SearchBox onSubmit={searchPokemon}>
        <FontAwesomeIcon icon={faSearch} className="fa-search"/>
        <input type="text" placeholder="Procure seu pokémon" {...register('name')} />
    </SearchBox>
  </>)
}