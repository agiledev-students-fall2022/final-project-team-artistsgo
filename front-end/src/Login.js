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





