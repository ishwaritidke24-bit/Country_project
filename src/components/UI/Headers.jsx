import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleToggleButton = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className={show ? "menu-mobile" : "menu-web"}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/country">Country</NavLink></li>
            <li><NavLink to="/favorites">Favorites</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        {/* Right Section: Theme Toggle + Hamburger */}
      
          <button className="ham-menu" onClick={handleToggleButton}>
            <GiHamburgerMenu />
          </button>
        </div>
      
    </header>
  );
};
