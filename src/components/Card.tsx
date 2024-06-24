import React from "react";
import { Card, Text, Box, Image } from "@chakra-ui/react";
import {
  Airplane,
  Analytics,
  Key,
  Message,
  People,
  Receipt
} from "../assets/icons/index";
import { Link } from "react-router-dom";
import {useWindowWidth} from "../utils/useWindowWidth";

const cardItems = [
  {
    "title": "Início",
    "svg": <Airplane />,
    "path": "/",
  },
  {
    "title": "Lorem",
    "svg": <Message />,
    "path": "/",
  },
  {
    "title": "Lorem-Ipsum",
    "svg": <Key />,
    "path": "/",
  },
  {
    "title": "Recebimento",
    "svg": <Receipt />,
    "path": "/relatorio",
  },
  {
    "title": "Ipsum Lorem",
    "svg": <People />,
    "path": "/",
  },
  {
    "title": "Lorem",
    "svg": <Analytics />,
    "path": "/",
  },
]

const CardComponent: React.FC = () => {
  
  const windowWidth = useWindowWidth();

  return (
    <Box
      display="flex"
      flexDirection={windowWidth < 768 ? "column" : "row"}
      gap="15px"
    >
      {cardItems.map((item, index) => (
        <Link key={index} to={item.path}>
          <Card
            backgroundColor="#ffffff"
            padding="40px"
            boxShadow="md"
            borderRadius="5px"
            borderWidth="1px"
            borderColor = 'rgba(0, 39, 78, 0.4)'
            justifyContent="center"
            alignItems="center"
            _hover={{
              backgroundColor: 'rgba(0, 39, 78, 0.1)',
            }}
            gap="10px"
            minWidth="200px"
          >
            {item.svg}
            <Text fontSize="14px" fontWeight="600" marginTop="10px">
              {item.title}
            </Text>
          </Card>
        </Link>
      ))}
    </Box>
  );
}

export default CardComponent;