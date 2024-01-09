import React from 'react'
import ItemColor from './ItemColor'
import { Container, Row } from 'react-bootstrap'

const ListaColores = ({colores, borrarColor}) => {
  return (
    <Container>
      <h2 className='text-center mb-4'>Lista de colores agregados</h2>
      <Row>
        {
          colores.map((color, posicionColor) => <ItemColor key={posicionColor} nombreColor={color} borrarColor={borrarColor} />)
        }
      </Row>
    </Container>
  )
}

export default ListaColores