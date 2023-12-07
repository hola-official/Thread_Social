import React, { useState, useEffect } from 'react'
import UserHeader from '../components/UserHeader'
import UserPosts from '../components/UserPosts'
import { useParams } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const UserPage = () => {
  const [user, setUser] = useState(null)
  const { username } = useParams()
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json()

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        // console.log(data);

        setUser(data)
      } catch (error) {
        showToast("Error", error, "error")

      }
    }
    getUser();
  }, [username, showToast])

  if (!user) return null
  return (
    <>
      <UserHeader user={user} />
      <UserPosts likes={200} replies={50} postImg={'/post1.png'} postTitle={'What did you think about this guy'} postTime={'1d'} />
      <UserPosts likes={50} replies={10} postImg={'/post2.png'} postTitle={'This is great!!'} postTime={'5d'} />
      <UserPosts likes={10} replies={20} postImg={'/post3.png'} postTitle={'Wow! awesome'} postTime={'8d'} />

    </>
  )
}

export default UserPage