import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box
      width="100%"
      height="100%"
    >
      {children}
    </Box>
  );
}

export default Container;
