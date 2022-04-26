const LoginForm = () => {
    
    return (
        <div className="loginContainer">
            <div className="login">
                <form action="/login" method="post">
                    <input type="text" name="Email" id="" placeholder="Email" required />
                    <input type="password" name="Password" id="" placeholder="Password" required />
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="forgotPassword">
                <a href="/forgotpassword">Forgot Password?</a>
            </div>
            <div className="createAccount">
                <button><a href="/register">Create a New Account</a></button>
            </div>
        </div>
    );
}
export default LoginForm;