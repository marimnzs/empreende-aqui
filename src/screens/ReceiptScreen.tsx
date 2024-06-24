import React, { useState } from 'react';
import { Box, Input, Select } from '@chakra-ui/react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Drawer />
      <Header />
      <Box
        display="flex"
        flexDirection="row"
        gap="10px"
      >
        <Box 
          display="flex"
          flexDirection="column"
          marginTop="100px"
          marginLeft="100px"
          width="100%"
          >
          <Breadcrumb />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Button colorScheme="teal" rightIcon={<ChevronDownIcon />} onClick={() => setIsOpen(true)}>Novo recebimento</Button>
            <Select placeholder="Nome da conta"/>
            <Input placeholder="Pesquisar" />
          </Box>
        </Box>
        <AdsCard />
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ReceiptScreen;