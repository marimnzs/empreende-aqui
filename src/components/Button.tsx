import React from 'react';
import { Button, ButtonProps, Divider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
interface Props {
  icon?: boolean;
  text: string;
}

const ButtonComponent: React.FC<ButtonProps & Props> = ({ icon, text, ...props }) => {
  return (
    <Button
      {...props}
      backgroundColor="#00B050"
      _hover={{ backgroundColor: '#006930' }}
      rightIcon={icon? <ChevronDownIcon /> : undefined}
      width="100%"
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;

