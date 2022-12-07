import styled from "styled-components"

export const SearchBox = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 7vh;
  flex: 2;

  input {
    border: none;
    outline: none;
    background-color: #ffffff;
    color: rgb(125, 125, 125);
    width: 100%;
    font-size: 14px;
    margin-left: 8px;
  }

  select > option {
    color: rgb(125, 125, 125);
    border-radius: 0;
  }

  .fa-search {
    color: rgb(125, 125, 125);
  }

  .typeSelect {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 8px;
    flex: 1;
  }
`
