import React, { useState } from 'react';
import { Link} from 'react-scroll';
import { Bars3Icon } from "@heroicons/react/24/solid";
import "../App.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex justify-between px-5 py-5 bg-orange-400 relative">
      <h3 className="font-extrabold text-xl tracking-widest">RSK</h3>
      <nav className="hidden md:block">
        <ul className="flex">
          <NavItem to="home">Home</NavItem>
          <NavItem to="education">Education</NavItem>
          <NavItem to="skills">Skills</NavItem>
          <NavItem to="projects">Projects</NavItem>
          <NavItem to="progress">Progress</NavItem>
        </ul>
      </nav>
      <button onClick={toggleMenu} className="text-white block md:hidden size-6">
        {menu ? <Bars3Icon /> : <Bars3Icon />}
      </button>
      {menu && (
        <nav className="md:hidden absolute top-full left-1/2 w-1/2 bg-orange-400 z-10">
          <ul className="flex flex-col text-center">
            <MobileNavItem to="home" onClick={toggleMenu}>Home</MobileNavItem>
            <MobileNavItem to="education" onClick={toggleMenu}>Education</MobileNavItem>
            <MobileNavItem to="skills" onClick={toggleMenu}>Skills</MobileNavItem>
            <MobileNavItem to="projects" onClick={toggleMenu}>Projects</MobileNavItem>
            <MobileNavItem to="progress" onClick={toggleMenu}>Progress</MobileNavItem>
          </ul>
        </nav>
      )}
    </header>
  );
}

const NavItem = ({ to, children }) => (
  <li className="text-white hover:text-black hover:-translate-y-1 font-extrabold px-3 tracking-widest text-xl">
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
    >
      {children}
    </Link>
  </li>
);

const MobileNavItem = ({ to, children, onClick }) => (
  <li className="text-white font-extrabold px-3 py-2 tracking-widest text-xl hover:text-black hover:-translate-y-1">
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
