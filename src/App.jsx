import { Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <section>
      <Container maxW='620px'>
      <Routes>
        <Route path='/:username' element={<Home />} />
      </Routes>
      </Container>
    </section>
  )
}

export default App
