import React from 'react'

const Frontend = () => {
  return (
    <div className='skills__content'>
       <h3 className='skills__title'> Frontend Developer</h3>
       
       <div className='skills__box'>
        <div className='skill__group'>
            <div className='skill__data'>
                     <h3 className='skill__name'>HTML</h3>
                     <div className='progress-bar'>
                           <div className='html circo'><span>95%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>CSS</h3>
                     <div className='progress-bar'>
                           <div className='css circo'><span>80%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>React</h3>
                     <div className='progress-bar'>
                           <div className='react circo'><span>50%</span></div>
                     </div>
            </div>
            <div className='skill__data'>
                     <h3 className='skill__name'>WordPress</h3>
                     <div className='progress-bar'>
                           <div className='wordpress circo'><span>90%</span></div>
                     </div>
            </div>
           
          
      </div>
    </div>
      
        
       
    </div>
  )
}

export default Frontend