import React from 'react'
import feet from '../../assets/images/Rectangle 62.png'



const About = () => {
  return (
    <div className='about-container'>
 <div className='text-container'>

      <h1>Little Lemon</h1>
        <h3>Chicago</h3>
     <p>We are a family owned Mediterranean <br /> restaurant, focused on traditional <br /> recipes served with a modern twist. <br />
We are a family owned Mediterranean <br /> restaurant, focused on traditional <br /> recipes served with a modern twist. <br />
We are a family owned Mediterranean <br /> restaurant, focused on traditional <br /> recipes served with a modern twist.</p>
<div className='image-container'>
  <img src={feet} alt="little lemon" />
      </div>

    </div>
    </div>
  )
}

export default About