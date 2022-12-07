import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin-top: 15vh;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60%;

  .filters {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .pokemons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    width: 100%;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7vh;
  }

  .pagination button {
    background-color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    color: rgb(125, 125, 125);
  }

  .pagination  button:hover {
    color: #000;
  }

  .pagination button:disabled {
    color: rgb(125, 125, 125);
    cursor: not-allowed;
  }

  .pagination  button:disabled:hover {
    color: rgb(125, 125, 125);
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .pagination input {
    border: none;
    outline: none;
    background-color: #ffffff;
    color: rgb(125, 125, 125);
    width: 100%;
    font-size: 14px;
    margin-left: 8px;
    flex: 1;
  }

  .pagination span, label {
    color: rgb(125, 125, 125);
    font-size: 14px;
    flex: 1;
  }
`
