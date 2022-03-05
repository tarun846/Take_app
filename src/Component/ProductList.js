import React from 'react'
import { useSelector } from "react-redux";
import ProductBody from './ProductBody'
function ProductList() {

    return (
        <div style = {{ display : 'grid' , gridTemplateColumns : '1fr 1fr 1fr 1fr' ,minHeight : '100vh', width : '100%' }} >
                  <ProductBody   />
        </div>
    )
}

export default ProductList
