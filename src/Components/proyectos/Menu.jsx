import React from 'react'

function Menu({menuItem}) {
  return (
    <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt=""/>
                            <h2 className='project__title'>{item.title}</h2>
                            <a href={item.url} className='btn__ver' target="_blank"> Ver Mas</a>
                        </div>
                    </div>
                })
            }
        </div>
  )
}

export default Menu