import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cart_empty_logo } from '../utilis/constant';
import { useNavigate } from 'react-router-dom';
import { removeItems } from '../redux/cartSlice';

export const Cart = () => {

  const proditems = useSelector(store=>store.cart.items);
  const disptach = useDispatch();

  console.log(proditems);

  const navigate  = useNavigate();
  const clickHandler = ()=>{
    navigate("/");
  }

  const removeHandler = (id)=>{
    disptach(removeItems(id));
  }

   return proditems.length===0?<div className='cart-empty-logo-cont'>

      <img alt="cart-empty-logo" src={cart_empty_logo}></img>
     <h2 style={{marginTop:'5px', fontSize:'x-large'}}>Your cart is empty!</h2>
     <h4 style={{ marginTop: '5px',marginLeft:'40px' }}>Add items to it now.</h4>
     <button style={{ marginTop: '5px', marginLeft: '55px' }} onClick={clickHandler}>Shop Now</button>

   </div> : (
    <div className='cart-container'>
      {
        proditems.map((item)=>{
          return <div className='pro-card' key={item.id}>
            <img alt="pro-logo" src={item.pro_img_url}></img>
            <h3>${item.price}</h3>
            <h4>{item.title}</h4>
            <h3>⭐{item.rating}</h3>
            <button onClick={()=>removeHandler(item.id)}>Remove Items</button>
          </div>
        })
      }
    </div>


  )
};
