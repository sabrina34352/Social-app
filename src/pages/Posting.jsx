import React, { useState } from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Textarea,
  Button,
  Input,
} from '@chakra-ui/react';

function Posting() {
  const [username, setUsername] = useState('');
  const [tagname, setTagname] = useState('');
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');

  const addComment = async () => {
    const result = await fetch(
      'http://localhost:8000/api/posting/add-comment',
      {
        method: 'post',
        body: JSON.stringify({ username, tagname, heading, text }),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then(result =>result.json());
    console.log(result);

  };


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
          <Input
            placeholder="your name"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <Input placeholder="Big Place for Main Text Of the post" value={heading} onChange={event =>setHeading(event.target.value)} />
          <Textarea
            placeholder="Space for additional explanation"
            size="lg"
            resize="none"
            value={text}
            onChange={event => setText(event.target.value)}
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
        onClick={() => addComment()}
      >
        Post
      </Button>
    </Box>
  );
}

export default Posting;
