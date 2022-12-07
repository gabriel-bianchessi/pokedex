import api from "../../services/api"
import { PokemonCardProps } from "../PokemonCard"
import { Modal } from "./styles"

interface Props {
  team: PokemonCardProps[]
  setTeam: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>
}

export default function ({ team, setTeam }: Props) {
  async function getFiveRandomPokemons() {
    let pokemons: PokemonCardProps[] = []
    for (let i = 0; i < 5; i++) {
      let randomId = Math.floor(Math.random() * 898) + 1
      let response = await api.get(`pokemon/${randomId}`)
      let pokemon = response.data
      pokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other["official-artwork"].front_default,
        types: pokemon.types.map((type: any) => type.type.name),
      })
    }
    setTeam(pokemons)
  }

  return (
    <>
      <Modal className="invisible">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Team</h2>
            <button className="close-button">X</button>
          </div>
          <div className="modal-body">
            <div className="team-members">
              {team.map((pokemon) => (
                <div className="team-member">
                  <img src={pokemon.image} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
