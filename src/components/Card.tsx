import React from "react";
import { Card, Text, SimpleGrid } from "@chakra-ui/react";
import { Airplane, Analytics, Key, Message, People, Receipt } from "../assets/icons/index";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../utils/useWindowWidth";

const cardItems = [
  {
    title: "Início",
    svg: <Airplane />,
    path: "/",
    alt: "Ícone de Avião",
  },
  {
    title: "Lorem",
    svg: <Message />,
    path: "/",
    alt: "Ícone de Mensagem",
  },
  {
    title: "Lorem-ipsum",
    svg: <Key />,
    path: "/",
    alt: "Ícone de Chave",
  },
  {
    title: "Recebimento",
    svg: <Receipt />,
    path: "/relatorio",
    alt: "Ícone de Recebimento",
  },
  {
    title: "Pessoas",
    svg: <People />,
    path: "/",
    alt: "Ícone de Pessoas",
  },
  {
    title: "Lorem",
    svg: <Analytics />,
    path: "/",
    alt: "Ícone de Analytics",
  },
];

const CardComponent: React.FC = () => {
  const windowWidth = useWindowWidth();
  let breakPoint;

  if (windowWidth < 768) {
    breakPoint = 1;
  } else if (windowWidth >= 768 && windowWidth <= 1200) {
    breakPoint = 2;
  } else {
    breakPoint = 6;
  }

  return (
    <SimpleGrid columns={breakPoint} spacing={6}>
      {cardItems.map((item, index) => (
        <Link key={index} to={item.path}>
          <Card
            backgroundColor="#ffffff"
            alignItems="center"
            padding="30px"
            boxShadow="md"
            borderRadius="5px"
            borderWidth="1px"
            borderColor="rgba(0, 39, 78, 0.4)"
            _hover={{
              backgroundColor: 'rgba(0, 39, 78, 0.3)',
            }}
          >
            {item.svg}
            <Text fontSize="14px" fontWeight="600" marginTop="10px">
              {item.title}
            </Text>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
}

export default CardComponent;
