import type { NextPage } from 'next'
import { Button } from "@chakra-ui/react"
import styled from '@emotion/styled'

const Title = styled.h1`
  color: red;
`

const Home: NextPage = () => {
  return (
    <div>
      <Title>text</Title>
      <Button colorScheme="blue">Button</Button>
    </div>
  )
}

export default Home
