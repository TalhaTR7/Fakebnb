import { useState } from "react";
import { useTheme } from "./Theme";
import { Toaster } from "react-hot-toast";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Propertydetail from "./Propertydetail.jsx";
import Propertylist from "./Propertylist.jsx";
import Categories from "./Categories.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { userAuth } from "./store/auth.js";

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [city, setCity] = useState("");
    const { darkmode } = useTheme();
    const { user } = userAuth();

    const handleSelectedCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleCity = (city) => {
        setCity(city);
        setSelectedCategory(null);
    };



    return (
        <Router>
            <Toaster />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={null} searchBarResult="" />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/signup"
                    element={<Signup />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/search"
                    element={
                        <div className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={selectedCategory} searchBarResult={city} />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/category"
                    element={
                        <div className={`${darkmode ? "dark" : ""}`}>
                            <Header searchBarResult={handleCity} />
                            <Categories selectedCategory={handleSelectedCategory} activeCategory={selectedCategory} />
                            <Propertylist selectedCategory={selectedCategory} searchBarResult="" />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/property"
                    element={
                        <div className={`${darkmode ? "dark" : ""}`}>
                            <Propertydetail />
                            <Footer />
                        </div>
                    }
                />
                <Route
                    path="/booking"
                    element={<Booking />}
                />
            </Routes>
        </Router>
    );
}