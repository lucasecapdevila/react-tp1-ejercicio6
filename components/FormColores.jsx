import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import ListaColores from './ListaColores'

const FormColores = () => {
  const style = {
    height: '120px',
    width: '120px',
    border: '1px solid black',
    background: '#fff'
  }

  return (
    <section>
      <Form>
        <Form.Group className='my-4 mx-auto d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between'>
          <div className='mx-auto' style={style} />
          <FloatingLabel
            controlId="floatingInput"
            label="Ingrese un color"
            className='my-4 inputColor'
          >
            <Form.Control
              type='text'
              placeholder="Ingrese un color"
            />
          </FloatingLabel>
          <Button variant='success' className='mx-auto'>Guardar color</Button>
        </Form.Group>
      </Form>

      <ListaColores />
    </section>
  )
}

export default FormColores