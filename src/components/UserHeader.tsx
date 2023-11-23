import React from 'react'
import { VStack, Flex, Box, Text, Link } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/toast'
import { Portal } from '@chakra-ui/portal'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

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
            <Box>
                <Avatar
                    name='Aliu Musa'
                    src='/directorPro.jpeg'
                    size={'xl'}
                />
            </Box>
        </Flex>
        <Text>Founder, executive chairman and CEO of DLT Africa</Text>
        <Flex w={'full'} justifyContent={'space-between'}>
            <Flex gap={2} alignItems={'center'}>
                <Text color={'gray.light'} >576k followers</Text>
                <Box w={1} h={1} bg={'gray.light'} borderRadius='%50'></Box>
                <Link color={'gray.light'} >instagram.com</Link>
            </Flex>
            <Flex gap={2} >
                <Box className='icon-container'><BsInstagram cursor={'pointer'} size={20} /></Box>
                <Box className='icon-container'>
                    <Menu>
                        <MenuButton>
                            <CgMoreO cursor={'pointer'} size={20} />
                        </MenuButton>
                        <Portal>
                            <MenuList bg={'gray.dark'}>
                                <MenuItem bg={'gray.dark'}>Click here</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Box>
            </Flex>
        </Flex>
    </VStack>
}

export default UserHeader