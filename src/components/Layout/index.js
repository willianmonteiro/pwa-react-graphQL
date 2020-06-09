import React from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import GlobalStyles from '../../styles/global'
import { LayoutWrapper, Main } from './styled'

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level='top'>
        <Sidebar />
      </TransitionPortal>
      
      <Main>{children}</Main>

      <TransitionPortal level='top'>
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
