import './clients.css'

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
    {
        title: "DelDot",
        image: "/images/dav-client-logos/del-dot.jpg",
    },
    {
        title: "Delaware State University",
        image: "/images/dav-client-logos/del-state.jpg",
    },
    {
        title: "Edis Group",
        image: "/images/dav-client-logos/edis-group.png",
    },
    {
        title: "Bloom Energy",
        image: "/images/dav-client-logos/bloom-energy.png",
    },
    {
        title: "United State Bankruptcy Court",
        image: "/images/dav-client-logos/bankruptcy-court.jpg",
    },
    {
        title: "University of Delaware",
        image: "/images/dav-client-logos/university-of-delaware.png",
    },
    {
        title: "Wildwoods",
        image: "/images/dav-client-logos/wildwoods.png",
    },
    {
        title: "Morris James LLP",
        image: "/images/dav-client-logos/morris-james.png",
    },
    {
        title: "Dogfish Head",
        image: "/images/dav-client-logos/dogfish-head.png",
    },
    {
        title: "Saint Mark's High School",
        image: "/images/dav-client-logos/saint-marks.png",
    },
    {
        title: "Appoquinimink School District",
        image: "/images/dav-client-logos/appo-school-district.png",
    },
    {
        title: "Furness",
        image: "/images/dav-client-logos/furness.png",
    },
    {
        title: "Tidal Health",
        image: "/images/dav-client-logos/tidal-health.png",
    },
    {
        title: "Grant and Eisenhofer",
        image: "/images/dav-client-logos/grant-eisenhofer.png",
    },
    {
        title: "City of Cape May",
        image: "/images/dav-client-logos/city-of-cape-may.png",
    },
    {
        title: "Delaware Technical Community College",
        image: "/images/dav-client-logos/delaware-tech.png",
    },
    {
        title: "Boston Beer Co.",
        image: "/images/dav-client-logos/boston-beer.png",
    },
    {
        title: "Bancroft Construction",
        image: "/images/dav-client-logos/bancroft-construction.png",
    },
    {
        title: "Penske",
        image: "/images/dav-client-logos/penske.png",
    },
    {
        title: "M&T Bank",
        image: "/images/dav-client-logos/mt-bank.png",
    },
]

export default function Clients() {
    return (
        <div className="clients__container">
            <h1 className="clients__header">Trusted By Industry Leaders</h1>
            <div className="clients__grid">
                {
                    clientSamples.map((client, index) => (
                        <div key={index} className='client__card'>
                            <img src={client.image} alt={client.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}