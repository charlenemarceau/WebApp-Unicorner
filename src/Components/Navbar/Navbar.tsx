import React, { useState, useEffect } from 'react';
import './navbar.css';

function NavBar() {

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
          {(toggleMenu || largeur > 500) && (
            <ul className="liste">
              <li className="items">Accueil</li>
              <li className="items">Accueil</li>
              <li className="items">Accueil</li>
              <li className="items">Accueil</li>
              <li className="items">Accueil</li>
            </ul>
          )}
          <button onClick={toggleNavSmallScreen} className="btn">btn</button>
        </nav>
    )
}

export default NavBar;
