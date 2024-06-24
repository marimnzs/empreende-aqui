import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import {
  Drawer,
  Cards,
} from '../components/index';
import { useWindowWidth } from '../utils/useWindowWidth';

const HomeScreen: React.FC = () => {
  const width = useWindowWidth();

  return (
    <>
      <Box 
        as="main"
        display="flex"
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="start"
        marginTop="50px"
        marginLeft={width < 768 ? '20px' : '50px'}
        role="main"
      >
        <Drawer />
        <Box as="section">
          <Heading as='h1' size='md' noOfLines={1} marginBottom="24px">
            Empreende aqui
          </Heading>
          <Cards />
        </Box>
      </Box>
    </>
  );
}

export default HomeScreen;
