import { fakedata } from "../fakedata";
import {Link} from 'react-router-dom'
import React from 'react'



function Imagegrid() {
   
    const data = fakedata.map((e)=>{
        return(
            <div key = {e.id} >
                <Link  to = {`/store/${e.id}`} >
               
                <img src = {e.img} />
                <h6> {e.name} </h6>
                <h6> {e.location} </h6>
                </Link>
            </div>
        )
    }) 

    return (
        <div className = 'Recipes_grid' >
            {data}
        </div>
    )
}

export default Imagegrid
