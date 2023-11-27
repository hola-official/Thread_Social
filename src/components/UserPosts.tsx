import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { Avatar } from '@chakra-ui/avatar'

const UserPosts = () => {
    return <Link to={'/:aliumusa/post/:1'}>
        <Flex>
            <Avatar />
        </Flex>
    </Link>

}

export default UserPosts