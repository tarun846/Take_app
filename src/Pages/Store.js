import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar';

import RightSidebar from '../Components/RightSidebar';
import Storenavbar from '../Components/Storenavbar';
import { fakedata } from '../fakedata';
import Menu from '../Components/Menu';
function Store() {
      const [state, setstate] = useState([])
      const [show, setshow] = useState(false)
      const [show1, setshow1] = useState(false)
      const [cart, setcart] = useState([])
      console.log(cart);
      function handleclick() {
        setshow(!show)
        setshow1(false)
      }
      function handleclick2() {
        setshow1(!show1)
        setshow(false)
       
      }
      const {Id} = useParams()
      
      let actual  = fakedata.filter((e)=> e.id === parseInt(Id) )
     const data = actual[0]
     
    
     
     const alphabet = "abcdefghijklmnopqrstuvwxyz"
     const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
      useEffect(() => {
      console.log('sahisa');
       async function name() {
        const data = await fetch(`https://api.spoonacular.com/food/menuItems/search?query=${randomCharacter}&number=6&apiKey=e7f8d21ee75d4fe797cde738a3b8e327`);
        const papa = await data.json();
   
       

        papa.menuItems.map(menu => {

          var price = Math.floor(Math.random() * 100);
          menu.items = 1;
          menu.price = price;
          menu.baseprice = price;;
         
        })
        setstate(papa.menuItems);
      
      }

     name()    
    }, [])

 
    return (
        <>
     
          <Storenavbar handleclick = {handleclick}  handleclick2 = {handleclick2} />
         
        
           <section className = 'store' > 
         
             <div className = 'storecontent' >
            <div className = 'storecontent_head' >
            <img src = {data.img}  alt = {data.img} />
            <h5> {data.name}  </h5>
            </div>
            <div className = 'storecontent_body'  >
               <h4> FRESH FROM PORT </h4>
             <Menu data = {state} cart = {cart} setcart = {setcart} />
             </div>

             <div className = 'storecontent_body'  >
               <h4> FRESH FAST FOOD </h4>
             <Menu data = {state} cart = {cart} setcart = {setcart}  />
             </div> 
             
            
        


 </div>
          
          
          </section> 
       
          { show === true ? <RightSidebar title = {data.name}   handleclick = {handleclick} /> : ' '}   
           { show1 === true  ?  <LeftSidebar handleclick2 = {handleclick2} /> : ' ' }
         
        </>
    )
}

export default Store
