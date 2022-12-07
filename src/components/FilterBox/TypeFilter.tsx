import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import api from "../../services/api"
import { PokemonCardProps } from "../PokemonCard";

interface Props {
  setPokemons: Dispatch<SetStateAction<PokemonCardProps[]>>
  limit?: number
}

export default function ({ setPokemons, limit }: Props) {

  interface ITypeResponse {
    id: number;
    name: string;
  }

  const [types, setTypes] = useState<ITypeResponse[]>([])

  useEffect(() => {
    getAllPokemonTypes()
  })

  async function getAllPokemonTypes() {
    const results = await api.get(`/type/`)
    setTypes(results.data.results)
  }

  const selectType = async (e: any) => {
    const type = e.target.value
    let urls: string[] = []
    if (type === 'all') {
      const response = await api.get(`pokemon?limit=${limit || 1000}`)
      urls = response.data.results.map((pokemon: any) => pokemon.url)
    } else {
      const response = await api.get(`type/${type}?limit=1000`)
      urls = response.data.pokemon.map((pokemon: any) => pokemon.pokemon.url)
    }
    let promises = urls.map((url: string) => axios.get(url))
    const results = await axios.all(promises)
    let pokemons = results.map((result: any) => {
      let pokemon = result.data
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map((type: any) => type.type.name),
      }
    })
    setPokemons(pokemons)
  }

  return (<>
    <select className="byType" onChange={selectType} > 
      <option value="all">All</option>
      {types.map(type => {
        return <option value={type.name}
          key={type.name}
          >{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</option>
      })}
    </select>
  </>)
}