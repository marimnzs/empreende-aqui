import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    "path": "/",
    "name": "Início"
  },
  {
    "path": "/",
    "name": "Lorem"
  },
  {
    "path": "/",
    "name": "Lorem-ipsum"
  },
  {
    "path": "/",
    "name": "Ipsum Lorem Sum"
  },
  {
    "path": "/",
    "name": "Lorem"
  },
  {
    "path": "/relatorio",
    "name": "Recebimento"
  },
];

const Header: React.FC = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="80px"
      bg="blue.900"
      color="white"
      display="flex"
      flexDirection="row"
      alignItems="center"
      width="100%"
      height="70px"
      gap="20px"
    >
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} style={{ textDecoration: "none", marginLeft: "20px" }}>
          <Text fontSize="lg" fontWeight="bold">
            {item.name}
          </Text>
        </Link>
      ))}
    </Box>
  );
}

export default Header;