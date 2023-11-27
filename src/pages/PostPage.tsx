import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'

const PostPage = () => {
  return (
    <>
      <Flex w={'full'} gap={3} alignItems={'center'} justifyContent={'space-between'}>

        <Flex alignItems={'center'}>
          <Avatar src='/aliumusa.jpeg' name='Aliu Musa' size={'md'} mr={2} />
          <Text fontSize={'sm'}>Aliu Musa</Text>
          <Image src='/verified.png' h={4} w={4} ml={2} />
        </Flex>

        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={{ base: "xs", md: "sm" }} textAlign={'right'} color={'gray.light'} >2day</Text>
          <BsThreeDots cursor={'pointer'} />
        </Flex>
      </Flex>
      <Text my={3}>Hello gbogbo aye!!!</Text>
      <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
        <Image src='/post1.png' width={'full'} />
      </Box>
    </>
  )
}

export default PostPage