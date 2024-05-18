import "./signup-business.css";

function Signup_Business() {
    return (
        <>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
            </style>
            <div className="sign-up-business">
                <h1>Sign Up</h1>
                <form>
                    <label>Name of Business</label>
                    <input type="text" placeholder="" />

                    <label>Location</label>
                    <input type="text" placeholder="" />

                    <label>Phone Number</label>
                    <input type="email" placeholder="optional" />

                    <label>Website</label>
                    <input type="password" placeholder="optional" />

                    <input type="button" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default Signup_Business;
