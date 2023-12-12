import { Flex } from '@chakra-ui/react'
import '../../style/global.css'
import Home from '../components/Home'
import Head from '../components/Head'
import Footer from '../components/Footer'

function App() {

  return (
    <Flex
      flexDirection="column"
    >
      <Head />
      <Home />
      <Footer />
    </Flex>
  )
}

export default App