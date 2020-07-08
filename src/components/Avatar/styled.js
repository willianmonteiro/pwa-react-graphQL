import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.2rem;
  margin: auto;
  width: 3.2rem;
  
    ${media.lessThan('medium')`
      height: 50px;
      width: 50px;
      margin-right: 15px;
    `}
`
