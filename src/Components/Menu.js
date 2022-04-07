import React , {useState} from 'react'
import Popup from './Popup';
import Modal from 'react-modal';
import toast  from 'react-hot-toast';
function Menu({data,cart, setcart}) {

   
    let sahi =  data.map((e, i)=>{
  return <Content  items = {e}  key = {i} cart = {cart} setcart = {setcart} />
   })

    return (
        <div className = 'Menus' >
           {sahi} 
        </div>
    )
}

function Content({items,cart, setcart}) {

const {baseprice,price,image,id,title} = items
const [modalIsOpen, setIsOpen] = useState(false);

let data = {
    price,
    image,
    baseprice,
    title,
    id
}
const toastoptions = {
  style : {
   fontFamily : 'monospace',
   borderRadius : 10,
   background : '#333',
   color : '#fff'    
 }
}
function openModal() {
  setIsOpen(true);

}

function afterOpenModal() {
 
  // subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
function handletoast() {
  toast.success(' Added to Cart', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    console.log(data);
    setcart([...cart ,data   ])
    console.log(cart);
}
Modal.setAppElement('body');
    return(
        <>
    
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
           <Popup  data = {data} />
      </Modal>
        <div className = 'item_Container' onClick = {handletoast}  >
  <div className = 'whole_container' >
  <img src = {image}  onClick={openModal} />
  <h6> {title} </h6>
 
  </div>
 <div>
 <span> ${baseprice} </span>
 </div>

        </div>
        </>
    )
}

export default Menu
