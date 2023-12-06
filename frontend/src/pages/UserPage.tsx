import React, { useState } from 'react'
import UserHeader from '../components/UserHeader'
import UserPosts from '../components/UserPosts'

const UserPage = () => {
  const [user, setUser] = useState(null)
  return (
    <>
      <UserHeader  />
      <UserPosts likes={200} replies={50} postImg={'/post1.png'} postTitle={'What did you think about this guy'} postTime={'1d'} />
      <UserPosts likes={50} replies={10} postImg={'/post2.png'} postTitle={'This is great!!'} postTime={'5d'} />
      <UserPosts likes={10} replies={20} postImg={'/post3.png'} postTitle={'Wow! awesome'} postTime={'8d'} />
      
    </>
  )
}

export default UserPage