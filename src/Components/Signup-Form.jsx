import "./Signup-Form.css";
import { Link } from "react-router-dom";

function SignupForm() {
    return (
        <div className="sign-up">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <form>
                    <label>First Name</label>
                    <input type="text" placeholder="" />

                    <label>Last Name</label>
                    <input type="text" placeholder="" />

                    <label>Email</label>
                    <input type="email" placeholder="" />

                    <label>Password</label>
                    <input type="password" placeholder="" />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="" />

                    <label>Type of Account</label>
                    <select name="Type" id="type">
                        <option value="None">--Select One Option--</option>
                        <option value="Individual">Individual</option>
                        <option value="Business">Business</option>
                    </select>

                    <label>Neighbourhood</label>
                    <select name="Neighbourhood" id="neighbourhood">
                        <option value="None">--Select One Option--</option>
                        <option value="Individual">Laurelwood</option>
                        <option value="Business">Erbsville</option>
                        <option value="Business">Maple Hills</option>
                    </select>

                    <input type="button" value="Submit" />
                </form>
                <p>
                    By clicking the Sign Up button,you agree to our <br />
                    <a href="#">Terms and Condition</a> and{" "}
                    <a href="#">Policy Privacy</a>
                </p>
            </div>
            <p className="para-2">
                Already have an account? <Link to="/sign-up">Sign Up Here</Link>
            </p>
        </div>
    );
}

export default SignupForm;
