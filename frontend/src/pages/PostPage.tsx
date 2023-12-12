import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { Portal } from "@chakra-ui/portal";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from "@chakra-ui/menu";
import Actions from '../components/Actions';
import Comments from '../components/Comments';

const PostPage = ({ postImg }) => {
  // const [liked, setLiked] = useState(false)
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
          {/* <Menu>
            <MenuButton>
              <BsThreeDots cursor={'pointer'} />
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem color={'gray.light'}>Mute</MenuItem>
                <MenuDivider />
                <MenuItem color={'red'}>Block</MenuItem>
                <MenuDivider />
                <MenuItem color={'gray.light'}>Hide</MenuItem>
                <MenuDivider />
                <MenuItem color={'red'}>Report</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu> */}
        </Flex>
      </Flex>
      <Text my={3}>Hello gbogbo aye!!!</Text>
      <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
        <Image src='/post1.png' width={'full'} />
      </Box>

      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex color={'gray.light'} gap={2} fontSize={'sm'} alignItems={'center'}>
        <Text>200 replies</Text>
        <Box w={0.5} h={0.5} bg={"gray.light"}></Box>
        <Text>{21 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={2}>
          <Text fontSize={'2xl'}>👋</Text>
          <Text color={'gray.light'}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      {/* <Comments username={'Ryan Florence'} likes={12} createdAt={'2 min ago'} userAvatar={'https://bit.ly/ryan-florence'} comment={"Keep it up!!"} /> */}
    </>
  )
}

export default PostPage