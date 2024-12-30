import "./css/Categories.css";
import { useEffect } from 'react';
import { useTheme } from './Theme';
import { useNavigate } from 'react-router-dom';


export default function Categories({ selectedCategory, activeCategory }) {

    const { darkmode } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            const container = document.getElementsByClassName("category-container")[0];
            clearTimeout(scrollTimeout);
            if (window.scrollY > 100) {
                scrollTimeout = setTimeout(() => {
                    container.classList.add("scrolled");
                }, 1000);
            } else {
                container.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const handleCategoryClick = (category) => {
        selectedCategory(category);
        navigate(`/search?category=${category}`);
    };

    const categories = [
        "Farm", "Countryside", "All", "Cabin", "Mountain", "Luxury", "River", "Trending",
        "Barn", "Beach", "Mansion", "Hot", "Urban", "Camping", "Tropical", "Favourite", "Lake",
        "Pool", "Garden", "Desert", "View"
    ];


    return (
        <div className={`category-container ${darkmode ? "dark" : ""}`}>
            <div className="list-wrapper">
                <nav className="list">
                    {categories.map((category) => (
                        <a
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={category === activeCategory ? "active" : ""}>
                            {category}
                        </a>
                    ))}
                </nav>
                <div className="fade-left"></div>
                <div className="fade-right"></div>
            </div>
        </div>
    );
}