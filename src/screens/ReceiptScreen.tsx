import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  Button,
  Header,
  Drawer,
  Modal,
  AdsCard
} from '../components/index'

const ReceiptScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Drawer />
      <Header />
      <AdsCard />
    <Box 
      display="flex"
      flexDirection="column"
      marginTop="100px"
      marginLeft="100px"
      width="100%"
      height="100vh"
      >
      <Breadcrumb />
      <Button colorScheme="teal" rightIcon={<ChevronDownIcon />} onClick={() => setIsOpen(true)}>Novo recebimento</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
    </>
  );
}

export default ReceiptScreen;