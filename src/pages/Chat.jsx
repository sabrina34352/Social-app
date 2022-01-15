import React from 'react'
import {Box,Flex, VStack, Text, SimpleGrid} from '@chakra-ui/react'
function Chat() {
    return (
      <Flex gap={5}>
        <VStack w={['200px', '350px', '500px']} border="2px" borderColor="gray">
          <Text fontSize="20px">People to chat with</Text>
          <SimpleGrid spacing={3}>
            <Text>UserName</Text>
            <Text>UserName</Text>
            <Text>UserName</Text>
            <Text>UserName</Text>
            <Text>UserName</Text>
            <Text>UserName</Text>
          </SimpleGrid>
        </VStack>
        <VStack w="full" border="2px" borderColor="gray" p="0 10px 10px">
          <Text>Actual chat</Text>
          <Box
            border="2px"
            borderColor="gray"
            w="full"
            h="full"
            textAlign="center"
          >
            <Text>
              I dont know how to implement chat, imma reinvent fucking wheel
              again
            </Text>
          </Box>
        </VStack>
      </Flex>
    );
}

export default Chat
