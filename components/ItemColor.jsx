import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ItemColor = ({nombreColor, borrarColor}) => {
  return (
    <Col sm={12} md={4} lg={3} className='mb-2'>
      <Card>
      <Card.Body className='d-flex flex-column align-items-center'>
        <Card.Title className='text-center'>{nombreColor}</Card.Title>
        <div style={{background: nombreColor}} className='mx-auto my-2 muestraColor'></div>
        <Button variant="danger" className='align-self-end' onClick={() => {borrarColor(nombreColor)}}>Eliminar</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default ItemColor