import React from 'react'
import CartWidget from './CartWidget'

 export const Navbar = () => {
  return (
    <div className="container" style={{backgroundColor:"black"}}>
      <nav className="nav">
        <div className="nav_brand">
          <a className="nav_link" href="#" style={{textDecoration:"none", fontSize:"30px", color:"white"}}>NIGHT2 Events</a>
        </div>
        <ul className="nav_list">
          <li>
            <a className="nav_link1" href="#" style={{textDecoration:"none", color:"white", display:"inline-block", listStyle:"none"}}>Entradas</a>
          </li>
          <li>
            <a className="nav_link2" href="#" style={{textDecoration:"none", color:"white", display:"flex"}}>Consumiciones</a>
          </li>
          <li>
            <a className="nav_link3" href="#" style={{textDecoration:"none", color:"white", display:"flex"}}>
              <CartWidget/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar