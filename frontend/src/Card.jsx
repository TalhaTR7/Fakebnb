import './css/Card.css';
import house_template from "./assets/house-template.png";
import house_template_dark from "./assets/dark/house-template-dark.png";
import trending_card from "./assets/card-trending.png"
import favourite_card from "./assets/card-favourite.png"
import hot_card from "./assets/card-hot.png"
import React from 'react';
import { useTheme } from './Theme';

export default function Card({ property }) {

    const { darkmode } = useTheme();

    const giveimg = {
        Trending: trending_card,
        Hot: hot_card,
        Favourite: favourite_card
    }

    return (
        <div className={`container ${darkmode ? "dark" : ""}`}>
            <div className={`cover ${darkmode ? "dark" : ""}`}>
                <img src={!darkmode ? house_template : house_template_dark} />
            </div>
            <span className="rating-span">★ {parseFloat(property.rating).toFixed(1)}</span>
            <div className="details">
                <div className="upper">
                    <div>
                        <p className='primary' style={{fontSize:'21px'}}>{property.address}</p>
                        <p className='secondary'>{property.city}</p>
                    </div>
                    <img src={giveimg[property.status]} />
                </div>
                <div className="lower">
                    <p className='primary'>${property.rent} / night</p>
                    <div>
                        <p className='secondary'>{property.beds} {property.beds > 1 ? "Beds" : "Bed"} / {property.baths} {property.baths > 1 ? "Baths" : "Bath"}</p>
                        <p className='secondary'>{property.vacancy}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
