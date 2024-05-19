import Nav from "../Components/Nav.jsx";
import Blog_Title from "../Components/Blog-Title.jsx";

function Blog() {
    const componentsData = [
        {
            comments: 4,
            description: "I love this neighbourhood!",
            image_url: "Sample Images/Emily.jpeg",
            likes: 3,
            user: "Emily",
        },
        {
            comments: 2,
            description: "Test description!?",
            image_url: "Sample Images/Bob.webp",
            likes: 1,
            user: "Bob",
        },
        {
            comments: 2,
            description: "AGGGH!",
            image_url: "Sample Images/Bob.webp",
            likes: 1,
            user: "Oliver",
        },
    ];

    return (
        <>
            <Nav />
            <Blog_Title />
            <div className="feed-container">
                {componentsData.map((post, index) => (
                    <div key={index} className="post-container">
                        <h2 className="post-user">{post.user}</h2>
                        <p className="post-description">{post.description}</p>
                        <img
                            className="post-image"
                            src={post.image_url}
                            alt={post.description}
                        />
                        <p className="post-metadata">
                            Likes: {post.likes} | Comments: {post.comments}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blog;
