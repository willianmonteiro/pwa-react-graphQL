import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"

import GlobalStyles from "../../styles/global"
import { LayoutWrapper, Main } from "./styles"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
