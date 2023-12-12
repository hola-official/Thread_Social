import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const useGetUserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { username } = useParams()
  const showToast = useShowToast()

}

export default useGetUserProfile