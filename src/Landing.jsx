import LocalBusiness from "./assets/local-business-icon.png";

function Landing() {
    return (
        <div>
            <div className="title">
                <h1>Find Local Businesses Near You</h1>
            </div>
            <svg
                width="98vw"
                height="25vw"
                xmlns="http://www.w3.org/2000/svg"
                id="rect">
                <rect
                    width="97vw"
                    height="25vw"
                    x="10"
                    y="0"
                    rx="20"
                    ry="20"
                    fill="#3d30a2"
                />
            </svg>
            <p id="description">
                NeighbourNet is a platform for local neighborhoods to discover,{" "}
                <br />
                connect with, and support nearby businesses. We aim to cultivate{" "}
                <br />a sense of belonging and pride in local economies,
                enhancing the <br />
                vitality and sustainability of neighborhoods.
            </p>
            <button id="get-started">Get Started</button>
            <img id="local-business-icon" src={LocalBusiness}></img>
        </div>
    );
}

export default Landing;
