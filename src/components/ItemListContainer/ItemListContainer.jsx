import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({productos}) => {
  return 
  (
    <>
        {productos.map((producto) => (
          <Card key={producto.id} producto={producto} />))}
    </>
  )
}

export default ItemListContainer