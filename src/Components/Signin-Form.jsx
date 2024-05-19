import React, { useState } from "react";
import "./Signin-Form.css";
import { Link, useNavigate } from "react-router-dom";

function SigninForm() {
    const navigate = useNavigate();
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
        console.log("Form submitted");

        // Send data to Flask backend
        try {
            const response = await fetch("http://localhost:5000/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                mode: "cors",
            });

            if (response.ok) {
                // Handle success
                console.log("Login successful");
                navigate("/blog");
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
