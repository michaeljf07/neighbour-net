import { useState } from "react";
import "./signup-business.css";

function Signup_Business() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        community: "",
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Perform any necessary form validation or submission logic here
        console.log("Form data:", formData);
        // You can now use formData as needed, such as sending it to the backend
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

                <label>Community</label>
                <select
                    name="community"
                    id="community"
                    value={formData.community}
                    onChange={handleInputChange}>
                    <option value="None">--Select One Option--</option>
                    <option value="Laurelwood">Laurelwood</option>
                    <option value="Erbsville">Erbsville</option>
                    <option value="Maple Hills">Maple Hills</option>
                </select>

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
