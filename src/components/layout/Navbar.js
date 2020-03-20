import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift, // the clock icon
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><FontAwesomeIcon icon={faGift} /> GiftyGif Finder</h1>
    </nav>
  )
}

export default Navbar