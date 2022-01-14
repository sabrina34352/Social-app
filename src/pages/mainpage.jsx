import React from 'react';
import { Flex, VStack, Text, Box, Heading, Divider } from '@chakra-ui/react';

function Mainpage() {
  return (
    <>
      <Flex gap={5}>
        <VStack w="300px">
          <Box border="2px" borderColor="black.400" borderRadius="lg">
            <Box pt="60px" textAlign="center" w="300px" h="150px" bg="gray.200">
              <Text>There will be someones photo</Text>
            </Box>
            <Flex justify="space-around" pt={2} pb={7}>
              <Text>Posts</Text>

              <Text>Following</Text>

              <Text>Followers</Text>
            </Flex>
          </Box>
          <Box
            textAlign="left"
            border="2px"
            borderColor="gray"
            w="300px"
          >
            <Text m={1} fontWeight="semibold" fontSize="xl" lineHeight="tight">
              Who to follow:
            </Text>
            {/* Один юзер */}
            <Flex m={2} bg="gray.50">
              <Box w="50px" h="50px" bg="gray.100">
                photo
              </Box>
              <Text>Sabrina Babakulova</Text>
            </Flex>
          </Box>
          <Box></Box>
        </VStack>
        {/* MAIN PAGE THINGY */}
        <VStack>
          <Box
            w="780px"
            border="2px"
            borderColor="black.100"
            borderRadius={10}
            p={2}
          >
            <Heading>Other Posts</Heading>
            <Divider mt={5} mb={5} />
            {/* Один юзер */}
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>Big place for someones text</Text>
            </Box>
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>Big place for someones text</Text>
            </Box>
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>Big place for someones text</Text>
            </Box>
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>Big place for someones text</Text>
            </Box>
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>Big place for someones text</Text>
            </Box>
            <Box border="2px" borderColor="gray" p={3}>
              <Flex gap={4} pb={2}>
                <Text>UserName</Text>
                <Text>@somebody</Text>
                <Text>Time posted</Text>
              </Flex>
              <Text isTruncated>
                Big place for someones text and i mean any text bruhhh
              </Text>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Mainpage;
