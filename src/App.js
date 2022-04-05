import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Mainpage from './pages/mainpage';
import Navbar from './components/navbar';
import theme from './components/theme';
import Settings from './pages/settings';
import NotFound from './pages/notfound';
import Chat from './pages/Chat';
import Posting from './pages/Posting';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Box maxW="1100px" m="6em auto 0">
          <Routes>
            <Route path="/">
              <Route index element={<Mainpage />} />
              <Route path="settings" element={<Settings />} />
              <Route path="chat" element={<Chat />} />
              <Route path="posting" element={<Posting />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
