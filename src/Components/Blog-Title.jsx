import "./Blog-Title.css";

function Blog_Title() {
    const neighbourhood = "Erbsville";
    return (
        <>
            <div className="header">
                <p id="neighbourhood-title">{neighbourhood} Today</p>
            </div>
        </>
    );
}

export default Blog_Title;
