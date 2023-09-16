import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { motion } from "framer-motion"
import cartContext from '../context/note/cartContext'

const Login = (props) => {
    const context = useContext(cartContext)
    const {setuserPassword, userPassword} = context
    const { setIcon } = props
    let error = document.getElementById('error');
    const [creds, setCreds] = useState({ email: "", password: "" });
    let navigate = useNavigate();


    const onChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/logincustomer", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: creds.email, password: creds.password }),

        })

        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem('token', data.authtoken);
            setIcon("#db3333");
            setuserPassword(creds.email)
            navigate('/')
            console.log("You are successfully logged into your account", "success", userPassword);
        }
        
        else {
            error.innerText = "Please enter the correct details to login"
            console.log("Please enter the correct details")
        }

        setCreds({ email: "", password: "" })
    } 

    return (
        <motion.div
        initial = {{ translateX : "50%"}}
        animate = {{ translateX : "0%",transition : {duration : 0.5, delay : 0.3}}}
        >
            <div className="blob">
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
                    <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
                </svg>
            </div>
            <h2 id='error'></h2>
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            
                            <input type="text" placeholder="Enter your Email" name="email" value={creds.email} required onChange={onChange} />
                        </div>
                        <div className="row">
                            
                            <input type="password" placeholder="Enter your Password" name="password" value={creds.password} required onChange={onChange} />
                        </div>
                        <div className="row button">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Login
