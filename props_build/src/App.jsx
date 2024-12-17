import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  return (
    // <div>
    //  <Product productName="Ayakkabı" price={3200}/>
    //  <hr/>
    //  <Product productName="Pantolon" price={700}/>
    // </div>

    <Container>
      <Product productName="Telefon" price={12200}/>
      </Container>
  )
}

export default App
