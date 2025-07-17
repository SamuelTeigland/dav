import './news.css'
import { Link } from 'react-router-dom';

const blogSamples = [
    {
        title: "Tidal Health Simulation Rooms",
        description: "Tidal Health Simulation...",
        image: "/images/tidal-health.jpg",
    },

    {
        title: "Rail Haus - Outdoor Videowall",
        description: "Rail Haus Outdoor Videowall Step...",
        image: "/images/rail-haus.jpg",
    },

    {
        title: "How Does Office Sound Masking Work?",
        description: "Inspire your team to focus...",
        image: "/images/sound-masking.jpg",
    },
];

export default function News() {
    return (
        <div className="news__container">
            <h2 className='news__header'>Our latest news!</h2>
            <p className='news__paragraph'>No matter the AV project, <span>we do it all.</span> <Link to="/news">See all our news!</Link></p>
            <div className="news__grid">
                {
                    blogSamples.map((blog, index) => (
                        <Link to="#" key={index} className='blog__card'>
                            <img src={blog.image} alt={blog.title} />
                            <div className='blog__card--content'>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}