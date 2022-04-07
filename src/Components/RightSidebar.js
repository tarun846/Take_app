import React from 'react'

function RightSidebar({title, handleclick}) {
    return (
        <div className = 'sidebar' > 
            <div  >
                <div className = 'cross_bini-container' >
                <svg onClick = {handleclick} className = 'cross_bini' viewBox="0 0 24 24" focusable="false"  aria-hidden="true"><path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path></svg>
                </div>
                <div className = 'text_container' >
           
            <div className = 'text_head' >
            <h6>   {title} </h6>
            </div>
            <div className = 'text_category' >
          <ul>
          <li> Fresh From Port  </li>
          <li> Fresh Fast Food </li>
          <li> Fresh Sea Food </li>
         
          </ul>
         </div>

      
          <div className = 'your_choices' >
          <div className = 'text_category' style = {{border : 'none'}} >
          <ul>
          <li> Admin  </li>
     
       
         
          </ul>
         </div>
          </div>

               
                </div>
                
                 
                
                
            </div>
        </div>
    )
}

export default RightSidebar
