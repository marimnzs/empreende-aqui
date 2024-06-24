import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const AdsCard: React.FC = () => {
  return (
    <Box
      height="100vh"
      marginTop="100px"
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="50px"
      maxWidth="260px"
    >
      <Box display="flex" flexDirection="column"justifyContent="center" alignItems="center" gap="10px">
      <Box
        borderRadius="25px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(215, 58, 8, 1)"
        >
          <Text color="white">Lorem.</Text>
        </Box>
      <Box
        width="17px"
        height="12px"
        background="rgba(255, 100, 7, 1)"
        clipPath="polygon(50% 100%, 0 0, 100% 0)"
        borderRadius="5px"
       />
       </Box>
       <Box
        display="flex"
        flexDirection="row"
        gap="10px" 
       >
        <Box 
          width="12px"
          height="60px"
          background="rgba(255, 0, 102, 1)"
        />
        <Text 
          fontWeight="700"
          fontSize="35px"
        >
          Lorem
        </Text>
       </Box>
       <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
       >
        <Text fontSize="25px" fontWeight="600">
          Lorem ipsum.
        </Text>
        <Text >R$78,85</Text>
        <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.</Text>
       </Box>
       <Button
        backgroundColor="rgba(0, 39, 78, 1)"
        color="white"
        borderRadius="25px"
        width="100%"
        _hover={{
          backgroundColor: "#06488b"
        }}
       >
        Lorem ipsum.
        </Button>
    </Box>
  );
}

export default AdsCard;