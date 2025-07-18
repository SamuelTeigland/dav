import './trusted.css'

const clientSamples = [
    {
        title: "Christiana Care",
        image: "/images/dav-client-logos/christiana-care.jpg",
    },
    {
        title: "Morey's Pier",
        image: "/images/dav-client-logos/moreys-pier.jpg",
    },
    {
        title: "State of Delaware",
        image: "/images/dav-client-logos/state-of-delaware.png",
    },
    {
        title: "New Castle County",
        image: "/images/dav-client-logos/nc-county.png",
    },
]

export default function Trusted() {
    return (
        <div className="trusted__container">
            <h2 className='trusted__header'>Trusted By Industry Leaders</h2>
            <div className="trusted__grid">
                {
                    clientSamples.map((client, index) => (
                        <div key={index} className='trusted__card'>
                            <img src={client.image} alt={client.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}