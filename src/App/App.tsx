import { Flex } from '@chakra-ui/react'
import '../../style/global.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Head from '../components/Head'
import Footer from '../components/Footer'
import Sobre from '../components/Sobre'

function App() {

  return (
    <Router>
      <Flex flexDirection="column">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </Flex>
    </Router>
  )
}

export default App