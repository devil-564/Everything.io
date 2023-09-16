import React, {useState} from "react";
import CartContext from "./cartContext"

const CartState = (props) => {

    const host = "http://localhost:5000"

    const [cartUse, setCartUse] = useState([])

    const [userPassword, setuserPassword] = useState();

    const addcart = async (userPassword, productName, productPrice, currentCartCount) =>{
        const response = await fetch(`${host}/api/cart/addtocart`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({userPassword, productName, productPrice, currentCartCount})
        })

        const res_json = await response.json()
        console.log(res_json)

    }

    const getcart = async(userPassword) => {
        const response = await fetch(`${host}/api/cart/getcart`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({userPassword})
        })

        const res_json = await response.json()
        // console.log(res_json)
        setCartUse(res_json)
    }

    const deletecart = async(productName) => {
        const response = await fetch(`${host}/api/cart/deletecart`, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({productName})
        })

        const res_json = await response.json()

    }
    return(
        <CartContext.Provider value = {{addcart, getcart, deletecart ,cartUse, userPassword, setuserPassword}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState