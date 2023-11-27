import React, {useState} from "react";
import { Flex, Avatar, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const UserPosts = () => {

    const [liked, setLiked] = useState()
    return (
        <Link to={"/:aliumusa/post/:1"}>
            <Flex gap={3} mb={4} py={5}>
                <Flex alignItems={'center'} flexDir={"column"}>
                    <Avatar src="/post1.png" size={"md"} name="Mark Zuckerberg" />
                    <Box w={"1px"} h={"full"} bg={"gray.light"} my={2} ></Box>
                    <Box pos={"relative"} w={"full"}>
                        <Avatar
                            src="/post1.png"
                            size={"xs"}
                            name="Wale Oloyin"
                            pos={"absolute"}
                            top={'0'}
                            left={'15px'}
                            padding={'2px'}
                        />
                        <Avatar
                            src="/post1.png"
                            size={"xs"}
                            name="Bella Sh,urda"
                            pos={"absolute"}
                            bottom={'0'}
                            right={'-5px'}
                            padding={'2px'}
                        />
                        <Avatar
                            src="/post1.png"
                            size={"xs"}
                            name="Mark Danfo Driver"
                            pos={"absolute"}
                            bottom={'0'}
                            left={'4px'}
                            padding={'2px'}
                        />
                    </Box>
                </Flex>
                <Flex flex={1} flexDir={'column'} gap={2}>
                    <Flex justifyContent={'space-between'} w={'full'} flex={1}>
                        <Flex alignItems={'center'} w={'full'}>
                            <Text>Aliu Musa</Text>
                            <Image src="/verified.png" ml={1} w={4} h={4} />
                        </Flex>
                        <Flex alignItems={'center'} gap={4}>
                            <Text color={'gray.light'}>1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text>Hello Thread!!!</Text>
                    <Box borderRadius={6} overflow={'hidden'} border={'1px solid'} borderColor={'gray.light'}>
                        <Image src="/post3.png" width={'full'} />
                    </Box>
                    <Flex>
                        <Actions liked={liked} setLiked={setLiked} />
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
};

export default UserPosts;
