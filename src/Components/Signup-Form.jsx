import React, { useState } from "react";
import { useAuth } from "../AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Signup-Form.css";

function SignupForm() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        type: "None",
        neighbourhood: "None",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        // Send data to Flask backend
        try {
            const response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                console.log("Signup successful");
                login();
                // Redirect based on form data if needed
                if (formData.type === "Business") {
                    navigate("/sign-up/business");
                } else {
                    navigate("/blog");
                }
            } else {
                // Handle failure
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="sign-up">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <form>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder=""
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder=""
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder=""
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder=""
                        value={formData.password}
                        onChange={handleInputChange}
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder=""
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />

                    <label>Type of Account</label>
                    <select
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleInputChange}>
                        <option value="None">--Select One Option--</option>
                        <option value="Individual">Individual</option>
                        <option value="Business">Business</option>
                    </select>

                    <label>Neighbourhood</label>
                    <select
                        name="neighbourhood"
                        id="neighbourhood"
                        value={formData.neighbourhood}
                        onChange={handleInputChange}>
                        <option value="None">--Select One Option--</option>
                        <option value="Laurelwood">Laurelwood</option>
                        <option value="Erbsville">Erbsville</option>
                        <option value="Maple Hills">Maple Hills</option>
                    </select>

                    <input
                        type="button"
                        value="Submit"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
            <p id="para-2">
                Already have an account? <Link to="/sign-in">Sign In Here</Link>
            </p>
        </div>
    );
}

export default SignupForm;
