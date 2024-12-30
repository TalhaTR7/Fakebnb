import './css/Footer.css';
import { useTheme } from './Theme';
import sponsor1 from './assets/sponsor-1.png';
import sponsor2 from './assets/sponsor-2.png';
import sponsor3 from './assets/sponsor-3.png';
import sponsor4 from './assets/sponsor-4.png';
import sponsor5 from './assets/sponsor-5.png';
import sponsor1_dark from './assets/dark/sponsor-1-dark.png';
import sponsor2_dark from './assets/dark/sponsor-2-dark.png';
import sponsor3_dark from './assets/dark/sponsor-3-dark.png';
import sponsor4_dark from './assets/dark/sponsor-4-dark.png';
import sponsor5_dark from './assets/dark/sponsor-5-dark.png';

export default function Footer() {
    const { darkmode } = useTheme();
    return (
        <div className={`footer ${darkmode ? "dark" : ""}`}>
            <div className='sponsors'>
                <img src={darkmode ? sponsor1_dark : sponsor1} />
                <img src={darkmode ? sponsor2_dark : sponsor2} />
                <img src={darkmode ? sponsor3_dark : sponsor3} />
                <img src={darkmode ? sponsor4_dark : sponsor4} />
                <img src={darkmode ? sponsor5_dark : sponsor5} />
            </div>
            <h2>Inspiration for future getaways</h2>
            <div className='upper-part'>
                <ul className='columns'>
                    <h4>Support</h4>
                    <li><a>Help Center</a></li>
                    <li><a>FakeCover</a></li>
                    <li><a>Anit-discrimination</a></li>
                    <li><a>Disability support</a></li>
                    <li><a>Cencellation options</a></li>
                    <li><a>Report neighborhood concern</a></li>
                </ul>
                <ul className='columns'>
                    <h4>Hosting</h4>
                    <li><a>Fakebnb your home</a></li>
                    <li><a>FakeCover for Hosts</a></li>
                    <li><a>Hosting resources</a></li>
                    <li><a>Community forum</a></li>
                    <li><a>Hosting responsibly</a></li>
                    <li><a>Fakebnb-friendly apartments</a></li>
                    <li><a>Join a free Hosting class</a></li>
                    <li><a>Find a co-host</a></li>
                </ul>
                <ul className='columns'>
                    <h4>Fakebnb</h4>
                    <li><a>Newroom</a></li>
                    <li><a>New features</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Investors</a></li>
                    <li><a>Gift Cards</a></li>
                    <li><a>Fakebnb.org emergency stays</a></li>
                </ul>
            </div>
            <div className='lower-part'>
                <p style={{ cursor: 'auto' }}>© 2024 Fakebnb, Inc.</p>
                <span>·</span>
                <p>No Privacy</p>
                <span>·</span>
                <p>No Policy</p>
                <span>·</span>
                <p>No Terms & Conditions</p>
                <div className='socials'>
                    <h4 style={{ margin: '0 20px' }}>English (US)</h4>
                    <i className="fa-brands fa-square-facebook" />
                    <i className="fa-brands fa-square-x-twitter" />
                    <i className="fa-brands fa-square-instagram" />
                </div>
            </div>
        </div>
    )
}