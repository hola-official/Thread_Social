import React from 'react'
import { Flex, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const UserPosts = () => {
    return <Link to={'/:aliumusa/post/:1'}>
        <Flex gap={3} mb={4} py={5}>
            <Avatar src='/directorPro.jpeg' />
        </Flex>
    </Link>

}

export default UserPosts