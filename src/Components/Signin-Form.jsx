import React, { useState } from "react";
import "./Signin-Form.css";
import { Link } from "react-router-dom";

function SigninForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Add this line to check if handleSubmit is called
        // Access the email and password from formData
        const { email, password } = formData;
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="sign-in">
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder=""
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <p className="no-account">
                Don't have an account? <Link to="/sign-up">Sign Up Here</Link>
            </p>
        </div>
    );
}

export default SigninForm;
