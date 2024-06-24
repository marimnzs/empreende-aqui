import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ReceiptScreen from './screens/ReceiptScreen';

function App() {
  return (
    <Router>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/relatorio" element={<ReceiptScreen />} />
      </Routes>
    </ChakraProvider>
    </Router>
  );
}

export default App;
