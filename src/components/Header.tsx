import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const menuItems = [
  { path: "/", name: "Início" },
  { path: "/lorem", name: "Lorem" },
  { path: "/lorem-ipsum", name: "Lorem-ipsum" },
  { path: "/ipsum-lorem-sum", name: "Ipsum Lorem Sum" },
  { path: "/recebimento", name: "Recebimento" },
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
      zIndex={1000}
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