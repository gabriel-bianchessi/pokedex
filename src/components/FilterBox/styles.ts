import styled from 'styled-components'

export const FilterBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  margin-bottom: 16px;
  height: 7vh;

  input {
    border: none;
    outline: none;
    background-color: #ffffff;
    color: rgb(125,125,125);
    width: 100%;
    font-size: 14px;
    margin-left: 8px;
  }

  .searchBox {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 8px;
  }

  .fa-search {
    color: rgb(125,125,125);
  }
`
