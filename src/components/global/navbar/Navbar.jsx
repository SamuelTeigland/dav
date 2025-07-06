import './navbar.css'
import { Hamburger } from '../../.././assets/assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [ isVisible, setVisible ] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <a href='/' className='navbar__logo--container'>
                    <img src="/images/mainLogo.png" alt="Delaware Audio Visual" className="navbar__image" />
                </a>
                <div className='navbar__link--container'>
                    <Link to='/'>
                        Services
                    </Link>
                    <Link target="_blank" to='https://catalog.delawareav.com/avcat/ctl8327/index.cfm'>
                        Products
                    </Link>
                    <Link to='/'>
                        About
                    </Link>
                    <Link to="/">
                        Clients
                    </Link>
                    <Link to="/">
                        Projects
                    </Link>
                    <Link to='/'>
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
                <Link to='/' onClick={ () => { setVisible(!isVisible); } }>
                    Services
                </Link>
                <Link target="_blank" to='/https://catalog.delawareav.com/avcat/ctl8327/index.cfm' onClick={ () => { setVisible(!isVisible); } }>
                    Products
                </Link>
                <Link to='/' onClick={ () => { setVisible(!isVisible); } }>
                    About
                </Link>
                <Link to="/" onClick={ () => { setVisible(!isVisible); } }>
                    Clients
                </Link>
                <Link to="/" onClick={ () => { setVisible(!isVisible); } }>
                    Projects
                </Link>
                <Link id='navbar__special--link' to='/' onClick={ () => { setVisible(!isVisible); } }>
                    Contact Us!
                </Link>

            </div>
        </div>
    )
}