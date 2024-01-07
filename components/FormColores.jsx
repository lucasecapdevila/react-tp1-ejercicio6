import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

const FormColores = () => {
  const style = {
    height: '150px',
    width: '150px',
    border: '1px solid black',
    background: '#fff'
  }

  return (
    <>
      <Form>
        <Form.Group className='my-4 d-flex align-items-center'>
          <div className='mx-auto' style={style} />
          <FloatingLabel
            controlId="floatingInput"
            label="Ingrese un color"
            className='w-75'
          >
            <Form.Control
              type='text'
              placeholder="Ingrese un color"
            />
          </FloatingLabel>
          <Button variant='success' className='ms-auto'>Guardar color</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default FormColores