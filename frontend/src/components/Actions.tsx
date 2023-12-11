import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "../hooks/useShowToast";

const Actions = ({ post: post_ }) => {
  const user = useRecoilValue(userAtom);
  const [post, setPost] = useState(post_);
  const [liked, setLiked] = useState(post.likes.includes(user?._id));
  const showToast = useShowToast();

  const handleLikeAndUnlike = async () => {
    if (!user)
      return showToast(
        "Error",
        "You must be logged in to like a post",
        "error"
      );
    try {
      const res = await fetch(`/api/posts/like/${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
      })

      const data = await res.json()
      console.log(data);
      if (!liked) {
        // add the id of the user to the likes array
        setPost({ ...post, likes: [...post.likes, user._id] })
      } else {
        // remove the id of the user from the likes array
        setPost({ ...post, likes: post.likes.filter((id) => id !== user._id) })
      }

      setLiked(!liked)

      // if(post) {
      //   showToast("Success", `post liked`, "success")
      // } else {
      //   showToast("Success", 'Post unliked successfully', "success")
      // }

    } catch (error) {
      showToast("Error", error.message, "error")
    }
  };

  return (
    <Flex flexDir={"column"}>
      <Flex
        cursor={"pointer"}
        gap={3}
        my={2}
        onClick={(e) => e.preventDefault()}
      >
        <svg
          aria-label="Like"
          fill={liked ? "rgb(237,73,86" : "transparent"}
          color={liked ? "rgb(237,73,86" : ""}
          height="19"
          role="img"
          viewBox="0 0 24 22"
          width="20"
          onClick={handleLikeAndUnlike}
        >
          <title>Like</title>
          <path
            d="M1 7.66c0 4.575 3.899 9.086 9.987 12.934.338.203.74.406 1.013.406.283 0 .686-.203 1.013-.406C19.1 16.746 23 12.234 23 7.66 23 3.736 20.245 1 16.672 1 14.603 1 12.98 1.94 12 3.352 11.042 1.952 9.408 1 7.328 1 3.766 1 1 3.736 1 7.66Z"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>

        <svg
          aria-label="Reply"
          fill="currentColor"
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <title>Reply</title>
          <path
            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
        
        <svg
          aria-label="Share"
          fill="currentColor"
          height="20"
          role="img"
          viewBox="0 0 24 24"
          width="20"
        >
          <title>Share</title>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
          ></line>
          <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></polygon>
        </svg>
      </Flex>

      <Flex color={"gray.light"} gap={2} fontSize={"sm"} alignItems={"center"}>
        <Text>{post.replies.length} replies</Text>
        <Box w={0.5} h={0.5} bg={"gray.light"}></Box>
        <Text>{post.likes.length} likes</Text>
      </Flex>
    </Flex>
  );
};

export default Actions;

const RepostSVG = () => {
  return(
    
  )
}

const ShareSVG = () {

}
