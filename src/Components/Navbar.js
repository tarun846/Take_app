import React from 'react'
import Logo from '../Assets/logo_Takeapp.png'
function Navbar() {
    return (
        <header>

   
        <div className = 'Navbar' >
           <div className = 'Navbar_left' >
           <div className = 'logo' >
         <img src = {Logo}  />
           </div>
          <div className = 'Nav_links' >
          <ul>
           <li> Featuers </li>
           <li>Pricing</li>
           <li>FAQ</li>
           <li>Contact Us</li>
           </ul>
          </div>
           </div>

           <div className = 'Navbar_right' >
             <a href = '' > Login </a>
           </div>


        </div>
        </header>
    )
}

export default Navbar
