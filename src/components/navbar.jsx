import React from 'react';

import { Flex, Button, Box, Spacer, Input } from '@chakra-ui/react';
import { ChatIcon, SettingsIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div>
        <Box
          display="fixed"
          pos="relative"
          w="full"
          zIndex={50}
          _before={{
            content: `""`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            boxShadow: '0 0 10px 0 grey',
          }}
        >
          <Flex p="15px 30px 15px 30px" minW="full">
            <ColorModeSwitcher h={8} />
            <Spacer />
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Spacer />
            <Button>@ Connect</Button>
            <Spacer />
            <Button># Discover</Button>
            <Spacer />
            <Button>Me</Button>
            <Spacer />
            <Spacer />
            <Spacer />
            <Button>Icon</Button>
            <Spacer />
            <Spacer />
            <Spacer />
            <Input w="100px" placeholder="search" size="sm" />
            <Spacer />
            <Button>
              <ChatIcon w={8} h={5} />
            </Button>
            <Spacer />
              <Link to="settings">
            <Button>
                <SettingsIcon w={7} h={5} />
            </Button>
              </Link>
            <Spacer />
            <Button>Text</Button>
          </Flex>
        </Box>
      </div>
    </>
  );
}

export default Navbar;
