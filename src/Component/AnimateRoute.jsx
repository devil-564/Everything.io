import React from 'react'
import Home from "./Home"
import { useEffect, useState } from "react";
import CategoryItems from "./CategoryItems";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import IndividualItem from "./IndividualItem";
import { AnimatePresence } from "framer-motion";
import ValidateUser from "./ValidateUser";
import Login from "./Login";
import Cart from './Cart';

import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

let API = "https://fakestoreapi.com/products/1";



const AnimateRoute = () => {

    const [categoryItem, setCategoryItem] = useState([])

    const [items, setItems] = useState({ title: "", description: "", price: "", image: "", rate: "", count: "" });

    let [chosenItem, setChosenItem] = useState({ titleI: "", imageI: "", priceI: "", descriptionI: "", rateI: "", countI: "" });

    let [cartItems, setCartItems] = useState([]);

    let [cartNumber, setCartNumber] = useState(0);

    const [icon, setIcon] = useState("#010101");

    let location = useLocation();



    const fetchSpecific = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        if (data) {
            setItems({
                title: data.title,
                description: data.description,
                price: data.price,
                image: data.image,
                rate: data.rating.rate,
                count: data.rating.count
            });

            console.log(data.rating.rate);
        }

        // const arrCart = [];

    }

    useEffect(() => {
        fetchSpecific(API);
    }, []);

    let props = {
        items: items,
    }


    const handleOnchange = (e) => {
        e.preventDefault();
    }


    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/validate" element={<ValidateUser />}></Route>

                <Route exact path="/" element={<><Navbar setCategoryItem={setCategoryItem} icon={icon} cartNumber={cartNumber} /><Home {...props} /></>}></Route>

                <Route exact path="/category" element={<><Navbar setCategoryItem={setCategoryItem} icon={icon} cartNumber={cartNumber} />

                    <div className="items-container" onChange={handleOnchange} >
                        <CategoryItems categoryItem={categoryItem} setChosenItem={setChosenItem} />
                    </div></>}></Route>

                <Route exact path="/signUp" element={<SignUp />}></Route>
                <Route exact path="/login" element={<Login setIcon={setIcon} />}></Route>

                <Route exact path="/individual" element={<><Navbar setCategoryItem={setCategoryItem} icon={icon} cartNumber={cartNumber} /><IndividualItem chosenItem={chosenItem} icon={icon} setCartItems={setCartItems} cartItems={cartItems} setCartNumber={setCartNumber} cartNumber={cartNumber} /></>}></Route>

                <Route exact path="/cart" element={
                    <>
                    <Navbar setCategoryItem={setCategoryItem} icon={icon} cartNumber={cartNumber} />
                    <Cart cartItems={cartItems} cartNumber={cartNumber} />
                    </>
                    }></Route>

            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoute
