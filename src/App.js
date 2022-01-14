import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Mainpage from './pages/mainpage';
import Navbar from './components/navbar';
import theme from './components/theme';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider m="0 auto" theme={theme}>
      <Router>
        <Navbar />
        <Box maxW="1100px" m="3em auto">
          <Routes>
            <Route path="/">
              <Route index element={<Mainpage />} />
              <Route element={<Settings/>} />
            </Route>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
