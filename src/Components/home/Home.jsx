import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import imgHome from '../../assets/img/header-imag1.png'
 
const Home = () => {
  return (
    <section className=' home section'id='home'>
       <div className='home_container container grid'>
             <div className='home_content grid'>
                <Social/>
                <Data/>
                <div className='home_img'>
                <img src={imgHome} alt="Header Img"/>
                </div>
             </div>
       </div>
    </section>
       
  )
}

export default Home