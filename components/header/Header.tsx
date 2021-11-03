import { useState } from 'react'
import MenuToggle from './MenuToggle';
import { Flex, Box } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import Logo from './Logo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Logo my="6"/>
      {/* <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle> */}
    </>
  )
}

export default Header;