import { Container } from "./styles";

export interface PokemonCardProps {
  id : number
  name: string
  image: string
  types: string[]
}

export default function (props: PokemonCardProps) {
  return (
    <>
      <Container>
        <div className="image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="info"> 
          <div className="id">
            <span>#{props.id}</span>
          </div>
          <h1>{props.name}</h1>
          <div className="types">
            {props.types.map((type, index) => (
              <span key={index} className={type}>{type}</span>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}