import { Avatar, Divider, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const Comments = ({ reply, lastReply }) => {

    return (
        <>
            <Flex gap={4} my={2} py={2} w={'full'}>
                <Avatar src={reply.userProfilePic} size={'sm'} name={reply.username} />
                <Flex flexDir={'column'} gap={1} w={'full'} >
                    <Flex justifyContent={'space-between'}
                        alignItems={'center'}
                        w={'full'}>
                        <Text fontSize={'sm'} fontWeight={'bold'}>{reply.username}</Text>

                        {/* <Flex gap={2} alignItems={'center'}>
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
                        </Flex> */}
                    </Flex>
                    <Text>{reply.text}</Text>
                </Flex>
            </Flex>

            {!lastReply ? <Divider/> : null}
        </>
    )
}

export default Comments