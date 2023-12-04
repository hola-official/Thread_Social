import React from 'react'
import { useRecoilValue } from 'recoil'
import LoginCard from '../components/LoginCard'
import SignUpCard from '../components/SignUpCard'

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom)
  return <>"login" ? <LoginCard /> : <SignUpCard /></>
}

export default AuthPage