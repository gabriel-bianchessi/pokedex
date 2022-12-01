import FilterBox from "../../components/FilterBox"
import Header from "../../components/Header"
import { Container, Main } from "./styles"

export default function () {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <FilterBox />
        </Main>
      </Container>
    </>
  )
}