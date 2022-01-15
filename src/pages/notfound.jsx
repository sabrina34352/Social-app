import React from 'react';
import AnimeGirl from '../NotFoundPhoto.png';
import { Box, Center, Heading, Image, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <Box mt="10em" textAlign="center">
      <Heading mb={5}>404 PAGE NOT FOUND</Heading>
      <Center mb={5}>
        <Image
          lazy
          src={AnimeGirl}
          alt="cute girl crying:("
          boxSize="170px"
          objectFit="cover"
          borderRadius="17px"
          align="center"
        />
      </Center>
      <Link to="/">
        <Button
          variant="outline"
          borderRadius="10px"
          size="md"
          _hover={{
            boxShadow: '0 0 5px 0 black, inset 0 0 5px 0 white',
          }}
        >
          Go Home
        </Button>
      </Link>
    </Box>
  );
}
export default NotFound;
