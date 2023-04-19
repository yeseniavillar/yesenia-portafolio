import React from 'react'
import './contact.css';
import bolaContact from '../../assets/img/sobre-contact.png'

const Contact = () => {
  return (
    <div className='contact section' id='contact'>
          <div className='contact__container container grid'>
            <div className='contact__content'>
                <div className='contenedor-img'>
                <img src={bolaContact} alt="foto-perfil" className='contact__img'/>
                </div>
            </div>
            <div className='contact__content'>
                <h3 className='contact__title'> Contactos</h3>

                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className='bx bx-map contactt__icon'></i>

                        <h3 className='contact__card-title'>Direccion</h3>
                        <span className='contact__card-data'> San Cristobal</span>
                        <a href='#' className='contact__button'> Escribeme
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                        

                    </div>
                    <div className='contact__card'>
                        <i className='bx bxl-whatsapp contactt__icon'></i>

                        <h3 className='contact__card-title'>WhatsApp</h3>
                        <span className='contact__card-data'>849-458-5110</span>
                        <a href='#' className='contact__button'> Escribeme
                        <i className='bx bx-right-arrow-alt  contact__button-icon'></i></a>
                    </div>
                    <div className='contact__card'>
                        <i className='bx bx-mail-send contactt__icon'></i>

                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>yeseniavillar@</span>
                        <a href='#' className='contact__button'> Escribeme
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                     </div>

                </div>

            </div>
          </div>
    </div>
  )
}

export default Contact