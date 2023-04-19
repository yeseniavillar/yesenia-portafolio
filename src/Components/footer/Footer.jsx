import React from 'react'
import './footer.css';


const Footer = () => {
  return (
    <footer className='footer'>
     <div className='footer__container container'>
       
            <ul className='foote__list'>
                 <a href='#' className='foote__link'></a>
            </ul>
         <div className='footer__social'>
            <a href='#'className='footer__social-link' target='_blank'>
               <i class="uil uil-linkedin-alt"></i>
            </a>
           <a href='#'className='footer__social-link' target='_blank'>
               <i class="uil uil-github-alt"></i>
           </a>
           <a href='#'className='footer__social-link' target='_blank'>
                <i class="uil uil-instagram"></i>
             </a>
        </div>
            <span className='footer__copy'>&#169; Yesenia code. All rigths reserved </span>
    </div>
   
    </footer>
  )
}

export default Footer