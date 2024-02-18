import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {


  return (

<nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand" href="#" style={{color: "white"}}>
       Start Bootstrap
    </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        <NavItem title={'Home'}/>
        <NavItem title={'About'}/>
        <NavItem title={'Services'}/>
        <NavItem title={'Contact'}/>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar