import React, {useContext} from 'react'
import cartContext from "../context/note/cartContext"
import { motion } from "framer-motion"
const IndividualItem = (props) => {
    const context = useContext(cartContext)
    const {addcart, getcart, userPassword} = context

    let {setCartNumber,cartNumber} = props

    const { imageI, titleI, priceI, descriptionI, rateI, countI } = props.chosenItem

    const handleAddtoCart = async()=>{
        setCartNumber(++cartNumber);
        await addcart(userPassword,titleI,priceI,cartNumber)
        await getcart(userPassword);
        console.log(cartNumber)
    }

   
    return (
        <motion.div className='main-containerI'
        initial = {{ translateX : "50%"}}
        animate = {{ translateX : "0%",transition : {duration : 0.5, delay : 0.3}}}
        >
            <div className='sub-main-container1'>
                <img src={imageI} alt="" data-aos="flip-right" data-aos-delay="1000" />
            </div>

            <div className='sub-main-container2'>
                <h2>{titleI}</h2>
                <span className='sub-main-container1-span'>

                <p>Rating - {rateI}/5</p>
                    <h2 id='headingPrice'>$ {priceI}/-</h2>
                </span>


                <select name="delivery" id="delivery">
                    <option value="Cash on delivery">Cash on delivery</option>
                    <option value="2-Days Delivery">2-Days Delivery</option>
                    <option value="Within Week Delivery">Within Week Delivery</option>
                    <option value="Within Month Delivery">Within Month Delivery</option>
                </select>


                <p>Hurry up! Only {countI} items left</p>
                <div className="outer">
                    <div className="button">
                        <div className="text" onClick={handleAddtoCart}>Add to cart</div>
                    </div>
                </div>

                <span>
                    <h2>Detailed Description</h2>
                    <br />
                    <p>{descriptionI}</p>
                </span>
            </div>

        </motion.div>
    )
}

export default IndividualItem
