
import "./css/Booking.css";
import allproperties from './assets/property.json'
import widelogo from "./assets/widelogo.png";
import widelogo_dark from "./assets/dark/widelogo-dark.png";
import paycard_1 from "./assets/paycard-1.png";
import paycard_2 from "./assets/paycard-2.png";
import paycard_3 from "./assets/paycard-3.png";
import paycard_4 from "./assets/paycard-4.png";
import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "./Theme";
import { useLocation, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


export default function Booking() {

    const { darkmode } = useTheme();
    const navigate = useNavigate()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const fakeID = searchParams.get('fakeid');

    const property = allproperties.find(p => p.fakeid == fakeID);


    useEffect(() => window.scrollTo(0, 0), []);




    const [guests, setGuests] = useState(1);
    const month = property?.vacancy?.split(' ')[0] || "";

    const checkinDate = property?.vacancy
        ? parseInt(property.vacancy.split(' ')[1].split('-')[0], 10)
        : null;
    const checkoutDate = property?.vacancy
        ? parseInt(property.vacancy.split(' ')[1].split('-')[1], 10)
        : null;

    const [checkin, setCheckin] = useState(checkinDate);
    const [checkout, setCheckout] = useState(checkoutDate);

    const nights = (checkout - checkin) + 1;
    const payout = parseFloat((property.rent * nights) + 50 + (property.rent * nights) * 15 / 100).toFixed(2);


    const cardholderRef = useRef("");
    const cardnumberRef = useRef("");
    const expirydateRef = useRef("");
    const cvvRef = useRef("");







    function LeftSection() {

        const increaseCheckin = () => {
            setCheckin((prev) => {
                if (prev + 1 <= checkout)
                    return prev + 1;
                return prev;
            });
        };
        const decreaseCheckin = () => {
            setCheckin((prev) => {
                if (prev - 1 >= checkinDate)
                    return prev - 1;
                return prev;
            });
        };

        const increaseCheckout = () => {
            setCheckout((prev) => {
                if (prev + 1 <= checkoutDate)
                    return prev + 1;
                return prev;
            });
        };
        const decreaseCheckout = () => {
            setCheckout((prev) => {
                if (prev - 1 >= checkin)
                    return prev - 1;
                return prev;
            });
        };


        const increaseGuests = () => { setGuests(guests + 1); }
        const decreaseGuests = () => { guests > 1 ? setGuests(guests - 1) : null; }



        const validatecarddetails = () => {
            if (cardholderRef.current.length < 2) {
                toast.error("Card holder name is too short");
                return false;
            }
            else if (cardnumberRef.current.length !== 16 ||
                expirydateRef.current.length !== 7 ||
                cvvRef.current.length !== 3
            ) {
                toast.error("Invalid card details")
                return false;
            }
            toast.success("Booking successful")
            console.log(payout, nights);
            return true;
        }











        function RareSection() {
            return (
                <div className="rare-find">
                    <div>
                        <h1>Rare find</h1>
                        <span>{property.host}'s place is usually booked</span>
                    </div>
                    <i className="fa-regular fa-gem" />
                </div>
            )
        }

        function VisitSection() {
            return (
                <section className="visit-info">
                    <h1>Your visit</h1>
                    <div>
                        <div className="left">
                            <p>Check-in</p>
                            <span>Please select your check-in date</span>
                        </div>
                        <div className="right">
                            <i onClick={decreaseCheckin} className="fa-solid fa-arrow-left" />
                            <span>{month} {checkin}</span>
                            <i onClick={increaseCheckin} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <p>Check-out</p>
                            <span>Please select your check-out date</span>
                        </div>
                        <div className="right">
                            <i onClick={decreaseCheckout} className="fa-solid fa-arrow-left" />
                            <span>{month} {checkout}</span>
                            <i onClick={increaseCheckout} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                    <div>
                        <div className="left">
                            <p style={{ font: '20px Arial' }}>Guests</p>
                            <span style={{ font: '18px Arial' }}>Please select number of guests</span>
                        </div>
                        <div className="right">
                            <i onClick={decreaseGuests} className="fa-solid fa-arrow-left" />
                            <span>{guests}</span>
                            <i onClick={increaseGuests} className="fa-solid fa-arrow-right" />
                        </div>
                    </div>
                </section>
            )
        }

        function PaymentSection() {
            return (
                <section className="payment-info">
                    <h1>Payment method</h1>
                    <div className="banks">
                        <img src={paycard_1} />
                        <img src={paycard_2} />
                        <img src={paycard_3} />
                        <img src={paycard_4} />
                    </div>
                    <form className="card-info">
                        <div className="card-holder">
                            <label>Card holder</label>
                            <input
                                type="text"
                                placeholder="Full name on card"
                                defaultValue={cardholderRef.current}
                                onChange={(e) => cardholderRef.current = e.target.value}
                                required />
                        </div>
                        <div className="card-number">
                            <label>Card number</label>
                            <input
                                type="text"
                                placeholder="1234 1234 1234 1234"
                                inputMode="numeric"
                                defaultValue={cardnumberRef.current}
                                maxLength={16}
                                onChange={(e) => cardnumberRef.current = e.target.value}
                                onKeyPress={(e) => {
                                    if (!/[0-9]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }} required />
                        </div>
                        <div className="other-details">
                            <div className="exp-date">
                                <label>Expiry month</label>
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    defaultValue={expirydateRef.current}
                                    maxLength={7}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/\D/g, '');
                                        if (value.length > 1) {
                                            value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
                                        }
                                        expirydateRef.current = value;
                                        e.target.value = value;
                                    }}
                                    onKeyPress={(e) => {
                                        if (!/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }} required />
                            </div>
                            <div className="cvv">
                                <label>CVV number</label>
                                <input
                                    type="text"
                                    placeholder="XXX"
                                    inputMode="numeric"
                                    maxLength={3}
                                    defaultValue={cvvRef.current}
                                    onChange={(e) => cvvRef.current = e.target.value}
                                    onKeyPress={(e) => {
                                        if (!/[0-9]/.test(e.key)) {
                                            e.preventDefault();
                                        }
                                    }} required />
                            </div>
                        </div>
                    </form>
                </section>
            )
        }


        return (
            <section className={`left-section ${darkmode ? "dark" : ""}`}>
                <RareSection />
                <VisitSection />
                <PaymentSection />
                <section className="cancellation">
                    <h1>Cancellation policy</h1>
                    <p>Cancel 3 days before reservation for a partial refund. After that, this reservation is non-refundable.</p>
                </section>
                <section className="ground-rules">
                    <h1>Ground rules</h1>
                    <p style={{ marginTop: '10px' }} className="foreplay">We ask every guest to remember a few things about what makes a great guest.</p>
                    <li style={{ marginTop: '20px', textDecoration: '' }}>Follow the house rules</li>
                    <li style={{ marginTop: '10px' }}>Treat your Host's home like your own</li>
                </section>
                <section className="checkout">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus ultrices purus, a pretium dui dapibus ut. Duis pretium eu nibh accumsan dictum. Sed rhoncus malesuada blandit. Maecenas elementum neque vitae facilisis molestie.</p>
                    <button onClick={() => {
                        if (validatecarddetails())
                            navigate(`/property?fakeid=${property.fakeid}`)
                    }}>Confirm and pay</button>
                </section>
            </section>
        )
    }

















    function RightSection() {

        const float = (number) => parseFloat(number).toFixed(2);

        return (
            <section className={`right-section ${darkmode ? "dark" : ""}`}>
                <img src={new URL('https://a0.muscache.com/im/pictures/hosting/Hosting-1201729819587933418/original/51d2b06a-b1c0-40a3-9df5-e598f5908786.jpeg?im_w=1200')} />
                <div className="name">
                    <h1>{property.address}, {property.city}</h1>
                    <span>{property.description}</span>
                </div>
                <div className="pricing">
                    <h1>Pricing</h1>
                    <div className="price">
                        <span>${float(property.rent)} x {nights} {nights === 1 ? "night" : "nights"}</span>
                        <span>${float(property.rent * nights)}</span>
                    </div>
                    <div className="price">
                        <span>Cleaning fee</span>
                        <span>${float(50)}</span>
                    </div>
                    <div className="price">
                        <span>Fakebnb service fee</span>
                        <span>${float((property.rent * nights) * 15 / 100)}</span>
                    </div>
                    <div className="total price">
                        <span>Total</span>
                        <span>${payout}</span>
                    </div>
                </div>
            </section>
        )
    }








    if (!property) return <p>loading...</p>





    return (
        <div className={darkmode ? "dark" : ""}>
            <header className={darkmode ? "dark" : ""}>
                <Link to={'/'}><img src={darkmode ? widelogo_dark : widelogo} /></Link>
            </header>
            <div className={`absolute ${darkmode ? "dark" : ""}`}>
                <Link to={`/property?fakeid=${property.fakeid}`} className="a">
                    <i className="fa-solid fa-arrow-left" />
                </Link>
                <h1>Confirm and pay</h1>
            </div>
            <div className="main-container">
                <LeftSection />
                <RightSection />
            </div>
            <footer className={darkmode ? "dark" : ""}>
                <p style={{ cursor: 'auto' }}>© 2024 Fakebnb, Inc.</p>
                <span>·</span>
                <p>No Privacy</p>
                <span>·</span>
                <p>No Policy</p>
                <span>·</span>
                <p>No Terms & Conditions</p>
                <div className='socials'>
                    <h4 style={{ margin: '0 20px' }}>English (US)</h4>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </footer>
        </div>
    )
}