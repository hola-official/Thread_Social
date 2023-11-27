import React from "react";
import { Flex, Avatar, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPosts = () => {
    return (
        <Link to={"/:aliumusa/post/:1"}>
            <Flex gap={3} mb={4} py={5}>
                <Flex>
                    <Avatar src="/post1.png" size={"md"} name="Mark Zuckerberg" />
                    <Box w={1} h={"full"} bg={'gray.light'} my={2}></Box>
                </Flex>
            </Flex>
        </Link>
    );
};

export default UserPosts;
