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
    <div className="wrapper">
        <form>
            <div className="user-container">
                <label>Username: </label>
                <input type="text" name="uname" required />
            </div>
            <div className="pass-container">
                <label>Password: </label>
                <input type="password" name="pass" required />
            </div>
            <div className="pass-container">
                <label>Confirm Password: </label>
                <input type="password" name="pass" required />
            </div>
            <div>
                <button className="button button2">Submit</button>
            </div>
        </form>
    </div>
    </>
    )
}

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

export default Register