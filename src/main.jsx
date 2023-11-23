import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha:900')(props),
      bg: mode('gray.100', '#101010')(props)
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
