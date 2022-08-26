import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './State/index';


const Store = () => {
  const dispatch=useDispatch();

  const {withdrawMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);

  const [price,setPrice]=useState(1200); 
  useEffect=()=>{
    setPrice(1200);
  }
  return (
    <div>
        <h2>Buy Addidas Shoes</h2>
        <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c653d88f003245258132ab4a009c5169_9366/Galaxy_5_Shoes_Black_FW5717_01_standard.jpg" className='img img-thumbnail'/><br/>
        <p>Price : {price}</p>
        {/*
          <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.withdrawMoney(parseInt(price)))}>-</button>
           Add to Cart
          <button className='btn btn-success mx-2' onClick={()=>dispatch(actionCreators.depositMoney(parseInt(price)))}>+</button>
        */}
        <button className='btn btn-primary mx-2' onClick={()=>withdrawMoney(parseInt(price))}>-</button>
        Add to Cart
        <button className='btn btn-success mx-2' onClick={()=>depositMoney(parseInt(price))}>+</button>
        
    </div>
  )
}

export default Store
