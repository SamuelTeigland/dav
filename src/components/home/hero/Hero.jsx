import './hero.css'

export default function Hero() {
    return (
        <div className="hero__container">
            <div className='hero__news--banner'>
                <a href="/">See our latest news!</a>
            </div>
            <div className='hero__subcontainer'>
                <div className='hero__subcontainer--wrapper'>
                    <h1 className='hero__header'>Delaware Audio Visual</h1>
                    <p className='hero__paragraph'>
                        See what makes us the leading audio visual solutions provider to the Delaware Valley and beyond.
                    </p>
                    <div className='hero__button--container'>
                        <a className='hero__link' href="/">
                            <button className="hero__button button__primary">Request a quote</button>
                        </a>
                        <a className='hero__link' href="/">
                            <button className="hero__button button__secondary">Our products</button>
                        </a>
                    </div>
                </div>
                <div className='hero__subcontainer--wrapper'>
                    <iframe className="header__video"
                        src="https://www.youtube.com/embed/VycO3xMSoXQ?autoplay=1&mute=1&loop=1&playlist=VycO3xMSoXQ&controls=0&modestbranding=1&rel=0&showinfo=0"
                        title="DAV - Your AV Technology Partner"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}