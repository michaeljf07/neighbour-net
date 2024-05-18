import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup-Form.css";

function SignupForm() {
    const navigate = useNavigate();
    const [type, setType] = useState(""); // State to store the selected type

    const handleTypeChange = (e) => {
        setType(e.target.value); // Update the type state when dropdown selection changes
    };

    const handleSubmit = () => {
        // Perform any necessary form validation or submission logic here
        if (type === "Business") {
            navigate("/sign-up/business");
        }
    };

    return (
        <div className="sign-up">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <form>
                    <label>First Name</label>
                    <input type="text" placeholder="" />

                    <label>Last Name</label>
                    <input type="text" placeholder="" />

                    <label>Email</label>
                    <input type="email" placeholder="" />

                    <label>Password</label>
                    <input type="password" placeholder="" />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="" />

                    <label>Type of Account</label>
                    <select
                        name="Type"
                        id="type"
                        onChange={handleTypeChange}
                        value={type}>
                        <option value="None">--Select One Option--</option>
                        <option value="Individual">Individual</option>
                        <option value="Business">Business</option>
                    </select>

                    <label>Neighbourhood</label>
                    <select name="Neighbourhood" id="neighbourhood">
                        <option value="None">--Select One Option--</option>
                        <option value="Laurelwood">Laurelwood</option>
                        <option value="Erbsvill">Erbsville</option>
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
