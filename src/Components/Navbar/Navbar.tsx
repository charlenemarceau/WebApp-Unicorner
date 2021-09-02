import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../img/logo@2x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar:React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }


  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if(window.innerWidth > 500) {
        setToggleMenu(false);
      }
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

    return (
      <nav>
        <div className="nav-container">
              <div className="logo">
                <NavLink exact to="/">
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
          {(toggleMenu || largeur > 768) && (
            <>
              <ul className="liste">
                <li className="items">
                  <NavLink exact to="/agency">
                  L'agence
                  </NavLink>
                </li>
                <li className="items">
                  <NavLink exact to="/Services">
                  Nos services
                  </NavLink>
                </li>
                <li className="items">
                  <NavLink exact to="/Work">
                  Nos réalisations
                  </NavLink>
                </li>
                <li className="items">
                  <NavLink exact to="/Contact">
                  Contact
                  </NavLink>
                </li>
                <li className="items">
                  <NavLink exact to="/">
                  EN
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          <div className="menu-burger" onClick={toggleNavSmallScreen} ><FontAwesomeIcon icon={faBars} size="lg"/></div>
        </div>
      </nav>
    )
}

export default Navbar;
