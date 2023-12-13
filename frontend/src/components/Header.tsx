import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { Button, Flex, Image, Link, useColorMode } from "@chakra-ui/react";
import userAtom from "../atoms/userAtom";
import { FiLogOut } from 'react-icons/fi'
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtoms";

const Header = () => {
        const { colorMode, toggleColorMode } = useColorMode();
        const user = useRecoilValue(userAtom)
        const logout = useLogout()
        const setAuthScreen = useSetRecoilState(authScreenAtom)

        return (
                <Flex justifyContent={'space-between'} mt={6} mb="12" alignItems={'center'} >
                        {user && (
                                <Link as={RouterLink} to='/'>
                                        <AiFillHome size={24} />
                                </Link>
                        )}

                        {!user && (
                                <Link as={RouterLink} to={'/auth'} onClick={() => setAuthScreen("login")}>
                                       Login
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
                                <Flex alignItems={'center'} gap={4}>
                                        <Link as={RouterLink} to={`/${user.username}`} >
                                                <RxAvatar size={24} />
                                        </Link>

                                        <Button  size={'xs'} onClick={logout}>
                                                <FiLogOut size={20} />
                                        </Button>
                                </Flex>
                        )}
                           {!user && (
                                <Link as={RouterLink} to={'/auth'} onClick={() => setAuthScreen("signup")}>
                                       Sign up
                                </Link>
                        )}
                </Flex>
        );
};

export default Header;
