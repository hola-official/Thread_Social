import { Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLogout } from "react-icons/ai"
import { useRecoilState } from 'recoil'
import userAtom from '../atoms/userAtom'
import useShowToast from '../hooks/useShowToast'

const LogoutButton = () => {
  const setUser = useRecoilState(userAtom)
  const showToast = useShowToast()

  const handleLogout = async () => {
    try {
      const res = await fetch('api/users/logout', {
        method: "POST"
      })
      
    } catch (err) {
      
    }
  }
  return (
    <Button position={'fixed'} top={'30px'} right={'30px'} size={'sm'}>
      <AiOutlineLogout size={20} />
    </Button>
  )
}

export default LogoutButton