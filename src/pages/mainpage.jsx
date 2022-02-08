import React, { useState, useEffect } from 'react';
import { Flex, VStack, Text, Box, Heading, Divider } from '@chakra-ui/react';
import CommentsList from '../components/commentsList';

function Mainpage() {
  const [comments, setComments] = useState({ comments: [] });
  const [loaded,setLoaded] = useState(false);
  
  useEffect(() => {
    let isMounted = true;
    fetch('http://localhost:8000/api/posting/add-comment')
      .then(result => result.json())
      .then(json => {
        if(isMounted){
          setComments(json)
          setLoaded(true)
        }
      })
      .catch(err => console.log(err));
      return ()=>{isMounted=false};
  }, []);

  // const { allcomments } = comments;
  if(!loaded){
    return<Text textAlign="center" fontSize={25}>Please Wait...</Text>
  }
  
  return (
    <>
      <Flex gap={5} m={1}>
        <VStack w="300px" display={['none', 'none', 'none', 'block']}>
          <Box border="2px" borderColor="black.400" borderRadius="lg">
            <Box pt="60px" textAlign="center" w="full" h="150px" bg="gray.200">
              <Text color="black">There will be someones photo</Text>
            </Box>
            <Flex justify="space-around" pt={2} pb={7}>
              <Text>Posts</Text>

              <Text>Following</Text>

              <Text>Followers</Text>
            </Flex>
          </Box>
          <Box textAlign="left" border="2px" borderColor="gray" w="300px">
            <Text m={1} fontWeight="semibold" fontSize="xl" lineHeight="tight">
              Who to follow:
            </Text>
            {/* Один юзер */}
            <Flex m={2} bg="gray.50">
              <Box w="50px" h="50px" bg="gray.100">
                photo
              </Box>
              <Text color="black">Sabrina Babakulova</Text>
            </Flex>
          </Box>
          <Box></Box>
        </VStack>
        {/* MAIN PAGE THINGY */}
        <VStack w="full">
          <Box
            w="full"
            border="2px"
            borderColor="black.100"
            borderRadius={10}
            p={2}
          >
            <Heading>Other Posts</Heading>
            <Divider mt={5} mb={5} />
            {/* Один юзер */}
            {loaded && console.log(comments)}
            {loaded && <CommentsList comments={comments} />}
            {/* 
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2} justify="flex-end">
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Box p={5}>
                <Text fontSize={[22, 25]}>a fucking heading</Text>
                <Divider />
                <Text noOfLines={[1, 2, 3]}>Big place for someones text</Text>
              </Box>
            </Box>
            */}
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Mainpage;
