import React from 'react';
import pics from '../../assets/images/Rectangle 1 (1).png'
import bruchetta from '../../assets/images/Rectangle 2.png'
import lemon from '../../assets/images/Rectangle 10.png'



const Menu = () => {
  return (
    <>
      <div className='menu-container'>
        <div className='menu-header'>
          <h2>Specials!</h2>
          <button>Online Menu</button>
        </div>

        <div className='cards'>
          <div key={1} className='menu-items'>
            <img src={pics} alt="images" />
           <div className='menu-content'>
            <div className='heading'>
            <h3>Greek Salad</h3>
            <p>$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
           </div>
            <h4>Order a delivery</h4>
          </div>
      
          <div key={1} className='menu-items'>
            <img src={bruchetta} alt=" Salad" />
            <div className='menu-content'>
            <div className='heading'>
            <h3>Bruchetta</h3>
            <p>$ 5.00</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            </div>
            <h4>Order a delivery</h4>
          </div>

          <div key={1} className='menu-items'>
            <img src={lemon} alt="Greek Salad" />
            <div className='menu-content'>
              <div className='heading'>
              <h3>Lemon Dessert</h3>
              <p>$ 5.00</p>
              </div>
            <p >This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <h4>Order a delivery</h4>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Menu;
