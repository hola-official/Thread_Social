import React from 'react'
import { VStack, Flex, Box, Text } from '@chakra-ui/layout'

const UserHeader = () => {
    return <VStack gap={4} alignItems={'start'}>
        <Flex justifyContent={'space-between'} w={'full'}>
            <Box>
                <Text
                    fontSize={"2xl"}
                    fontWeight={'bold'}
                >Aliu Musa</Text>
                <Flex gap={2} alignItems={'center'}>
                    <Text fontSize={"sm"}>aliumusa@99</Text>
                    <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} p={1} borderRadius={'full'}>threads.net</Text>
                </Flex>
            </Box>
        </Flex>
    </VStack>
}

export default UserHeader