import React from 'react'
import hero from '../../assets/images/Img_pop.png'


const Header = () => {
  return (
    <>

<header className='header'>
<section>
    <div className='banner'>
       <h2>Little Lemon</h2> 
       <h3>Chicago</h3>
       <p>We  are family owned Mediterraneran restaurant,focused on traditional recipes served wth a modern twist</p>
       <button>Reserve a table</button>
    </div>

    <div className='banner-img'>
      <img src={hero} alt=''/>  
    </div>
</section>
</header>

    </>
  )
}

export default Header