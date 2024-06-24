import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AdsCard: React.FC = () => {
  return (
    <Box
      position="fixed"
      right="0"
      top="0"
      height="100vh"
      marginTop="100px"
    >
      <Box
        borderRadius="25px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(215, 58, 8, 1)"
        >
          <Text color="white">Lorem.</Text>
        </Box>
    </Box>
  );
}

export default AdsCard;