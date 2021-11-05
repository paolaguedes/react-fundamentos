import styled from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme.postBackgroundColor};
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 24px;
`

export const Subtitle = styled.small`
  display: block;
  padding-top: 10px;
  opacity: .8;
`
