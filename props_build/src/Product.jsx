import React from 'react'

function Product(props) {
    console.log(props);
  return (
    <div>
        <div>Ürün Bilgileri</div>

        <hr/>
        
        <div>
        <div>İsim:{props.productName}</div>
        <div>Fiyat:{props.price} TL</div>
        </div>
        
        
    </div>
  )
}

export default Product