import './footer.css'
// import { SecondaryLogo } from '../../../assets/assets'

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__logo--container'>
                <img src="/images/mainLogo.png" alt="Exact 3D Logo" className="footer__image" />
                <div className='footer__info--container'>
                    <div className='footer__address--container'>
                        <h2>
                            Address
                        </h2>
                        <p>
                            38 Reads Way, New Castle, DE 19720 
                        </p>
                    </div>

                    <div className='footer__service--container'>
                        <h2>
                            Service Locations
                        </h2>
                        <p>
                            All of Delaware, Eastern Maryland, Southeastern Pennsylvania, and South Jersey.
                        </p>
                    </div>
                </div>
            </div>
            <div className='footer__bottom--container'>
                <h2 className='footer__subheader'>Created with passion by <a target="_blank" rel="noopener noreferrer" href='https://websiteartificers.com'>Website Artificers</a> © 2025</h2>
            </div>
        </div>
    )
}