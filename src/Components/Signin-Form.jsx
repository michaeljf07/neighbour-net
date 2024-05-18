import { Link } from "react-router-dom";
import "./Signin-Form.css";

function SigninForm() {
    return (
        <div className="sign-in">
            <div className="login-box">
                <h1>Login</h1>
                <form>
                    <label>Email</label>
                    <input type="email" placeholder="" />
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    <input type="button" value="Submit" />
                </form>
            </div>
            <p className="no-account">
                Don't have an account? <Link to="/sign-up">Sign Up Here</Link>
            </p>
        </div>
    );
}

export default SigninForm;
