import React from 'react'
import LoginCard from '../components/LoginCard'
import SignUpCard from '../components/SignUpCard'

const AuthPage = () => {
  return <>"login" ? <LoginCard /> : <SignUpCard /></>
}

export default AuthPage