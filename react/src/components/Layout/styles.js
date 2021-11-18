import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
gap: 10px;
margin: 20px;

a {
    color: white;
    text-decoration: none;
    transition: all 500ms;
    &:hover {
    opacity: .7;
    }
  }
`