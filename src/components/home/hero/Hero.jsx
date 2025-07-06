import './hero.css'

export default function Hero() {
    return (
        <div className="header__container">
            <iframe className="header__video"
                src="https://www.youtube.com/embed/VycO3xMSoXQ?autoplay=1&mute=1&loop=1&playlist=VycO3xMSoXQ&controls=0&modestbranding=1&rel=0&showinfo=0"
                title="DAV - Your AV Technology Partner"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    )
}