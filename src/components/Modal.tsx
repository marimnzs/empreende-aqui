import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Button,
  useToast
} from '@chakra-ui/react';
import { Button as ButtonComponent } from "./index";
import { formatDate } from '../utils/validators'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: FormData) => void;
}

interface FormData {
  contaBancaria: string;
  contaDestino: string;
  descricao: string;
  transferencia: string;
  valor: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    contaBancaria: "",
    contaDestino: "",
    descricao: "",
    transferencia: "",
    valor: ""
  });
  const toast = useToast();

  useEffect(() => {
    const { contaBancaria, contaDestino, descricao, transferencia, valor } = formData;
    const allFieldsFilled = contaBancaria && contaDestino && descricao && transferencia && valor;
    setIsFormValid(Boolean(allFieldsFilled));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmClick = () => {
    const formattedData = {
      ...formData,
      transferencia: formatDate(formData.transferencia),
    };
    onConfirm(formattedData);
    setFormData({
      contaBancaria: "",
      contaDestino: "",
      descricao: "",
      transferencia: "",
      valor: ""
    });
    toast({
      title: 'Sucesso!',
      description: 'Recebimento feito com sucesso!',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right'
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Lorem ipsum dolor sit.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <Box display="flex" flexDirection="row" gap="10px" mb="4">
              <FormControl isRequired>
                <FormLabel fontSize="14px">Conta bancária</FormLabel>
                <InputGroup>
                  <Select
                    name="contaBancaria"
                    value={formData.contaBancaria}
                    onChange={handleChange}
                    isRequired
                  >
                    <option value="" disabled>Nome da conta</option>
                    <option value="conta1">Conta 1</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="14px">Conta destino</FormLabel>
                <Select
                  name="contaDestino"
                  value={formData.contaDestino}
                  onChange={handleChange}
                  isRequired
                >
                  <option value="" disabled>Selecione</option>
                  <option value="conta1">Conta 1</option>
                </Select>
              </FormControl>
            </Box>
            <FormControl isRequired mb="4">
              <FormLabel fontSize="14px">Descrição</FormLabel>
              <Input
                name="descricao"
                placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et."
                value={formData.descricao}
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <Box display="flex" flexDirection="row" gap="10px" mb="4">
              <FormControl isRequired>
                <FormLabel fontSize="14px">Transferência</FormLabel>
                <InputGroup>
                  <Input
                    type="date"
                    name="transferencia"
                    value={formData.transferencia}
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel fontSize="14px">Valor</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color='gray.300'>
                    R$
                  </InputLeftElement>
                  <Input
                    placeholder="1.500,00"
                    type="number"
                    name="valor"
                    value={formData.valor}
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
            </Box>
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button backgroundColor="rgba(241, 244, 249, 1)" onClick={onClose}>Cancelar</Button>
          <Box>
            <ButtonComponent
              text="Salvar e enviar"
              colorScheme="teal"
              onClick={handleConfirmClick}
              isDisabled={!isFormValid}
            >
              Salvar e enviar
            </ButtonComponent>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
