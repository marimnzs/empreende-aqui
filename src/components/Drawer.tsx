import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { StarIcon, EmailIcon, ChatIcon, ArrowUpIcon, Icon } from '@chakra-ui/icons';

const FixedDrawer: React.FC = () => {
  return (
    <ChakraProvider>
      <Box
        position="fixed"
        left="0"
        top="0"
        bottom="0"
        width="80px"
        bg="blue.900"
        color="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="10px"
      >
        <StarIcon boxSize="6" my="20px" />
        <EmailIcon boxSize="6" my="20px" />
        <ChatIcon boxSize="6" my="20px" />
        <ArrowUpIcon boxSize="6" my="20px" mt="auto" />
      </Box>
    </ChakraProvider>
  );
}

export default FixedDrawer;
