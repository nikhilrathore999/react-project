import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav1'>
        <div id='vertical'>The</div>
        <span id='auto'>CAR-INDIA</span>
      </div>
      <div>

        <nav className="stroke">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to='/Category/Hatch'>Hatchback</Link></li>
            <li><Link to="/Category/Sedan">Sedan</Link></li>
            <li><Link to="/Category/SUV">SUV</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar