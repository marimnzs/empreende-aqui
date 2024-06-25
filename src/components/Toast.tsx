import React, { useEffect } from 'react';
import { Box, useToast, Text } from '@chakra-ui/react';
import { Check} from '../assets/icons/index';

interface CustomToastProps {
  title: string;
  description: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ title, description }) => {
  const toast = useToast();

  useEffect(() => {
    toast({
      position: 'top-right',
      status: 'success',
      duration: 9000,
      render: () => (
        <Box 
          p={3} 
          bg='rgba(255, 255, 255, 1)'
          borderRadius='5px'
          borderWidth="2"
          borderColor="rgba(0, 176, 80, 1)"
          display="flex"
          flexDirection="row"
          gap="10px"
          alignItems="start"
        >
          <Check />
          <Box>
            <Text fontSize="18px" fontWeight="700" color="rgba(0, 21, 42, 1)" >{title}</Text>
            <Text fontSize="14px" fontWeight="700" color="rgba(77, 81, 86, 1)">{description}</Text>
          </Box>
        </Box>
      ),
    });
  }, []);

  return null;
};

export default CustomToast;
