import Link from 'next/link'
import React from 'react';
import { Link as ChakraLink } from "@chakra-ui/react"

interface MenuItemProps {
  isLast?: boolean;
  to: string;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to} passHref>
      <ChakraLink px="4" display="block" {...rest}>
        {children}
      </ChakraLink>
    </Link>
  )
}

export default MenuItem;