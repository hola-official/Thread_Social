import React, { useRef, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Textarea,
  Text,
  Input,
  Flex,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import usePreviewImg from "../hooks/usePreviewImg";
import { BsFillImageFill } from "react-icons/bs";

const CreatePosts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [postText, setPostText] = useState("");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
  const imageRef = useRef(null);

  const handleTextChange = async () => {
    try {
    } catch (error) { }
  };
  return (
    <>
      <Button
        position={"fixed"}
        bottom={10}
        right={10}
        leftIcon={<AddIcon />}
        bg={"gray"}
        onClick={onOpen}
      >
        Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <FormControl>
              <Textarea
                placeholder="Post content goes here"
                onChange={handleTextChange}
                value={postText}
              />

              <Text
                fontSize={"xs"}
                fontWeight={"bold"}
                textAlign={"right"}
                m={1}
                color={"gray.800"}
              >
                500/500
              </Text>

              <Input
                type="file"
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />
              <BsFillImageFill
                style={{ marginLeft: "5px", cursor: "pointer" }}
                size={16}
                onClick={() => imageRef.current.click()}
              />
            </FormControl>

            {imgUrl && (
              <Flex mt={"full"} position={"relative"}>
                <Image
                  src={imgUrl}
                  alt="select img"
                  style={{
                    width: "100%",
                  }}
                />
                <CloseButton
                  bg={"gray.800"}
                  position={"absolute"}
                  top={2}
                  right={2}
                  onClick={() => {
                    setImgUrl("");
                  }}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePosts;
