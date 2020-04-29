import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import { Container } from "./styles"

const Sidebar = () => (
  <Container>
    <Profile />
    <SocialLinks />
  </Container>
)

export default Sidebar
