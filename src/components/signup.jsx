import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';

function signup() {
  return (
    <>
      <Box mb={5}>
        <Text  textAlign="center" fontSize="30px">
          Sign Up
        </Text>
        <Box m="0 2em">
          <Text m={2}>UserName</Text>
          <Input placeholder="Enter your name" />
          <Text m={2}>TagName</Text>
          <Input placeholder="Enter the tagname" />
          <Text m={2}>Email address</Text>
          <Input placeholder="Enter your email address" />
          <Text m={2}>Password</Text>
          <Input placeholder="Enter your password" />
        </Box>
      </Box>
    </>
  );
}

export default signup;
