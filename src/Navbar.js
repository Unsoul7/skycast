import React from 'react'
import logoicon from './image-removebg-preview.png'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={logoicon} alt="" />
            <h2>SkyCast</h2>
        </div>
        <span class="material-symbols-outlined">menu</span>
    </nav>
  )
}

export default Navbar