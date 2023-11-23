import { Flex, Image, useColorMode } from "@chakra-ui/react"
import React from "react"


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return  <Flex justifyContent={"center"} mt={6} mb="12">
            <Image alt="logo"
                w={6} src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} onClick={toggleColorMode} cursor={"pointer"} />
        </Flex>
}

export default Header