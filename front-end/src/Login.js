import './Login.css'

/**
 * A React component that represents the Form page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const handleSubmit = event => {
    event.preventDefault();
    console.log("Form Submitted");
}
const Login = props => {
    return (
    <>
    <h1>Login</h1>
    <div>
        <form onSubmit={handleSubmit}>
            <div className="user-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            </div>
            <div className="pass-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            </div>
            <div>
                <button className="button button2">Submit</button>
            </div>
        </form>
    </div>
    <div className ="bOfPage">
        <h3>Don't have an account?</h3>
        <a href='./Register'>Sign up</a>
    </div>
    </>
    )
}

export default Login