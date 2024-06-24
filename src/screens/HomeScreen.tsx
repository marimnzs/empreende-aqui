import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import FixedDrawer from '../components/Drawer';
import CardComponent from '../components/Card';
import { useWindowWidth } from '../utils/useWindowWidth';

const HomeScreen: React.FC = () => {
  
  return (
    <Box 
      display="flex"
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="start"
      marginTop="50px"
      >
      <FixedDrawer />
      <Box>
      <Heading as='h1' size='md' noOfLines={1} marginBottom="24px">
        Empreende aqui
      </Heading>
      <CardComponent/>
      </Box>
    </Box>
  );
}

export default HomeScreen;