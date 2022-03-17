import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'



function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possiblity" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam libero incidunt repellendus suscipit nostrum quisquam, itaque ratione natus praesentium nam veniam distinctio necessitatibus vel!
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility