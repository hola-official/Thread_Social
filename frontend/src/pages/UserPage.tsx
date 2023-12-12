import React, { useState, useEffect } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";
import Post from "../components/Post";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [fetchingPosts, setFetchingPosts] = useState(false);

  useEffect(() => {
   

    const getPosts = async () => {
      setFetchingPosts(true);
      try {
        const res = await fetch(`/api/posts/user/${username}`);
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setFetchingPosts(false);
      }
    };
    getPosts()
  }, [username, showToast]);



  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }
  return (
    <>
      <UserHeader user={user} />
      {!fetchingPosts && posts.length === 0 && <h1>User has no posts</h1>}

      {fetchingPosts && (<Flex justifyContent={'center'} my={12} >
        <Spinner size={'xl'} />
      </Flex>)}

      {posts.map((post) => (
        <Post key={post._id} post={post} postedBy={post.postedBy} />
      ))}
      {/* <UserPosts likes={200} replies={50} postImg={'/post1.png'} postTitle={'What did you think about this guy'} postTime={'1d'} />
      <UserPosts likes={50} replies={10} postImg={'/post2.png'} postTitle={'This is great!!'} postTime={'5d'} />
      <UserPosts likes={10} replies={20} postImg={'/post3.png'} postTitle={'Wow! awesome'} postTime={'8d'} /> */}
    </>
  );
};

export default UserPage;
