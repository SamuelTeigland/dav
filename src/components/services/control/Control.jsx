import './control.css'

export default function Control() {
    return (
        <div className="control__container">
            <div className='control__images'>
                <img src="/images/control.jpg" alt="Delaware Audio Visual Control" />
            </div>
            <div className='control__description'>
                <h2 className='control__header'>DAV Control and Automation</h2>
                <p className='control__paragraph'>
                    Automate many of the tedious tasks that take away from an employee’s true focus. Ensures that customers and clients see your best side, and they help provide a perfect environment for creative strategy and brainstorming.
                </p>
                <div className="control__paragraph--subcontainer">
                    <p>✓ We offer maintenance subscriptions that make sense for your technology infrastructure.</p>
                    <p>✓ Forecasting and engineering expansion capability to extend the useful life of your technology.</p>
                    <p>✓ Focus on what's really important.</p>
                </div>
            </div>
        </div>
    )
}