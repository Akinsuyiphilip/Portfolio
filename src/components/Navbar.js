import React,{useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';



function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(() => {
            showButton()
        },[]);

    window.addEventListener('resize', showButton);


  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
           <p className='nav-logo'>Akin<span>P</span>hilip</p>
           <div className="menu-icon" onClick={handleClick}>
               <i className={ click ? 'fas fa-times' : 'fas fa-bars'}></i>
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className='nav-item'>
                    <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
               </li>
               <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       About
                    </Link>
               </li>
               <li className='nav-item'>
                    <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
               </li>
               <li className='nav-item'>
                    <Link to='/Hireme' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Hire Me
                    </Link>
               </li>
           </ul>

           {button && <Button buttonStyle='btn--outline'> Hire Me </Button>}
        </div>
    </nav>
    
    </>
  )
}

export default Navbar;