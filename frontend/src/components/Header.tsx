import React from "react";
import { useRecoilValue } from "recoil";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import userAtom from "../atoms/userAtom";

const Header = () => {
        const { colorMode, toggleColorMode } = useColorMode();
        const user = useRecoilValue(userAtom)

        return (
                <Flex justifyContent={"center"} mt={6} mb="12">
                        {user && (
                                <Link as={RouterLink} to='/'>
                                        <AiFillHome size={24} />
                                </Link>
                        )}
                        {/* {!user && (
                                <Link as={RouterLink} to={'/auth'} onClick={() => setAuthScreen("login")} >
                                        Login
                                </Link>
                        )} */}
                        <Image
                                alt="logo"
                                w={6}
                                src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
                                onClick={toggleColorMode}
                                cursor={"pointer"}
                        />

                        {user && (
                                <Link as={RouterLink} to={`${user.username}`} >
                                        <RxAvatar size={30} />
                                </Link>
                        )}
                </Flex>
        );
};

export default Header;
