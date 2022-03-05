import React , {useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import {  setProducts }  from '../Container/redux/actions/productAction'
import { Link } from 'react-router-dom';


function ProductBody() {

        const dispatch = useDispatch()
       const axiosfetch =  async  () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) =>  {
            console.log(err);
        })
        // console.log(response.data);
        dispatch(setProducts(response.data))
    }  

        useEffect(() => {
       axiosfetch()
         },[])

   
    const data = useSelector((state) => state.allproducts.products);
   
         
    
 
  
    return (
     <>
     { data.map((e) => {
         console.log(e.id);
return  (
    <>
    <div key = {e.id} >
        <Link to ={`/product/${e.id}`} >
      
        <div>
            <img src = {e.image} width = '100%' />
        </div>
    <div>
        {e.category}
    </div>
    </Link>
    </div>
    
    </>
)
     })  }
     </>
    )
}

export default ProductBody
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))