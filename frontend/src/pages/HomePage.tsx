import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const HomePage = () => {
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getFeedPosts = async () => {
      try {
        const res = await fetch('/api/posts/feed');
        const data = await res.json();
      } catch (error) {
        console.log(error);
        
        showToast("Error", error, "error")
      }
    }
  }, [])
  
  return (
    <div>
      <Link to={'/markzuckerberg'}>
        <Flex w={'full'} justifyContent={'center'}  >
          <Button mx={'auto'}>Visit Profile Page</Button>
        </Flex>
      </Link>
    </div>
  )
}

export default HomePage