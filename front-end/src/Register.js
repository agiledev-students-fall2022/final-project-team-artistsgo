import './Register.css'

/**
 * A React component that represents the Form page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const Register = props => {
    return (
    <>
    <h1>Register</h1>
    <div>
        <form>
            <div className="email-container">
                <label>Email </label>
                <input type="text" name="email" required />
            </div>
            <div className="user-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            </div>
            <div className="pass-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            </div>
            <div className="button-container">
                <input type= "submit" />
            </div>
        </form>
    </div>
    </>
    )
}

export default Register