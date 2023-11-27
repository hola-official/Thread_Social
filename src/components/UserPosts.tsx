import React from "react";
import { Flex, Avatar, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPosts = () => {
    return (
        <Link to={"/:aliumusa/post/:1"}>
            <Flex gap={3} mb={4} py={5}>
                <Flex flexDir={"column"}>
                    <Avatar src="/post1.png" size={"md"} name="Mark Zuckerberg" />
                    <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
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
                <Flex flex={1} flexDir={'column'} w={'full'}>
                    <Flex>
                        <Text>Aliu Musa</Text>
                        <Image></Image>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    );
};

export default UserPosts;
