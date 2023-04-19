import React from 'react'
import './skills.css';
import Frontend from './Frontend';
import { Backend } from './Backend';

const Skills = () => {
  return (
        <section className='skills section' id='skills'>
               <div className='skill__container container grid'>
                 <Frontend/>
                <Backend/>
              </div> 
        </section>
  )
}

export default Skills