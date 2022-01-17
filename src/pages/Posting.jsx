import React from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Image,
  Center,
  Button,
} from '@chakra-ui/react';
import photochka from '../NotFoundPhoto.png';
function Posting() {
  return (
    <Box pos="relative">
      <VStack m={1}>
        <SimpleGrid
          border="2px"
          borderColor="gray"
          w="full"
          p={5}
          borderRadius="lg"
        >
          <Text
            fontSize={[20, 25]}
            border="2px"
            borderColor="gray"
            p={1}
            m="0 5px 15px"
          >
            Big Place for Main Text Of the post
          </Text>
          <Text p="5px 20px" border="2px" borderColor="gray">
            There is small description of the thing that person posted
          </Text>
          <Center>
            <Image src={photochka} alt="somePhotoAlongWithText" m={5} />
          </Center>
        </SimpleGrid>
      </VStack>
      <Button
        colorScheme="teal"
        size="lg"
        variant="outline"
        borderRadius="lg"
        pos="fixed"
        right={20}
      >
        Post
      </Button>
    </Box>
  );
}

export default Posting;
