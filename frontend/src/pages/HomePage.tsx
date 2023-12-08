import React, { useEffect, useState } from "react";
import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const HomePage = () => {
  const [post, setPost] = useState([])
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        console.log(data);
        
      } catch (error) {
        console.log(error);

        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast]);

return (
  <>
  {!loading && post.length === 0 && (
    <Text>Pls follow a user to see feed posts</Text>
  )}
  
  {loading && (
    <Flex justifyContent={'center'}>
      <Spinner size={'xl'}/>
    </Flex>
  )}
  </>
)
};

export default HomePage;
