import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


function Header() {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT3 OpenAI
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur autem magni ut quam excepturi, natus ab hic voluptas quis dolores.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email  address'/>
          <button>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in the last 24hours</p>
        </div>         
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header