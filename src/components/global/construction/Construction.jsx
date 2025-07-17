import './construction.css'
import { Link } from 'react-router-dom';

export default function Construction() {
    return (
        <div className="construction__container">
            <h1 className='construction__header'>Sorry!</h1>
            <p className='construction__paragraph'>This page is currently under construction. <span>It'll be up soon!</span></p>
            <div className='construction__subcontainer'>
                <Link to="/">
                    <button className='construction__button button__secondary'>Return Home!</button>
                </Link>
                <Link to="/contact">
                    <button className='construction__button button__tertiary'>Contact Us</button>
                </Link>
            </div>
        </div>
    )
}