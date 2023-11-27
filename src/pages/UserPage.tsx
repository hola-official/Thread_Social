import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPosts from '../components/UserPosts'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPosts userAvartar={'https://bit.ly/tioluwani-kolawole'} username={'Kolisco'} postImg={'/post1.png'} postTitle={'Hello, Eku Ojo merin nile yii o'} />
      <UserPosts userAvartar={'https://bit.ly/tioluwani-kolawole'} username={'Holayimika'} postImg={'/post2.png'} postTitle={'Hello, Eku Ojo merin nile yii o'} />
      <UserPosts userAvartar={'https://bit.ly/tioluwani-kolawole'} username={'Holayimika'} postImg={'/post3.png'} postTitle={'Hello, Eku Ojo merin nile yii o'} />
    </>
  )
}

export default UserPage