import { Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import UserPage from './components/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'

function App() {

  return (
    <section>
      <Container maxW='620px'>
        <Header />
        <Routes>
          <Route path='/:username' element={<UserPage />} />
          <Route path='/:username/post/:pid' element={<PostPage />} />
        </Routes>
      </Container>
    </section>
  )
}

export default App
