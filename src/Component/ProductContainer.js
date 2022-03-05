import React from 'react';
import axios from 'axios';
import { useDispatch ,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProducts ,removeProducts  }  from '../Container/redux/actions/productAction'
function ProductContainer() {
const data = useSelector((state) => state.product);
const {productId} = useParams();
const dispatch = useDispatch();
console.log(data); 
async function sahi() {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>  {
        console.log(err);
    })
    dispatch(selectedProducts(response.data))
 
}

       
React.useEffect(() => {
  sahi()
  return () => {
  
    dispatch(removeProducts())
  }

}, [])

    return (
        
        <div>
      <img src =   {data.image} />
        </div>
    )
}

export default ProductContainer
