import { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import ListaColores from './ListaColores'

const FormColores = () => {
  const [color, setColor] = useState('')

  const coloresLS = JSON.parse(localStorage.getItem('listaColores')) || []
  const [colores, setColores] = useState(coloresLS)

  useEffect(() => {
    localStorage.setItem('listaColores', JSON.stringify(colores))
  },[colores])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
  }

  const borrarColor = (nombreColor) => {
    const copiaColores = colores.filter((color) => color !== nombreColor)
    setColores(copiaColores)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='my-4 mx-auto d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between'>
          <div className='mx-auto muestraColor' style={{background: color}} />
          <FloatingLabel
            controlId="floatingInput"
            label="Ingrese un color (nombre en inglés o código hexadecimal)"
            className='my-4 inputColor'
          >
            <Form.Control
              type='text'
              placeholder="Ingrese un color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              required
            />
          </FloatingLabel>
          <Button variant='success' className='mx-auto' type='submit'>Guardar color</Button>
        </Form.Group>
      </Form>

      <ListaColores colores={colores} borrarColor={borrarColor} />
    </section>
  )
}

export default FormColores