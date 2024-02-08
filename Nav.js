import React from 'react'
import { NavLink } from 'react-router-dom'

function nav(props) {
  return (
 
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid text-justify">


    <ul className="navbar-nav">
       <li className="nav-item text-justify">
        <NavLink className="nav-link font-weight-bold" to="/login">login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link font-weight-bold" to="/form">Form</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link font-weight-bold" to="/table">Table</NavLink>
      </li> 
    </ul>
  </div>
</nav>
  )
}

export default nav