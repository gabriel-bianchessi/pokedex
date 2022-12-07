import axios from 'axios'
import { PokemonCardProps } from '../components/PokemonCard'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export default api