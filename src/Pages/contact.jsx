import Nav from "../Components/Nav.jsx";
import "../Components/Contact.css";
import React from "react";

function Contact() {
    const handleSubmit = async (event) => {
        // Prevent default form submission behavior
        event.preventDefault();

        // Retrieve form data
        const formData = new FormData(event.target);

        // Get values from form fields
        const name = formData.get("firstName");
        const email = formData.get("email");
        const message = formData.get("message");

        const formDataObject = {
            name: name,
            email: email,
            message: message,
        };

        // Send data to Flask backend
        try {
            const response = await fetch(
                "http://your-flask-backend.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formDataObject),
                }
            );

            if (response.ok) {
                // Optionally, you can do something after successful submission
            } else {
                // Handle failure
                console.error("Failed to submit form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <>
            <Nav />
            <div className="contact-us">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="firstName" placeholder="" />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="" />

                    <label>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Type your message..."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default Contact;
