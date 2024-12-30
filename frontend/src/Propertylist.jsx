import { useEffect, useState } from 'react';
import data from './assets/property.json';
import Card from './Card';
import './css/Propertylist.css';
import loading_img from './assets/loading.svg';
import { Link } from 'react-router-dom';
import { useTheme } from './Theme';



export default function Propertylist({ selectedCategory, searchBarResult }) {

	const [allproperties, setallproperties] = useState(data);


	const [quanta, setQuanta] = useState(0);
	const [loading, setLoading] = useState(false);
	const { darkmode } = useTheme();


	const properties = selectedCategory ?
		selectedCategory === "All" ? allproperties
			: selectedCategory === "Hot" ? allproperties.filter(property => property.status === "Hot")
				: selectedCategory === "Trending" ? allproperties.filter(property => property.status === "Trending")
					: selectedCategory === "Favourite" ? allproperties.filter(property => property.status === "Favourite")
						: allproperties.filter(property => property.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase()))
							: searchBarResult !== "" ? allproperties.filter(property => property.city.toLowerCase() === searchBarResult.toLowerCase())
								: allproperties;



	useEffect(() => {
		setQuanta(25);
		setallproperties(() => {
			const newArray = [...allproperties];
			for (let i = newArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
			}
			return newArray;
		});
	}, [searchBarResult, selectedCategory]);


	const loadMore = () => {
		setLoading(true);
		setTimeout(() => {
			setQuanta(prev => prev + 25);
			setLoading(false);
		}, 1000);
	};



	return (
		<div className={`card-container ${darkmode ? "dark" : ""}`}>
			{properties.slice(0, quanta).map((property) => (
				<Link to={`/property?fakeid=${property.fakeid}`} key={property.fakeid}>
					<Card property={property} />
				</Link>
			))}
			{loading && <img src={loading_img} className="loading" />}
			{!loading && quanta < properties.length &&
				<button onClick={loadMore}>Show more</button>
			}
		</div>
	);
}