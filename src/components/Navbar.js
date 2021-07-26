import React, {useState, useEffect} from 'react';
import netflix from './images/netflix.png';
import './Navbar.css';

function Navbar () {
  const [show, handleShow] = useState (false);

  useEffect (() => {
    window.addEventListener ('scroll', () => {
      if (window.scrollY > 100) {
        handleShow (true);
      } else {
        handleShow (false);
      }
    });
    return () => {
      window.removeEventListener ('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className="nav_logo" src={netflix} alt="natflix_logo" />
    </div>
  );
}

export default Navbar;
