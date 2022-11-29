// import React, { useState, useEffect} from "react";
// import { Link } from "react-router-dom";
// import jwt_decode from "jwt-decode";

import './Login.css';
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function App() {
    const [ profile, setProfile ] = useState([]);
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
    };

    return (
        <div className='container'>
            <h1>{profile.name}'s Page</h1>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <p> My Products: </p>
                    <p> My Services: </p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
}
export default App;



// export default function Login() {
    
//     const [user, setUser] = useState({});

//     function handleCallbackResponse(response) {
//       console.log("Encoded JWT ID Token: " + response.credential);
//       var userObject = jwt_decode(response.credential);
//       console.log(userObject)
//       setUser(userObject);
//       document.getElementById("signInDiv").hidden = true;
//     }
    
//     function handleSignOut(event) {
//       setUser({});
//       document.getElementById("signInDiv").hidden = false;
//     }
  
//     //testing user authentication
//     useEffect(() => {
//       /* global google */
//       google.accounts.id.initialize({
//         client_id: "186661128169-rtbrhibr9p5ne088h88sssvl4sei2nto.apps.googleusercontent.com",
//         callback: handleCallbackResponse
//       });
  
//       google.accounts.id.renderButton(
//         document.getElementById("signInDiv"),
//         { theme: "outline", sign: "large"}
//       );
  
//       google.accounts.id.prompt();
//     }, []);
//     //if we have no user: sign in button
//     //if we have user: show login button

//     /* FOR REGULARLY REGISTERING WITHOUT GOOGLE */
//     // const [loading, setLoading] = useState(false);
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     setLoading(true);
//     // }

//     return (
//         <>
//         <div id="page-wrap">
//         <div id = "signInDiv"></div>
//         {  Object.keys(user).length != 0 &&
//           <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
//         }
//         { user && 
//          <div> 
//             <img src={user.picture}></img>
//             <p>{user.name}</p>
//           </div>}
//         </div>

        {/* FOR REGULARLY REGISTERING WITHOUT GOOGLE */}
        {/* <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        //value of email, addOnChange
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        //value of password, add onChange
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                    </form>
                </div>
                <div className="card-footer">
                    <Link to="/forgot-password">Forgot Password?</Link>
                <div>
                    <Link to="/register">Already have an account? Register</Link>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div> */}
    //     </>
    // );
    // }





