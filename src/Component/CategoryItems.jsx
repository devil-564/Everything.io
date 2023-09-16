import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

const CategoryItems = (props) => {

    let navigate = useNavigate();

    const handleClick = (e) => {

        for (let i = 0; i < 7; i++) {
            if (props.categoryItem[i].id == e) {

                props.setChosenItem({
                    titleI: props.categoryItem[i].title,
                    imageI: props.categoryItem[i].image,
                    priceI: props.categoryItem[i].price,
                    descriptionI: props.categoryItem[i].description,
                    rateI: props.categoryItem[i].rating.rate,
                    countI: props.categoryItem[i].rating.count
                })
                break;
            }
        }

        navigate('/individual')

    }

    function myfunc(currItem) {
        const { image, title, id, price } = currItem;

        return (
            <motion.div className='item-container-one' key={id}
            initial = {{ translateX : "50%"}}
            animate = {{ translateX : "0%",transition : {duration : 0.5, delay : 0.3}}}
                >
                <img src={image} alt="" onClick={() => handleClick(id)} data-aos="zoom-in" data-aos-delay="200" className='itemImage'/>

                <h2 id='heading'>{title}</h2>

                <h2 id='heading1'>Only at $ {price}</h2>
            </motion.div>

        )
    }

    return (
        <>
            {props.categoryItem.map(myfunc)}
        </>
    )
}

export default CategoryItems
