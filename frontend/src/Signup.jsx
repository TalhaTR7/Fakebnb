
import { Link } from 'react-router-dom'
import { useTheme } from "./Theme.jsx"
import "./css/Form.css"
import widelogo from "./assets/widelogo.png"
import widelogo_dark from "./assets/dark/widelogo-dark.png"
import background from "./assets/background.png"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function Signup() {
    const { darkmode } = useTheme();
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        console.log(firstname, lastname, email, password);
        toast.success("User created successfully");
        navigate('/');
    }

    useEffect(() => {
        const previousColor = document.body.style.backgroundColor;
        document.body.style.backgroundColor = darkmode ? "#111" : "#ddd";

        return () => {
            document.body.style.backgroundColor = previousColor;
        };

    });

    return (
        <div className={`signup-form-container ${darkmode ? "dark" : ""}`}>
            <Link to={"/"} className={`back-button ${darkmode ? "dark" : ""}`}>
                <i className="fa-solid fa-arrow-left" />
            </Link>
            <div className={`signup-form ${darkmode ? "dark" : ""}`}>
                <img src={!darkmode ? widelogo : widelogo_dark} />
                <h1>Welcome!</h1>
                <p>Already have an account? <Link to={"/login"} className={darkmode ? "dark" : ""}>Sign in</Link></p>
                <form onSubmit={handleSubmit}>
                    <div className='full-name'>
                        <input
                            className={darkmode ? "dark" : ""}
                            type='text' placeholder='First name'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                        <input
                            className={darkmode ? "dark" : ""}
                            type='text' placeholder='Last name'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <input
                        type='email'
                        className={darkmode ? "dark" : ""}
                        placeholder='Email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type='password'
                        className={darkmode ? "dark" : ""}
                        placeholder='Create password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input
                        type='password'
                        className={darkmode ? "dark" : ""}
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <p>By clicking “Create account” you agree to our <span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    <button className={darkmode ? "dark" : ""} type='submit'>Create account</button>
                </form>
            </div>
            <img src={background} className='background-img' />
        </div>
    )
}
