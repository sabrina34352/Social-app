import React from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Textarea,
  Button,
  Input,
} from '@chakra-ui/react';

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
          gap={10}
        >
          <Input placeholder="your name" />
          <Input placeholder="Big Place for Main Text Of the post" />
          <Textarea
            placeholder="Space for additional explanation"
            size="lg"
            resize="none"
          />
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
