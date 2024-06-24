import React, {useState} from "react";
import { Box, Text, Divider } from "@chakra-ui/react";
import { useWindowWidth } from "../utils/useWindowWidth";

interface ReceiptCardProps {
  id: number;
  title?: string;
  value?: number;
  total?: string;
  icon?: React.ReactNode;
  isClicked?: boolean;
  onClick: (id: number) => void;
}
const ReceiptCard: React.FC <ReceiptCardProps> = ({
  id,
  title,
  value,
  total,
  icon,
  isClicked,
  onClick,
}) => {
  const width = useWindowWidth();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      borderRadius="5px"
      borderWidth="1px"
      borderColor={isClicked ? "rgba(255, 100, 7, 1)" : "rgba(0, 39, 78, 0.5)"}
      padding="13px 30px"
      minWidth={width < 768 ? undefined : "200px"}
      transform={isClicked ? "scale(1.05)" : "scale(1)"}
      transition="transform 0.2s, border-color 0.2s"
      cursor="pointer"
      onClick={() => onClick(id)}
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      <Text>{title}</Text>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        {icon}
        <Text>{value}</Text>
      </Box>
      <Divider orientation='horizontal' color="rgba(0, 39, 78, 0.5)" borderColor="rgba(0, 39, 78, 0.5)"/>
      <Text>{total}</Text>
    </Box>
  );
}

export default ReceiptCard;