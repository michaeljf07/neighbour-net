import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; // Import the AuthProvider
import Home from "./Pages/home.jsx";
import Blog from "./Pages/blog.jsx";
import Signin from "./Pages/sign-in.jsx";
import Signup from "./Pages/sign-up.jsx";
import Contact from "./Pages/contact.jsx";
import Signup_Business_Page from "./Pages/signup-business.jsx";
import { useAuth } from "./AuthContext.jsx";

function App() {
    const { logout } = useAuth();
    logout();

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/sign-in" element={<Signin />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/sign-up/business"
                        element={<Signup_Business_Page />}
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
