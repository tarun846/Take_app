import React from 'react'
import Invoice from './Invoice';

function LeftSidebar({handleclick2}) {
    return (
        <div className = 'sidebar right_Sidebar' >
        <div className = 'cross_right-container  ' >  
            <h3>  order Details </h3>   
         <svg onClick = {handleclick2} className = 'cross_bini' viewBox="0 0 24 24" focusable="false"  aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                </div>
           <div className = 'right_sidebar' >
          <h3>  Contact </h3>
          <div className = 'right_formcontainer' >
          <h4> Name </h4>
          <input/>

          <h4> Contact </h4>
          <input/>

          </div>

          <div className = 'right_formcontainer ' >
          <h4> Delivery </h4>
          {/* <input type ='radio' value = 'delivery' className = 'delivery'/>
          <input type ='radio' value = 'delivery' style ={{  border: 0,  boxShadow: 0,}}/> */}

<h4> Address </h4>
          <input/>
          <input/>

          <h4> Postal code </h4>
          <input/>
          </div>



          <Invoice/>

           </div>
        </div>
    )
}

export default LeftSidebar;
