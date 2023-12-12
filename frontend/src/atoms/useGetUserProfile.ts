import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const useGetUserProfile = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { username } = useParams()

}

export default useGetUserProfile