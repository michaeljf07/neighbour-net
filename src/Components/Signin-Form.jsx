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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send data to Flask backend
        try {
            const response = await fetch("http:localhost:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                console.log("Login successful");
            } else {
                // Handle failure
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
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
