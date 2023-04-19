import React from 'react'

export const Backend = () => {
  return (
    <div className='skills__content'>
    <h3 className='skills__title'> Backend Developer</h3>

    <div className='skills__box'>
    <div className='skill__group'>
            <div className='skill__data'>
                     <h3 className='skill__name'>SQL</h3>
                     <div className='progress-bar'>
                           <div className='sql circo'><span>40%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>PHP</h3>
                     <div className='progress-bar'>
                           <div className='php circo'><span>50%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>Node js</h3>
                     <div className='progress-bar'>
                           <div className='node circo'><span>50%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>Larabel</h3>
                     <div className='progress-bar'>
                           <div className='larabel circo'><span>30%</span></div>
                     </div>
            </div>
           
          
      </div>
    </div>
 </div>
  )
}
