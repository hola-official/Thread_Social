import { Avatar, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './Actions'

const Comments = ({ comment, createdAt, likes, username, userAvatar, reply }) => {

    const [liked, setLiked] = useState(false)

    return (
        <>
            <Flex gap={4} my={2} py={2} w={'full'}>
                <Avatar src={userAvatar} size={'sm'} name={username} />
                <Flex flexDir={'column'} gap={1} w={'full'} >
                    <Flex justifyContent={'space-between'}
                        alignItems={'center'}
                        w={'full'}>
                        <Text fontSize={'sm'} fontWeight={'bold'}>JohnDoe</Text>

                        <Flex gap={2} alignItems={'center'}>
                            <Text fontSize={'sm'} color={'gray.light'}>{createdAt}</Text>
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
                    <Text>{comment}</Text>
                    <Actions liked={liked} setLiked={setLiked} />
                    <Text>{likes + (liked ? 1 : 0)} likes</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Comments