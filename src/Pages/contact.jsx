import Nav from "../Components/Nav.jsx";
import "../Components/Contact.css";
import React from "react";

function Contact() {
    const handleSubmit = (event) => {
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

        console.log(formDataObject);
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
