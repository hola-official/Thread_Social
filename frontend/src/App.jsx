import { Container } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { useRecoilValue } from 'recoil'
import userAtom from './atoms/userAtom'

function App() {
  const user = useRecoilValue(userAtom)
  console.log(user);

  return (
    <Container maxW='620'>
      <Header />
      <Routes>
        <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/:username' element={<UserPage />} />
        <Route path='/:username/post/:id' element={<PostPage />} />
      </Routes>
    </Container>
  )
}

export default App
