import React from 'react'
import './about.css';
import perfil from '../../assets/img/foto-perfil.png'
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
         <div className='about__container container grid'>
         <img src={perfil} alt="foto-perfil" className='about__img'/>

         <div className='about__data'>
            <Info/>
            <p className="about__description"> Soy <strong>Yesenia Villar Ramírez</strong> Licenciada en informática graduada en la universidad autónoma de santo Domingo (UASD). Me dedico a lo que es el diseño y programación web.
            Los framework y CMS en lo que trabajo son: WordPress, React y Next.
             </p>
             <a href="https://drive.google.com/file/d/1-TPATxl_6EdrcUW9fnSS03iNF1lmylxI/view?usp=share_link" target="_blank" rel="noopener noreferrer">
             Download CV <i className='bx bxs-download'></i></a>
                  
         </div>
     </div>
    </section>  
  )
}

export default About