
import { Link } from 'react-router-dom'
import { useTheme } from "./Theme.jsx"
import "./css/Form.css"
import widelogo from "./assets/widelogo.png"
import widelogo_dark from "./assets/dark/widelogo-dark.png"
import background from "./assets/background.png"
import { useEffect, useState } from 'react'

export default function Login() {
    const { darkmode } = useTheme();

    const [email, setEmail] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }



    useEffect(() => {
        const previousColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = darkmode ? "#111" : "#ddd";

        return () => {
            document.body.style.backgroundColor = previousColor;
        };
    });

    return (
        <div className={`login-form-container ${darkmode ? "dark" : ""}`}>
            <Link to={"/"} className={`back-button ${darkmode ? "dark" : ""}`}>
                <i className="fa-solid fa-arrow-left" />
            </Link>
            <div className={`login-form ${darkmode ? "dark" : ""}`}>
                <img src={!darkmode ? widelogo : widelogo_dark} alt="Logo" />
                <h1>Welcome back!</h1>
                <p>Don't have an account yet? <Link to={"/signup"} className={darkmode ? "dark" : ""}>Create one</Link></p>
                <form onSubmit={handleSubmit}>
                    <input
                        type='email'
                        className={darkmode ? "dark" : ""}
                        placeholder='Email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type='password'
                        className={darkmode ? "dark" : ""}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <div className='misc'>
                        <div>
                            <input
                                type="checkbox"
                                style={{ cursor: "pointer" }} />
                            <label>Remember me</label>
                        </div>
                        <a href="#" className={darkmode ? "dark" : ""}>Forgot password?</a>
                    </div>
                    <button type="submit" className={darkmode ? "dark" : ""}>Login</button>
                    <div className='useless-data'>
                        <a href="#">Terms & Conditions</a>
                        <span>·</span>
                        <a href="#">Privacy</a>
                        <span>·</span>
                        <a href="#">Policy</a>
                    </div>
                </form>
            </div>
            <img src={background} className='background-img' alt="Background" />
        </div>
    )
}
