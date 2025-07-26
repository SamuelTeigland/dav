import './design.css'

export default function Design() {
    return (
        <div className="design__container">
            <div className='design__description'>
                <h2 className='design__header'>DAV Design</h2>
                <p className='design__paragraph'>
                    At DAV, we innovate and integrate solutions that help you work smarter.
                </p>
                <div className="design__paragraph--subcontainer">
                    <p>✓ Understand your needs.</p>
                    <p>✓ Designing and reviewing a custom solution.</p>
                    <p>✓ Expertly installing the system.</p>
                </div>
            </div>
            <div className='design__images'>
                <img src="/images/design.jpg" alt="Delaware Audio Visual Design" />
            </div>
        </div>
    )
}