import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPosts from '../components/UserPosts'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPosts userAvartar={'https://bit.ly/tioluwani-kolawole'} username={'Kolisco'} postImg={'/post1.png'} postTitle={'Hello, Eku Ojo merin nile yii o'} />
      <UserPosts />
      <UserPosts />
    </>
  )
}

export default UserPage