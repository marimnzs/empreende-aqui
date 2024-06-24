import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      backgroundColor="#00B050"
      _hover={{ backgroundColor: '#006930' }}
    >
      {children}
    </Button>
  );
}

export default ButtonComponent;

