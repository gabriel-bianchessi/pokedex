import SearchBox from "../../components/SearchBox"
import Header from "../../components/Header"
import { Container, Main } from "./styles"
import FilterBox from "../../components/FilterBox"
import { PokemonCardProps } from "../../components/PokemonCard"
import { useState, useEffect } from "react"
import api from "../../services/api"
import axios from "axios"
import Pokemons from "../../components/Pokemons"
import { useForm } from "react-hook-form"
import TeamModal from "../../components/TeamModal"

export default function () {
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)
  const [limit, setLimit] = useState(24)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const [next, setNext] = useState<string>(limit.toString())
  const [previous, setPrevious] = useState<string | null>("")
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([])
  const { register, handleSubmit, getValues } = useForm()
  const [team, setTeam] = useState<PokemonCardProps[]>([])

  function loadNext() {
    const newOffset = Number(offset + limit)
    setOffset(newOffset)
    console.log(offset, newOffset)
    setPage(page + 1)
    getPokemons(limit, offset)
  }

  function loadPrevious() {
    setOffset(offset - limit)
    setPage(page - 1)
    getPokemons(limit, offset)
  }

  function newLimit(e: any) {
    setLimit(e.target.value)
    setOffset(0)
    setPage(0)
    getPokemons(e.target.value, 0)
  }

  async function getPokemons(limit?: number, offset?: number): Promise<void> {
    if (limit === undefined) limit = 24

    const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`)
    let urls = response.data.results.map((pokemon: any) => pokemon.url)
    setNext(response.data.next)
    setPrevious(response.data.previous)
    setPages(Math.ceil(response.data.count / limit))
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

  useEffect(() => {
    setLoading(true)
    getPokemons()
    setLoading(false)
  }, [])

  return (
    <>
      <TeamModal team={team} setTeam={setTeam}/>
      <Header />
      <Container>
        <Main>
          <div className="filters">
            <SearchBox setPokemons={setPokemons} />
            <FilterBox setPokemons={setPokemons} />
          </div>
          <div className="pagination">
            <div className="buttons">
              <button onClick={loadPrevious} disabled={offset == 0}>
                Previous
              </button>
              <button onClick={loadNext}>Next</button>
            </div>
            <span>
              Página {page + 1} de {pages}
            </span>
            <label>Pokémons por página:</label>
            <input
              {...register("limit")}
              defaultValue={limit}
              onChange={(e) => {
                newLimit(e)
              }}
            />
          </div>
          {loading ? <h1>Loading...</h1> : <Pokemons pokemons={pokemons} />}
        </Main>
      </Container>
    </>
  )
}
