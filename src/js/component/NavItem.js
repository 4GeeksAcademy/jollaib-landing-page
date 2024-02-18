import React from 'react'

const styles = {color: "white"}

const NavItem = (props) => {
  return <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={styles}>{props.title}</a>
         </li>
}

export default NavItem