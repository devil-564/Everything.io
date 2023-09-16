import React, {useContext, useEffect} from 'react'
import Navbar from "./Navbar";
import cartContext from "../context/note/cartContext"


const Cart = (props) => {
  const context = useContext(cartContext)
  const {cartUse, getcart, deletecart, userPassword} = context;

  useEffect( () => {
    getcart(userPassword);
  })

  const handleClick = (e)=>{
    deletecart(e)
  }

  let totalPrice = 0;

  function myfunc(currcart) {
    const {productName, productPrice} = currcart;
    totalPrice += parseInt(productPrice);
    return (
        <div id='cart-container'>

          <div>
            <h1>{productName}</h1>
            <h1>$ {productPrice}</h1>  
          </div>

          <button onClick={() => handleClick(productName)}>X</button>
        </div>
    )
  }



  return (
    <>
      <div id='main-cart-container'>
        {cartUse ? cartUse.map(myfunc) : null}
      </div>
      <h1 id='totalpriceText'>Total Price - $ {totalPrice}</h1>
    </>
  )
}

export default Cart
