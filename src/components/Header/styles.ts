import styled from 'styled-components'

export const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: fixed;
  width: 100%;

  .headerContent {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: space-between;
    max-width: 60%;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    
  }
`