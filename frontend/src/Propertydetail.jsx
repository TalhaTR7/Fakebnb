import "./css/Propertydetail.css"
import allproperties from './assets/property.json'
import trending_status from "./assets/status-trending.png"
import hot_status from "./assets/status-hot.png"
import favourite_status from "./assets/status-favourite.png"
import customer_img from "./assets/profile.png"
import rating_stars from "./assets/stars.png"
import customer_img_dark from "./assets/dark/profile-dark.png"
import host_img from "./assets/host-img.png"
import widelogo from "./assets/widelogo.png"
import widelogo_dark from "./assets/dark/widelogo-dark.png"
import { useEffect } from "react"
import { useLocation, Link } from 'react-router-dom'
import { useTheme } from './Theme'

export default function Propertydetail() {

    const { darkmode } = useTheme(),
        location = useLocation(),
        searchParams = new URLSearchParams(location.search),
        fakeID = searchParams.get('fakeid');

    const property = allproperties.find(p => p.fakeid == fakeID);


    const statusImages = {
        Trending: trending_status,
        Hot: hot_status,
        Favourite: favourite_status,
    };

    const float = (number) => parseFloat(number).toFixed(1);

    useEffect(() => window.scroll(0, 0), [])


    if (!property) return <p>Loading...</p>



    return (
        <div>
            <header className={darkmode ? "dark" : ""}>
                <Link to={'/'}><img src={darkmode ? widelogo_dark : widelogo} /></Link>
            </header>
        
            <Link to={`/`} className={`button ${darkmode ? "dark" : ""}`}>
                <i className="fa-solid fa-arrow-left" />
            </Link>
            <div className="image-grid">
                <img src={new URL('https://a0.muscache.com/im/pictures/hosting/Hosting-1201729819587933418/original/51d2b06a-b1c0-40a3-9df5-e598f5908786.jpeg?im_w=1200')} />
                <img src={new URL('https://a0.muscache.com/im/pictures/hosting/Hosting-1201729819587933418/original/5cd0ea04-d88b-418f-90e4-53200b0e88f8.jpeg?im_w=1440')} />
                <img src={new URL('https://a0.muscache.com/im/pictures/hosting/Hosting-1201729819587933418/original/281e8998-bd5e-4289-b213-7a6c7d266094.jpeg?im_w=1440')} />
            </div>
            <section className={`section-1 ${darkmode ? "dark" : ""}`}>
                <div className="left">
                    <h1>{property.address}, {property.city}</h1>
                    <span>{property.description}</span>
                    <div className="status-container">
                        <img src={statusImages[property.status]} style={{ width: '250px' }} />
                        <span>★{float(property.rating)}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="upper-part">
                        <div className="left-part">
                            <span>Availability</span>
                            <p>{property.vacancy}</p>
                        </div>
                        <div className="right-part">
                            <span>Beds / Baths</span>
                            <p>{property.beds} beds {property.baths} baths</p>
                        </div>
                    </div>
                    <h1>${property.rent}<span>/ night +GST</span></h1>
                    <Link to={`/booking?fakeid=${property.fakeid}`}>
                        <button>Reserve</button>
                    </Link>
                </div>
            </section>
            <section className={`section-2 ${darkmode ? "dark" : ""}`}>
                <div>
                    <div>
                        <i className="fa-solid fa-car" />
                        <div>
                            <p>Easy Transport</p>
                            <span>Get rides easily in the area</span>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-tv" />
                        <div>
                            <p>Netflix and chill</p>
                            <span>TV available with Netflix and cable</span>
                        </div>
                    </div>
                    <div>
                        <i className="fa-brands fa-playstation" />
                        <div>
                            <p>Playstation with premium pass</p>
                            <span>Never miss the action</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <i className="fa-solid fa-wifi" />
                        <div>
                            <p>WIFI available</p>
                            <span>Keep yourself in touch socially</span>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-building-columns" />
                        <div>
                            <p>Explore History</p>
                            <span>Historical site nearby </span>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-shower" />
                        <div>
                            <p>Hot water always on</p>
                            <span>Take a bath for god sake</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`section-3 ${darkmode ? "dark" : ""}`} style={{ gap: '150px' }}>
                <div className="about-section">
                    <h1>About this place</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="host-section">
                    <img src={host_img} />
                    <div>
                        <h1>{property.host}</h1>
                        <p style={{ fontSize: '20px' }}>Host rating</p>
                        <span>{float(property.hostrating)}★</span>
                    </div>
                </div>
            </section>
            <section className={`section-4 ${darkmode ? "dark" : ""}`}>
                <h1>{property.rating}</h1>
                <span>Overall rating</span>
                <p>One of the most loved homes on Fakebnb based on ratings, reviews, and reliability</p>
                <div className="rating-section">
                    <div>
                        <h2>Cleanliness</h2>
                        <span>{float(property.cleanliness)}</span>
                    </div>
                    <div>
                        <h2>Accuracy</h2>
                        <span>{float(property.accuracy)}</span>
                    </div>
                    <div>
                        <h2>Communication</h2>
                        <span>{float(property.communication)}</span>
                    </div>
                    <div>
                        <h2>Location</h2>
                        <span>{float(property.location)}</span>
                    </div>
                    <div>
                        <h2>Value</h2>
                        <span>{float(property.value)}</span>
                    </div>
                </div>
                <div className="review-section">
                    <section className="left-reviews">
                        <div className="review">
                            <div className="user-info">
                                <img src={darkmode ? customer_img_dark : customer_img} style={{ width: '50px' }} />
                                <div>
                                    <h1>Jon Snow</h1>
                                    <p>3 months ago</p>
                                </div>
                            </div>
                            <img className="stars" src={rating_stars} />
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                        <div className="review">
                            <div className="user-info">
                                <img src={darkmode ? customer_img_dark : customer_img} style={{ width: '50px' }} />
                                <div>
                                    <h1>Sansa Stark</h1>
                                    <p>1 year ago</p>
                                </div>
                            </div>
                            <img className="stars" src={rating_stars} />
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                    </section>
                    <section className="right-reviews">
                        <div className="review">
                            <div className="user-info">
                                <img src={darkmode ? customer_img_dark : customer_img} style={{ width: '50px' }} />
                                <div>
                                    <h1>Tyrion Lannister</h1>
                                    <p>8 months ago</p>
                                </div>
                            </div>
                            <img className="stars" src={rating_stars} />
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                        <div className="review">
                            <div className="user-info">
                                <img src={darkmode ? customer_img_dark : customer_img} style={{ width: '50px' }} />
                                <div>
                                    <h1>Sandor Clegane</h1>
                                    <p>2 years ago</p>
                                </div>
                            </div>
                            <img className="stars" src={rating_stars} />
                            <p>Amazing spot, right in the heart of the city. Super clean and cozy. The host was friendly and responsive. Will definitely book again!</p>
                        </div>
                    </section>
                </div>
            </section>
            <section className={`section-5 ${darkmode ? "dark" : ""}`}>
                <h1>Things to know</h1>
                <div>
                    <ul>
                        <h2>House rules</h2>
                        <li>Check-in after 1:00 PM</li>
                        <li>Check-in after 10:00 AM</li>
                        <li>No parties or events</li>
                        <span>Show more</span>
                    </ul>
                    <ul>
                        <h2>Safety & property</h2>
                        <li>Check-in after 1:00 PM</li>
                        <li>Check-in after 10:00 AM</li>
                        <li>No parties or events</li>
                        <span>Show more</span>
                    </ul>
                    <ul>
                        <h2>Cancellation policy</h2>
                        <li>Cancel 3 days before reservation for a partial refund. After that, this reservation is non-refundable.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}