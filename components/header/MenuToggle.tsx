import React from 'react';
import { Box } from '@chakra-ui/layout';
import { GrClose } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: React.FunctionComponent<MenuToggleProps> = ({toggle, isOpen}) => {
  return (
    <Box display={{ base: "block", md: "none"}} onClick={toggle}>
      {isOpen ? <GrClose /> : <HiMenu />}
    </Box> 
  )
}

export default MenuToggle;