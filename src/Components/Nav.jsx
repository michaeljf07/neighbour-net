import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <div>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
            </style>
            <nav className="nav-bar">
                <Link to="/about">Contact</Link>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export default Nav;
