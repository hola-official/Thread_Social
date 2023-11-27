import { Avatar, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={'full'} gap={3} alignItems={'center'}>
          <Avatar src='/aliumusa.jpeg' name='Aliu Musa' size={'md'} />
          <Flex alignItems={'center'} gap={1}>
          <Text>Aliu Musa</Text>
          <Image src='/verified.png' h={4} w={4}/>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default PostPage