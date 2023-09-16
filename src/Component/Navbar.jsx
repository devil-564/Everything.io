import React, { useEffect, useContext } from 'react'
let API = "https://fakestoreapi.com/products/category/";
import { Link, useLocation } from "react-router-dom";
import  cartContext  from "../context/note/cartContext";
import { useNavigate } from 'react-router'

const Navbar = (props) => {
  const context = useContext(cartContext);
  const {cartUse, getcart} = context
  let navigate = useNavigate();

  const handleClick = async (category) => {
    // let homeBtnId = document.getElementById('link-tag')

    // if(location.pathname === "/"){
    //   homeBtnId.innerText = "Everything.io"
    // }
    // else if(location.pathname === "/category"){
    //   homeBtnId.innerText = "Home"
    // }

    const response = await fetch(API + category);
    const data = await response.json();

    props.setCategoryItem(data);
    // console.log(data)
  }

  const moveToValidate = ()=>{
    navigate('/validate')
  }


  return (
    <>
      <div className='navbar'>
        <p><Link to="/" className="link-tag1" id="link-tag">EverYthing.io</Link></p>
        <div>
          <p onClick={() => handleClick("men's clothing")}><Link to="/category" className="link-tag">Men's Clothing</Link></p>
          <p onClick={() => handleClick("women's clothing")}><Link to="/category" className="link-tag">Women's Clothing</Link></p>
          <p onClick={() => handleClick("jewelery")}><Link to="/category" className="link-tag">Jewelery</Link></p>
          <p onClick={() => handleClick("electronics")}><Link to="/category" className="link-tag">Electronics</Link></p>
        </div>
           <i className= "fa-solid fa-user" style={{color: props.icon}} onClick={moveToValidate}></i>

          <Link to="/cart" style={{display : "flex", flexDirection : "row", justifyContent:"space-evenly"}}>
          <i class="fa-solid fa-cart-shopping" style={{color : 'black', fontSize : "2vw", marginLeft : "1vw"}} id = "cart-icon"></i>
          </Link>
        
      </div>
    </>
  )
}

export default Navbar
