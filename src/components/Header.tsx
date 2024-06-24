import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useWindowWidth } from "../utils/useWindowWidth";

const menuItems = [
  { path: "/", name: "INÍCIO", icon: false },
  { path: "/", name: "LOREM", icon: true },
  { path: "/", name: "LOREM-IPSUM", icon: true },
  { path: "/", name: "IPSUM LOREM", icon: true },
  { path: "/relatorio", name: "RECEBIMENTO", icon: true },
];

const Header: React.FC = () => {
  const location = useLocation();
  const width = useWindowWidth();

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
      gap={width < 768 ? "0px" : "20px"}
      zIndex={1000}
    >
      {menuItems.map((item, index) => (
        <Link key={index} to={item.path} style={{ textDecoration: "none", marginLeft: "20px" }}>
          <Box
            display="flex"
            flexDirection="row"
            gap="5px"
            alignItems="center"
            color={item.path === location.pathname ? "rgba(0, 193, 235, 1)" : "white"}
          >
            <Text fontSize="14px" fontWeight="700">
              {item.name}
            </Text>
            {item.icon && (item.path === location.pathname ? <ChevronRightIcon /> : <ChevronDownIcon />)}
          </Box>
        </Link>
      ))}
    </Box>
  );
}

export default Header;