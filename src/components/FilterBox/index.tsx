import { FilterBox} from "./styles"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  return (<>
    <FilterBox>
      <div className="searchBox">
        <FontAwesomeIcon icon={faSearch} className="fa-search"/>
        <input type="text" placeholder="Procure seu pokémon"/>
      </div>
    </FilterBox>
  </>)
}