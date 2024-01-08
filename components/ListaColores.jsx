import React from 'react'
import ItemColor from './ItemColor'
import { Container, Row } from 'react-bootstrap'

const ListaColores = () => {
  return (
    <Container>
      <h2 className='text-center mb-4'>Lista de colores agregados</h2>
      <Row>
        <ItemColor />
      </Row>
    </Container>
  )
}

export default ListaColores