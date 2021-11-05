import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background: ${({ theme }) => theme.headerBackgroundColor};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  button {
    background: transparent;
    border:0;
    font-size: 1rem;
  }
`
export function MainFooter({onToggleMode, selectedMode}){
  return(
    <Footer>
    <p>Paola Guedes</p>
    <button 
      onClick={onToggleMode} 
      type="button"
    >
      {selectedMode == 'dark' ? '🌙' : '🔆'}
    </button>
    </Footer>
  )
}