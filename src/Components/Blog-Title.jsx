import React, { useState } from "react";
import user_data from "../assets/user-data.json";
import "./Blog-Title.css";

function Blog_Title() {
    const neighbourhood = "Erbsville";
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            // Convert the user_data object into an array of objects
            const userDataArray = Object.keys(user_data).map((key) => ({
                name: key,
                ...user_data[key],
            }));
            const result = userDataArray.find(
                (person) =>
                    person.name.toLowerCase() === searchQuery.toLowerCase()
            );
            if (result) {
                setSearchResult(result);
                setError(null); // Clear any previous errors
            } else {
                setSearchResult(null);
                setError("User not found");
            }
        } catch (err) {
            console.error("Error searching:", err);
            setError("Error searching for user");
        }
    };

    return (
        <>
            <div className="header">
                <p id="neighbourhood-title">{neighbourhood} Today</p>
            </div>
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button id="search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="feed-container">
                {searchResult && (
                    <div className="post-container">
                        <div className="post-user">
                            <h2>{searchResult.name}</h2>
                        </div>
                        <div className="post-description">
                            <p>Email: {searchResult.email}</p>
                            <p>Phone: {searchResult.phone}</p>
                            <p>Neighborhood: {searchResult.neighborhood}</p>
                        </div>
                    </div>
                )}
                {/* Render other cards here */}
            </div>
        </>
    );
}

export default Blog_Title;
