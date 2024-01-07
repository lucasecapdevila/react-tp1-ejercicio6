import { Container } from 'react-bootstrap'
import './App.css'
import Footer from '../components/Footer'
import FormColores from '../components/FormColores'

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1>Administrar colores</h1>
        <FormColores />
      </Container>
      <Footer />
    </>
  )
}

export default App
