import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.headerBackgroundColor};
  border-radius: 10px;
  padding: 1rem;

  button {
    background: transparent;
    border:0;
    font-size: 1.3rem;
  }
`