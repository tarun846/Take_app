import React from 'react'
import Logo from '../Assets/logo_Takeapp.png';
function Storenavbar({handleclick,handleclick2}) {
    
    return (
        <div className = 'store_nav' >
            <nav>
            <div className = 'logo' >
            <h1 onClick ={handleclick} >   &#9776; </h1>
            </div>
             <div className = 'store_navcontainer' >

             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="Search"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            
             <div className = 'sahisa'  >
             <svg onClick = {handleclick2} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-8 w-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
             </div>
             </div>
            </nav>
           
        </div>
    )
}

export default Storenavbar
