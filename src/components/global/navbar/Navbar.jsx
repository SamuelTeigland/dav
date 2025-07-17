import './navbar.css'
import { Hamburger, MainLogo } from '../../.././assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <Link to='/' className='navbar__logo--container'>
                    <MainLogo />
                </Link>
                <div className='navbar__link--container'>
                    <Link to='/services'>
                        Services
                    </Link>
                    <Link target="_blank" to='https://catalog.delawareav.com/avcat/ctl8327/index.cfm'>
                        Products
                    </Link>
                    <Link to='/about'>
                        About
                    </Link>
                    <Link to="/clients">
                        Clients
                    </Link>
                    <Link to="/projects">
                        Projects
                    </Link>
                    <Link to='/contact'>
                        <button className='button__secondary navbar__button'>
                            Contact Us!
                        </button>
                    </Link>
                    <div className='hamburger__container' onClick={
                        () => {
                            setVisible(!isVisible);
                        }
                    }>
                        <Hamburger />
                    </div>
                </div>
            </div>
            <div className={ isVisible === true ? 'hamburger__link--container shown__menu' : 'hamburger__link--container hidden__menu' }>
                <Link to='/services' onClick={ () => { setVisible(!isVisible); } }>
                    Services
                </Link>
                <Link target="_blank" to='/https://catalog.delawareav.com/avcat/ctl8327/index.cfm' onClick={ () => { setVisible(!isVisible); } }>
                    Products
                </Link>
                <Link to='/about' onClick={ () => { setVisible(!isVisible); } }>
                    About
                </Link>
                <Link to="/clients" onClick={ () => { setVisible(!isVisible); } }>
                    Clients
                </Link>
                <Link to="/projects" onClick={ () => { setVisible(!isVisible); } }>
                    Projects
                </Link>
                <Link id='navbar__special--link' to='/contact' onClick={ () => { setVisible(!isVisible); } }>
                    Contact Us!
                </Link>

            </div>
        </div>
    )
}