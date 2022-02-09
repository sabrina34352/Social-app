import React from 'react';

import {
  Flex,
  Button,
  Box,
  Spacer,
  Input,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { ChatIcon, SettingsIcon, Search2Icon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

function Navbar() {
  const headerBG = useColorModeValue('#EFEFEF', '#2C3333');
  return (
    <>
      <Box
        display="inline"
        pos="fixed"
        top={0}
        w="full"
        zIndex={50}
        bg={headerBG}
        _before={{
          content: `""`,
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          right: 0,
          boxShadow: '0 0 10px 0 grey',
        }}
      >
        <Flex p={{ base: '15px 0', md: '15px 30px' }} minW="full">
          <ColorModeSwitcher h={8} />
          <Spacer />
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Spacer />
          <Button>Me</Button>
          <Spacer />
          <Spacer />
          <Text>Icon</Text>
          <Spacer />
          <Spacer />
          <InputGroup w="120px" display={{ base: 'none', md: 'block' }}>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input type="tel" placeholder="Search" />
          </InputGroup>
          <Spacer />
          <Link to="chat">
            <Button>
              <ChatIcon w={8} h={5} />
            </Button>
          </Link>
          <Spacer />
          <Link to="settings">
            <Button>
              <SettingsIcon w={7} h={5} />
            </Button>
          </Link>
          <Spacer />
          <Link to="posting">
          <Button>Text</Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
