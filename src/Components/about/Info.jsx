import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
            <i className='bx bx-award about__icon'></i>
             <h3 className='about__title'>Experiencia</h3>
             <span className='about__subtitle'> +2 años</span>
        </div>
        <div className='about__box'>
              <i className='bx bx-briefcase-alt about__icon'></i>
             <h3 className='about__title'>Realizados</h3>
             <span className='about__subtitle'> +20 Proyectos</span>
        </div>
        <div className='about__box'>
            <i className='bx bx-time about__icon'></i>
             <h3 className='about__title'>Disponibilidad</h3>
             <span className='about__subtitle'> Siempre</span>
        </div>
        
    </div>
  )
}

export default Info