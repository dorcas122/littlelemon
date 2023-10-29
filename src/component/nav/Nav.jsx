import React, { useState } from 'react'
import head from '../../assets/images/Logo.png'

const Nav = () => {
    const[menuOpen,setMenuOpen] = useState(false);

    const toggleMenu =()=>{
     setMenuOpen (menuOpen);  
    }
  return (
    <nav className= {`navbar ${menuOpen ? "open":""}`}>
    <a href="/" className='logo'>
        <img src={head} alt='Logo'/>
    </a>

<div className='menu-icon' >
   <div className='bar'></div> 
   <div className='bar'></div> 
   <div className='bar'></div> 
</div>

<ul className= {`nav-links ${menuOpen ? "visible" : ""}`}>
    <li>
       <a href="/">Home</a> 
    </li>

    <li>
       <a href="/">About</a> 
    </li>

    <li>
       <a href="/">Menu</a> 
    </li>


    <li>
       <a href="/">Order Online</a> 
    </li>

    <li>
       <a href="/">Reservation</a> 
    </li>

    <li>
       <a href="/">Login</a> 
    </li>
</ul>
    </nav>
  )
}

export default Nav