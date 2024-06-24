import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';
import {  useLocation } from "react-router-dom";

const BreadcrumbCustom: React.FC = () => {
  const location = useLocation();

  const activeRoute = (path: string) => {
    switch (path) {
      case '/relatorio':
        return 'Recebimento';
      case '/':
        return 'Início';
      default:
        return '';
    }
  };

  return (
  <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
    <BreadcrumbItem>
      <BreadcrumbLink href='/' textDecoration="none">Início</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href={location.pathname} textDecoration="none" fontWeight="600" fontStyle="italic">{activeRoute(location.pathname)}</BreadcrumbLink>
    </BreadcrumbItem>

  </Breadcrumb>
  );
}

export default BreadcrumbCustom;