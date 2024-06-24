import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';

const BreadcrumbCustom: React.FC = () => {
  return (
  <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href='#'>About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
  );
}

export default BreadcrumbCustom;