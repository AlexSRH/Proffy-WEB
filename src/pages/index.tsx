import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Proffy | Login</title>
      </Head>

      <h1>Proffy</h1>
    </Container>
  )
}

export default Home
