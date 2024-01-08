import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ItemColor = () => {
  const style = {
    height: '120px',
    width: '120px',
    border: '1px solid black',
    background: '#6c63c2'
  }

  return (
    <section>
      <Card>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title className='text-center'>Nombre del color</Card.Title>
        <div style={style} className='mx-auto my-2'></div>
        <Button variant="danger" className='align-self-end'>Eliminar</Button>
      </Card.Body>
    </Card>
    </section>
  )
}

export default ItemColor