import React from 'react'
import {useState, useEffect} from 'react';
import { FiStar } from "react-icons/fi";


import './Modal.css'
const Modal = () => {
 
     const [dataItems, setDataItems] = useState([]);
     const [currentItem, setCurrentItem] = useState([]);

    const getData = () =>{
    fetch("https://gist.githubusercontent.com/LuigiR0jas/debdf41add7704681d9f7c734f478ac2/raw/7e7e5ad88132640d659c3ec8e657d8e02af01aa7/crates.json")
    .then ((res) => res.json())
    .then ((data)=> setDataItems(data.data))
    
   }
  
   useEffect(()=>{
    getData();
   },[])




 const clickHandler = (id) => {
  return function(){
    const current = dataItems.find(el=> el.crate_id === id);
    setCurrentItem(current);
  }
 }



 return (
   <section className='wrapper-container'>
     <div className='modal-content'>
        <div className='mini-cards-container' >
         { 
          dataItems.map((item)=>(
            <div className='mini-card' key={item.crate_id} onClick={clickHandler(item.crate_id)}>
              <img className='mini-picture' alt='tea cup' src={item.picture} />
              <div className='mini-text'>
                <p>{item.name}</p>
                <p>{item.rating}</p>
                <FiStar />
              </div>  
            </div>
          ))

         }
        </div>

                 
        <div className='info-container'>
           <img className='item-picture' alt='tea cup' src={currentItem.picture}/>
           <h1 className='item-name'>{currentItem.name}</h1>
           <p className='p-info'>{currentItem.description}</p>

       { /* if iw wo */  }
          <div className='parent-lil'>
           {currentItem.content.map((el)=>(
           <div className='little-menu'>
          <img className='menu-picture' src={el.picture} />
           <p>{el.name}</p>
           <p>{el.description}</p>
         </div>
        ))}
        </div>
       


         </div>
         
    
  
        
          
        
     </div>
   </section>
  )


 }

export default Modal;