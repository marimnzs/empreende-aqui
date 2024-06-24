import React from "react";
import ButtonComponent from './Button';
import { Box, Divider, Select, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputGroup, InputLeftElement, InputRightElement
 } from '@chakra-ui/react';

interface ModalProps { 
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo recebimento</ModalHeader>
        <Divider orientation="vertical"/>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Box display="flex" flexDirection="row" gap="10px">
              <Select placeholder="Nome da conta" isRequired/>
              <Select placeholder="Conta destino" isRequired/>
            </Box>
            <Input placeholder="Valor" isRequired/>
            <Box display="flex" flexDirection="row" gap="10px">
              <InputGroup>
                <InputRightElement pointerEvents="none" color='gray.300' >
                R$
                </InputRightElement>
                <Input placeholder="Valor" isRequired/>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none" color='gray.300' >
                R$
                </InputLeftElement>
                <Input placeholder="Valor" isRequired/>
              </InputGroup>
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <ButtonComponent colorScheme="teal" onClick={onClose}>Cancelar</ButtonComponent>
          <ButtonComponent colorScheme="teal" onClick={onClose}>Salvar e enviar</ButtonComponent>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
