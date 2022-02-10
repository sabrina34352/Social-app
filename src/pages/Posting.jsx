import React, { useState } from 'react';
import {
  Box,
  VStack,
  SimpleGrid,
  Textarea,
  Button,
  Input,
  Text,
  Center,
} from '@chakra-ui/react';

function Posting() {
  const [error, setError] = useState({});
  const [username, setUsername] = useState('');
  const [tagname, setTagname] = useState('');
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');

  async function addComment() {
    await fetch('http://localhost:8000/api/posting/add-comment', {
      method: 'post',
      body: JSON.stringify({ username, tagname, heading, text }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        if (!res.ok) {
          res
            .json()
            .then(data => {
              setError(data[0]);
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          res.json();
          setError({});
        }
      })
      .catch(err => console.log('Something went wrong!'));
  }

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
          <Input
            placeholder="Big Place for Main Text Of the post"
            value={heading}
            onChange={event => setHeading(event.target.value)}
          />
          <Textarea
            placeholder="Space for additional explanation"
            size="lg"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </SimpleGrid>
      </VStack>
      {Object.keys(error).length !== 0 && (
        <Text color="red.400" m={3}>
          Error: {error.param} {error.msg}
        </Text>
      )}

      <Center>
        <Button
          colorScheme="teal"
          size="lg"
          variant="outline"
          borderRadius="lg"
          onClick={() => {
            addComment();
            setUsername('');
            setTagname('');
            setHeading('');
            setText('');
          }}
        >
          Post
        </Button>
      </Center>
    </Box>
  );
}

export default Posting;
