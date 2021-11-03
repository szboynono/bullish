import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

const Summary = () => {
  return (
    <Box>
      <Heading size="md">Today&apos;s Cryptocurrency Prices by Market Cap</Heading>
      <Text mt="2">The global crypto market cap is $2.74T, a 3.88% increase over the last day.</Text>
    </Box>
  )
}

export default Summary;