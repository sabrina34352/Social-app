import React from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';

const CommentsList = ({ comments }) => (
  <>
    {comments.map((comment, key) => (
      <Box key={key} border="2px" borderColor="gray" p={3}>
        <Flex gap={4} pb={2} justify="flex-end">
          <Text>{comment.username}</Text>
          <Text>{comment.tagname}</Text>
        </Flex>
        <Box p={5}>
          <Text fontSize={[22, 25]}>{comment.heading}</Text>
          <Divider />
          <Text noOfLines={[1, 2, 3]}>{comment.text}</Text>
        </Box>
      </Box>
    ))}
  </>
);

export default CommentsList;
