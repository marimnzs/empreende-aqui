import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TableContainer, 
  Input, 
  InputLeftElement, 
  InputRightElement, 
  InputGroup, 
  Select, 
  Checkbox, 
  SimpleGrid, 
  Table, 
  Thead, 
  Tbody, 
  Tr, 
  Th, 
  Td 
} from '@chakra-ui/react';
import {
  Breadcrumb,
  Button,
  Header,
  Drawer,
  Modal,
  AdsCard,
  ReceiptCard
} from '../components/index';
import { ArrowUp, Reload, Bomb, Menu, BankAccount, Search } from "../assets/icons/index";
import { useWindowWidth } from "../utils/useWindowWidth";
import { initialReceiptData } from '../utils/data'

const ReceiptScreen: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedCardId, setClickedCardId] = useState<number | null>(null);
  const [receipts, setReceipts] = useState(initialReceiptData.receipts);

  const windowWidth = useWindowWidth();

  const handleCardClick = (id: number) => {
    setClickedCardId(clickedCardId === id ? null : id);
  };
  
  let breakPoint;

  if (windowWidth < 768) {
    breakPoint = 1;
  } else if (windowWidth >= 768 && windowWidth <= 1200) {
    breakPoint = 2;
  } else {
    breakPoint = 4;
  }

  const status = (status: string) => {
    switch (status) {
      case 'Recebida':
        return <ArrowUp />;
      case 'Em aberto':
        return <Reload />;
      case 'Vencida':
        return <Bomb />;
      default:
        return '';
    }
  };

  const cardItems = [
    {
      id: 1,
      title: "Recebidas",
      icon: <ArrowUp />,
      value: receipts.filter(receipt => receipt.status === "Recebida").length,
      total: receipts.filter(receipt => receipt.status === "Recebida").reduce((acc, receipt) => acc + parseFloat(receipt.amount.replace('R$', '').replace(',', '.')), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    {
      id: 2,
      title: "Em aberto",
      icon: <Reload />,
      value: receipts.filter(receipt => receipt.status === "Em aberto").length,
      total: receipts.filter(receipt => receipt.status === "Em aberto").reduce((acc, receipt) => acc + parseFloat(receipt.amount.replace('R$', '').replace(',', '.')), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    {
      id: 3,
      title: "Vencidas",
      icon: <Bomb />,
      value: receipts.filter(receipt => receipt.status === "Vencida").length,
      total: receipts.filter(receipt => receipt.status === "Vencida").reduce((acc, receipt) => acc + parseFloat(receipt.amount.replace('R$', '').replace(',', '.')), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    {
      id: 4,
      title: "Total",
      icon: <Menu />,
      value: receipts.length,
      total: receipts.reduce((acc, receipt) => acc + parseFloat(receipt.amount.replace('R$', '').replace(',', '.')), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
  ];

  const handleConfirm = (data: any) => {
    const newReceipt = {
      id: receipts.length + 1,
      accountName: data.contaDestino,
      amount: data.valor,
      status: "Recebida",
      dueDate: data.transferencia
    };

    const updatedReceipts = [...receipts, newReceipt];
    setReceipts(updatedReceipts);

    localStorage.setItem('receiptData', JSON.stringify({ receipts: updatedReceipts }));
    setIsOpen(false);
  };

  useEffect(() => {
    const storedReceiptData = localStorage.getItem('receiptData');
    if (storedReceiptData) {
      setReceipts(JSON.parse(storedReceiptData).receipts);
    } else {
      localStorage.setItem('receiptData', JSON.stringify(initialReceiptData));
    }
  }, []);

  return (
    <>
      <Drawer />
      <Header />
      <Box
        display="flex"
        flexDirection={windowWidth < 768 ? "column" : "row"}
        alignItems={windowWidth < 768 ? "center" : undefined}
        gap="10px"
        marginLeft={windowWidth < 768 ? "90px" : "100px"}
      >
        <Box 
          display="flex"
          flexDirection="column"
          marginTop="100px"
          width="100%"
          gap="30px"
          >
          <Breadcrumb />
          <Box
            display="flex"
            flexDirection={windowWidth < 768 ? "column" : "row"}
            justifyContent={windowWidth < 768 ? "center" : "space-around"}
            alignItems="center"
            gap="10px"
          >
            <Box width="100%">
              <Button text="Novo recebimento" icon colorScheme="teal" onClick={() => setIsOpen(true)}>Novo recebimento</Button>
            </Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none" >
                <BankAccount />
              </InputLeftElement>
              <Select _focus={{ boxShadow: "none" }} />
            </InputGroup>

            <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<Search />}
            />
            <Input type="text" placeholder="Pesquisar" />
          </InputGroup>
          </Box>
          
          <SimpleGrid columns={breakPoint} spacing={windowWidth < 768 ? 4 : 8} width="100%">
            {cardItems.map((item, index) => (
              <ReceiptCard 
              key={index} 
              id={item.id}
              title={item.title} 
              icon={item.icon} 
              total={item.total} 
              value={item.value}
              isClicked={clickedCardId === item.id}
              onClick={handleCardClick}
              />
            ))}
          </SimpleGrid>

          <Box marginTop="20px">
            <TableContainer borderRadius="5px">
              <Table variant="simple">
                <Thead backgroundColor="rgba(0, 62, 124, 1)" borderColor="rgba(0, 39, 78, 0.2)" borderWidth="1">
                  <Tr>
                    <Th><Checkbox/></Th>
                    <Th color="white">Emissão</Th>
                    <Th color="white">Cliente</Th>
                    <Th color="white">Categoria</Th>
                    <Th color="white">Valor</Th>
                    <Th color="white">Situacao</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {receipts.map(receipt => (
                    <Tr key={receipt.id}>
                      <Td><Checkbox borderColor="rgba(0, 39, 78, 0.5)"/></Td>
                      <Td color="rgba(77, 81, 86, 1)">{receipt.dueDate}</Td>
                      <Td color="rgba(77, 81, 86, 1)">{receipt.accountName}</Td>
                      <Td color="rgba(77, 81, 86, 1)">{receipt.status}</Td>
                      <Td color="rgba(77, 81, 86, 1)">{"+R$" + receipt.amount}</Td>
                      <Td>{status(receipt.status)}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <AdsCard />
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleConfirm} />
    </>
  );
}

export default ReceiptScreen;
