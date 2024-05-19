import { useState } from "react";
import "./signup-business.css";
import { useNavigate } from "react-router-dom";

function Signup_Business() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        website: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
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
                navigate("/blog");
                
            } else {
                // Handle failure
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="sign-up-business">
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
            </style>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Name of Business</label>
                <input
                    type="text"
                    name="name"
                    placeholder=""
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder=""
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="optional"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />

                <label>Website</label>
                <input
                    type="text"
                    name="website"
                    placeholder="optional"
                    value={formData.website}
                    onChange={handleInputChange}
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Signup_Business;
