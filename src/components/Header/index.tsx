import { Link } from 'react-router-dom'
import { Header } from './styles'

export default function() {
  return (<>
    <Header>
      <div className='headerContent'>
        <div className='logo'>
          <img src="https://img.icons8.com/color/48/null/pokeball-2.png"/>
          <h1>Pokedex</h1> 
        </div>
        <nav>
          <ul>
            <li><Link to={"/"}>Pokedex</Link></li>
            <li><a href="/pokedex">Pokedex</a></li>
          </ul>
        </nav>
      </div>
    </Header>
  </>)
}