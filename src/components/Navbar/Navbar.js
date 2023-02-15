import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
//import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img alt='app logo ' src={images.gericht}/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#Home'>Home</a></li>
      <li className='p__opensans'><a href='#About'>About</a></li>
      <li className='p__opensans'><a href='#menu'>menu</a></li>
      <li className='p__opensans'><a href='#awards'>awards</a></li>
      <li className='p__opensans'><a href='#contact'>contact</a></li>
    </ul>
    <div className='app__navbar-login'>
    <a href='#login' className='p__opensans'> Log In / Registear</a>
    <div/>
    <a href='/' className='p__opensans'>Book Table</a>
  </div>
  <div className='app__navbar-smallscreen'>
    <GiHamburgerMenu color='#fff'/>
  </div>
  </nav>
);

export default Navbar;
