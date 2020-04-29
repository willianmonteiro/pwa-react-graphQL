import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`

export const LinkTo = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`

export const Author = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`
export const Position = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
