import React from 'react'
import landingPage from "./assets/tamanna-rumee-eD1RNYzzUxc-unsplash.jpg"

const Home = ({}) => {
    return (
        <div
            // initial = {{scale : 0.7, translateX : "50%"}}
            // animate = {{scale : 1, translateX : "0%",transition : {duration : 0.9}}}
            className='home-container'>
            <img src={landingPage} alt="" className='imagelanding' />
            <h1 className='home-heading' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">EverYthing.io</h1>
            <h1 className='home-heading2' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">! Born to shop non stop !</h1>

        </div>
    )
}

export default Home
