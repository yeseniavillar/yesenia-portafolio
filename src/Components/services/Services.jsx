import React, { useState } from 'react'
import './services.css';

const Services = () => {
   const [toggleState, setTogleState] = useState(0);

   const toggleTab = (index) =>{
      setTogleState(index);
   }
  return (
    <section className='services section' id='services'>
        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-arrow service__icon'></i>
                    <h3 className='services__title'> Designer UI</h3>
                </div>
                    <span className='services__button' onClick={()=> toggleTab(1)}> Ver mas  <i className='uil uil-arrow-right service__button-icon'></i></span>

                  <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                        <div className='services__modal-content'>
                        <i onClick={()=> toggleTab (0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'></h3>
                        <p className='service__modal-description'>El modal, rayón HWM (por las inciales de High Wet Modulus) o «fibra polinósica» es una fibra
                         artificial de celulosa regenerada; es decir, un tipo de rayón, conocida comercialmente con el nombre modal, una variedad de la viscosa, 
                         pero mucho más resistente al agua.</p>
                              <ul className='services__modal-services grid'>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>

                              </ul>
                        </div>
                  </div>
            </div>


            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid service__icon'></i>
                    <h3 className='services__title'> Programcion Web</h3>
                </div>
                    <span className='services__button'onClick={()=> toggleTab(1)}> Ver mas  <i className='uil uil-arrow-right service__button-icon'></i></span>

                  <div className={toggleState === 1 ? "services__modal active-modal":"services__modal"}>
                        <div className='services__modal-content'>
                        <i onClick={()=> toggleTab (0)} className='uil uil-times service__modal-close'></i>
                        <h3 className='services__modal-title'></h3>
                        <p className='service__modal-description'>El modal, rayón HWM (por las inciales de High Wet Modulus) o «fibra polinósica» es una fibra
                         artificial de celulosa regenerada; es decir, un tipo de rayón, conocida comercialmente con el nombre modal, una variedad de la viscosa, 
                         pero mucho más resistente al agua.</p>
                              <ul className='services__modal-services grid'>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>
                                <li className='services__modal-service'> 
                                   <i className='uil uil-check-circle service__modal-icon'></i>
                                   <p className='services__modal-info'>
                                   El modal es un 50% más absorbente que el algodón
                                   </p>
                                </li>

                              </ul>
                        </div>
                  </div>
            </div>
         </div>
    </section>
  )
}

export default Services