import "./Blog-Title.css";
import React, { useState } from "react";

function Blog_Title() {
    const neighbourhood = "Erbsville";

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Search Query: ${searchQuery}`);
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
        </>
    );
}

export default Blog_Title;
