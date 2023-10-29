import React from 'react'
import feet from '../../assets/images/Rectangle 62.png'



const Footer = () => {
  return (
    <footer>
     <section>
        <div>
            <img src={feet} alt='floor'/>
        </div>
        <div>
            <h3>Doormat <br/> Navigation</h3>
            <ul>
               <li><a href='/'>Home</a></li> 
               <li><a href='/'>About</a></li> 
               <li><a href='/'>menu</a></li> 
               <li><a href='/'>Reservation</a></li> 
               <li><a href='/'>Order Online</a></li> 
               <li><a href='/'>Login</a></li> 
            </ul>
        </div>

        <div>
            <h3>Contact</h3>
            <ul className='text'>
            <li><a href='/'>Address</a></li>
            <li><a href='/'>Phone number</a></li>
            <li><a href='/'>email</a></li>
            </ul>
        </div>


        <div>
            <h3>Social media links</h3>
            <ul className='text'>
            <li><a href='/'>Address</a></li>
            <li><a href='/'>Phone number</a></li>
            <li><a href='/'>email</a></li>
            </ul>
        </div>
     </section>
    </footer>
  )
}

export default Footer