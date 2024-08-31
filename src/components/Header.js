import React from 'react';
import { Box, Flex, Spacer, Image, Button, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionImage = motion(Image);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <Box as="header" bg="white" py={4} px={8} borderBottom="2px" borderColor="gray.200">
      <Flex align="center">
        {/* School Logo */}
        <MotionImage
          src="/img/Logo_gimnasio_lideres.png"
          alt="Logo de la Institución"
          boxSize="150px"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />

        <Spacer />

        {/* Navigation Menu */}
        <Flex as="nav" align="center">
          <MotionButton as={RouterLink} to="/nosotros" variant="ghost" mr={3} color="blue.800" _hover={{ color: "green.600" }} variants={buttonVariants} whileHover="hover">Nosotros</MotionButton>
          <MotionButton as={RouterLink} to="/admisiones" variant="ghost" mr={3} color="blue.800" _hover={{ color: "green.600" }} variants={buttonVariants} whileHover="hover">Admisiones</MotionButton>
          <MotionButton as={RouterLink} to="/servicios" variant="ghost" mr={3} color="blue.800" _hover={{ color: "green.600" }} variants={buttonVariants} whileHover="hover">Servicios</MotionButton>
          <MotionButton as={RouterLink} to="/noticias" variant="ghost" mr={3} color="blue.800" _hover={{ color: "green.600" }} variants={buttonVariants} whileHover="hover">Noticias</MotionButton>
          <MotionButton as={RouterLink} to="/contacto" variant="ghost" mr={3} color="blue.800" _hover={{ color: "green.600" }} variants={buttonVariants} whileHover="hover">Contacto</MotionButton>
        </Flex>

        <Spacer />

        {/* Color Mode Toggle */}
        <MotionIconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color="blue.800"
          aria-label="Toggle color mode"
          whileHover={{ scale: 1.1, rotate: 180 }}
          transition={{ duration: 0.2 }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
