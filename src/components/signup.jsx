import React, { useState } from 'react';
import { Box, Text, Input, Button, Center } from '@chakra-ui/react';

function Signup() {
  const [errexist, setErrexists] = useState(false);
  const [error, setError] = useState({});
  const [tagname, setTagname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              setErrexists(true);
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
        <Box m="0 2em">
          <Text m={2}>UserName</Text>
          <Input
            // isInvalid={Object.keys(error).length !== 0 ? true : false}
            isInvalid={errexist}
            placeholder="Enter your name"
            value={username}
            onChange={event => {setUsername(event.target.value); setErrexists(false)}}
          />
          <Text m={2}>TagName</Text>
          <Input
          isInvalid={errexist}
            placeholder="Enter the tagname"
            value={tagname}
            onChange={event =>{
              setTagname(event.target.value)
              setErrexists(false); 
            }} 
          />
          <Text m={2}>Email address</Text>
          <Input
          isInvalid={errexist}
            placeholder="Enter your email address"
            value={email}
            onChange={event =>{
              setEmail(event.target.value);
              setErrexists(false);
            } }
          />
          <Text m={2}>Password</Text>
          <Input
          isInvalid={errexist}
            placeholder="Enter your password"
            value={password}
            onChange={event => {setPassword(event.target.value); setErrexists(false)}}
          />
          {errors()}
          <Center mt={7}>
            <Button
              variant="solid"
              p="20px 30px"
              onClick={() => {
                addUsers();
                if (Object.keys(error).length !== 0 || errexist) {
                  return false;
                } else {
                  setEmail('');
                  setPassword('');
                  setUsername('');
                  setTagname('');
                }
              }}
            >
              Sign up
            </Button>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
