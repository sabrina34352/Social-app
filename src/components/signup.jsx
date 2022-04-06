import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  Button,
  Center,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

function Signup() {
  const [error, setError] = useState({});
  const [tagname, setTagname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);
  };

  async function addUsers() {
    await fetch('http://localhost:8000/auth/registration', {
      method: 'post',
      body: JSON.stringify({
        tagname,
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
      
    })
      .then(res => {
        if (!res.ok) {
          res
            .json()
            .then(data => {
              setError(data);
            })
            .catch(err => console.log(err));
        } else {
          res.json();
          setError({});
        }
      })
      .catch(err => console.log('something went wrong', err));
  }

  function errors() {
    if (Object.keys(error).length !== 0) {
      return (
        <Text color="red.400" m={3}>
          {JSON.stringify(error)}
        </Text>
      );
    }
  }

  return (
    <>
      <Box mb={5}>
        <Text textAlign="center" fontSize="30px">
          Sign Up
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="user-name">User name</FormLabel>
            <Input
              placeholder="Enter your name"
              value={username}
              onChange={event => {
                setUsername(event.target.value);
              }}
            />
            <FormLabel htmlFor="tag-name">Tag name</FormLabel>
            <Input
              placeholder="Enter the tagname"
              value={tagname}
              onChange={event => {
                setTagname(event.target.value);
              }}
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              placeholder="Enter your email address"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              placeholder="Enter your password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />

            {errors()}
            <Center mt={7}>
              <Button
                type="submit"
                variant="solid"
                p="20px 30px"
                onClick={() => {
                  addUsers();
                }}
              >
                Sign up
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>
    </>
  );
}

export default Signup;