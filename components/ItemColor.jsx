import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ItemColor = () => {
  const style = {
    height: '120px',
    width: '120px',
    border: '1px solid black',
    background: '#6c63c2'
  }

  return (
    <Col sm={12} md={4} lg={3} className='mb-2'>
      <Card>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title className='text-center'>Nombre del color</Card.Title>
        <div style={style} className='mx-auto my-2'></div>
        <Button variant="danger" className='align-self-end'>Eliminar</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default ItemColor