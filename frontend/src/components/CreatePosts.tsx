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
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";

const MAX_CHAR = 500
const CreatePosts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [postText, setPostText] = useState("");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
  const [loading, setLoading] = useState(false)
  const imageRef = useRef(null);
  const [remainingChar, setRemainingChar] = useState(MAX_CHAR)
  const user = useRecoilValue(userAtom)
  const showToast = useShowToast()
  const [posts, setPosts] = useState()
  const { username } = useParams()

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length > MAX_CHAR) {
      const truncatedText = inputText.slice(0, MAX_CHAR)
      setPostText(truncatedText)
      setRemainingChar(0)
    } else {
      setPostText(inputText)
      setRemainingChar(MAX_CHAR - inputText.length)
    }

  };

  const handleCreatePost = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/posts/create', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postedBy: user._id, text: postText, img: imgUrl })
      })
      const data = await res.json()
      if (data.error) {
        showToast("Error", data.error, "error")
      }
      console.log(data)
      showToast("Success", "post created successfully", "success")
      if (username === user.username) {
        setPosts([data, ...posts])
      }
      onClose()

    } catch (error) {
      showToast("Error", error, "error")
    } finally {
      setLoading(false)
    }
  }
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
                {remainingChar}/{MAX_CHAR}
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
            <Button colorScheme="blue" mr={3} onClick={handleCreatePost} isLoading={loading}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePosts;
