import React from 'react'
import Profile from '../../components/notProfile'
import Foter from '../../components/AccountsFooter'

import {
  Container
} from './style.js'


const NotProfile = () => {
  return (
    <Container>
      <Profile />
      <Foter />
    </Container>
  )
}

export default NotProfile