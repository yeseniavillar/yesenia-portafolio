import { useState } from 'react'
import './proyectos.css'
import items from './allData';
import Menu from './Menu';
import Button from './Button';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

const Proyectos = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }

  return (
    <div className='proyectos container' id='projects'>
         <div lassName='title'>
         <h2 className='section__title'>
           Proyectos
         </h2>
         <Button button={buttons} filter={filter} />
         <Menu menuItem={menuItem}/>
         </div>
      </div>
  )
}

export default Proyectos