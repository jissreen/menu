import React from 'react'
import { MenuList } from '../helpers/MenuList'

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
            {MenuList}

        </div>
      
    </div>
  )
}

export default Menu
