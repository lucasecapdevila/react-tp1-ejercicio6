import React from 'react'
import ItemColor from './ItemColor'
import { Col, Container, Row } from 'react-bootstrap'

const ListaColores = () => {
  return (
    <Container>
      <h2 className='text-center mb-4'>Lista de colores agregados</h2>
      <Row>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
        <Col sm={12} md={4} lg={3} className='mb-2'>
          <ItemColor />
        </Col>
      </Row>
    </Container>
  )
}

export default ListaColores