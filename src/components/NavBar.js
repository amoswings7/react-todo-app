import React from 'react';
import logo from '../images/Amos Wings logo blank.png'

const NavBar = () => {
    return ( 
        <nav className='navbar'>
            <div className='logo-img'>
                <img src={logo} alt='Amos wings logo'/>
                <p>Amos Wings</p>
            </div>
        </nav>
     );
}
 
export default NavBar;