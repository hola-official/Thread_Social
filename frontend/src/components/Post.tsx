import React, { useEffect, useState } from "react";
import { Flex, Avatar, Box, Image, Text, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import { formatDistanceToNow } from 'date-fns'
import useShowToast from "../hooks/useShowToast";

const Post = ({ post, postedBy }) => {

  const [liked, setLiked] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const showToast = useShowToast()



  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${postedBy}`)
        const data = await res.json()
        console.log(data);
        if (data.error) {
          showToast("Error", data.error, "error")
          return;
        }
        setUser(data)
      } catch (error) {
        showToast("Error", error, "error")
        setUser(null)
      }
    }

    getUser()
  }, [postedBy, showToast])

  if (!user) return null

  return (
    <Link to={`/${user.username}/post/${post._id}`}>
      <Flex gap={3} mb={4} py={5}>
        <Flex alignItems={'center'} flexDir={"column"}>
          <Avatar src={user.profilePic} size={"md"} name={`${user.name} ${user.username}`} onClick={(e) => {
            e.preventDefault()
            navigate(`/${user.username}`)
          }} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2} ></Box>
          <Box pos={"relative"} w={"full"}>
            {post.replies.length === 0 && <Text textAlign={'center'}>😒</Text>}
            {post.replies[0] && (

              <Avatar
                src={post.replies[0].userProfilePic}
                size={"xs"}
                name={post.replies[0].username}
                pos={"absolute"}
                top={'0'}
                left={'15px'}
                padding={'2px'}
                onClick={(e) => {
                  e.preventDefault()
                  navigate(`/${user.username}`)
                }}
              />
            )}

            {post.replies[1] && (<Avatar
              src={post.replies[1].userProfilePic}
              size={"xs"}
              name={post.replies[0].username}
              pos={"absolute"}
              bottom={'0'}
              right={'-5px'}
              padding={'2px'}
            />)}

            {post.replies[2] && (<Avatar
              src={post.replies[2].userProfilePic}
              size={"xs"}
              name={post.replies[0].username}
              pos={"absolute"}
              bottom={'0'}
              left={'4px'}
              padding={'2px'}
            />)}

          </Box>
        </Flex>
        <Flex flex={1} flexDir={'column'} gap={2}>
          <Flex justifyContent={'space-between'} w={'full'} flex={1}>
            <Flex alignItems={'center'} w={'full'} onClick={(e) => {
              e.preventDefault()
              navigate(`/${user.username}`)
            }}>
              <Text>{user.username}</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>
            <Flex alignItems={'center'} gap={4} onClick={(e) => e.preventDefault()}>
              <Text fontSize={'xs'} textAlign={'right'} color={'gray.light'}>{formatDistanceToNow(new Date(post.createdAt))} ago</Text>
              <Menu>
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
              </Menu>
            </Flex>
          </Flex>
          <Text>{post.text}</Text>
          {post.img && (<Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
            <Image src={post.img} width={'full'} />
          </Box>)}

          <Flex>
            <Actions post={post} />
          </Flex>
         
        </Flex>
      </Flex>
    </Link>
  );
};

export default Post;
