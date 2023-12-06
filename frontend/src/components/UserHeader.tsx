import React from "react";
import { VStack, Flex, Box, Text, Link } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { Portal } from "@chakra-ui/portal";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

const UserHeader = ({ user }) => {
    const toast = useToast();
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Success",
                description: "Profile link copied.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        });
    };
    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        {user.name}
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}>{user.username}</Text>
                        <Text
                            fontSize={"xs"}
                            bg={"gray.dark"}
                            color={"gray.light"}
                            p={1}
                            borderRadius={"full"}
                        >
                            threads.net
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    {user.profilePic && (
                        <Avatar name={user.name} src={user.profilePic} size={{ base: "md", md: "xl" }} />
                    )}
                    {!user.profilePic && (
                        <Avatar name={user.name} src="https://bit.ly/broken-link" size={{ base: "md", md: "xl" }} />
                    )}
                </Box>
            </Flex>
            <Text>{user.bio}</Text>
            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>576k followers</Text>
                    <Box w={1} h={1} bg={"gray.light"} borderRadius="%50"></Box>
                    <Link color={"gray.light"}>instagram.com</Link>
                </Flex>
                <Flex gap={2}>
                    <Box className="icon-container">
                        <BsInstagram cursor={"pointer"} size={24} />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO cursor={"pointer"} size={24} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.dark"}>
                                    <MenuItem bg={"gray.dark"} color={"#fff"} onClick={copyURL}>
                                        Click here
                                    </MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex
                    flex={1}
                    borderBottom={"1.5px solid white"}
                    justifyContent={"center"}
                    pb={"3"}
                    cursor={"pointer"}
                >
                    <Text fontWeight={"bold"}>Thread</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom={"1px solid gray"}
                    justifyContent={"center"}
                    pb={"3"}
                    color={'gray.light'}
                    cursor={"pointer"}
                >
                    <Text fontWeight={"bold"}>Replies</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;
