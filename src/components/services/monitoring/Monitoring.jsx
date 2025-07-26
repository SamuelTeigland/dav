import './monitoring.css'

export default function Monitoring() {
    return (
        <div className="monitoring__container">
            <div className='monitoring__description'>
                <h2 className='monitoring__header'>DAV Monitoring</h2>
                <p className='monitoring__paragraph'>
                    At DAV, we're your proactive AV partner. We have systems that notify us of possible issues BEFORE they become a problem.
                </p>
                <div className="monitoring__paragraph--subcontainer">
                    <p>✓ Active monitoring with onsite and remote support services.</p>
                    <p>✓ End-user training to help you get the most out of your investment.</p>
                    <p>✓ We're never more than one phone call away.</p>
                </div>
            </div>
            <div className='monitoring__images'>
                <img src="/images/monitoring.jpg" alt="Delaware Audio Visual Monitoring" />
            </div>
        </div>
    )
}