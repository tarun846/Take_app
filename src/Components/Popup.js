import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'


function Popup({data}) {
    let {
        price,
        image,
        baseprice,
        title
    }  = data

    const [counter, setcounter] = useState(1)
    const [itemprice, setprice] = useState(baseprice)

    console.log(data);
    function increment() {
        setcounter(counter+1) 
        setprice( itemprice  + price )
    }
    function dicrement() {
           if (counter > 1) {
            setcounter(counter - 1 ) 
            setprice( itemprice  - price )
           }
    }
    function handleAdd() {
        toast.success('Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <div  className = 'Popup_container' onClick = {handleAdd} >
 <div>
 <img src= {image} />
 </div>
   <div>
   <button onClick = {increment} > + </button> <span>  {counter} </span>  <button onClick = {dicrement} > - </button>
   <h2> {itemprice} </h2>
   <h2> {title} </h2>

   </div>


        </div>
    )
}

export default Popup;
