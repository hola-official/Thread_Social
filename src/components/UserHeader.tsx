import React from 'react'
import { VStack, Flex, Box, Text } from '@chakra-ui/layout'

const UserHeader = () => {
    return <VStack gap={4} alignItems={'start'}>
        <Flex justifyContent={'space-between'} w={'full'}>
            <Box>
                <Text></Text>
            </Box>
        </Flex>
    </VStack>
}

export default UserHeader