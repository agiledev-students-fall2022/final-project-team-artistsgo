import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    async function handleRegister(e) {
        e.preventDefault()

        const form = e.target;
        const user = {
            username: form[0].value,
            email: form[1].value,
            password: form[2].value
        }

        console.log(user)
        fetch("/register", {
            method: "POST",
            headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            throw(err)
        })
    }
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/isUserAuth", {
            method: "GET",
            headers: {
            "x-access-token": localStorage.getItem("token")
            }
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            if(data.isLoggedIn) navigate("/")
        })
    }, [])
    
    // const [loading, setLoading] = useState(false);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    // }

    return (
        <>
        <div className="container">
            <div className="row">

            <div className="col-md-6 offset-md-3">
                <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                    <form onSubmit={e => handleRegister(e)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Pick a username"
                        //value of email, addOnChange
                        />
                    </div>
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
                        // disabled={loading}
                        type="submit"
                        className="btn btn-primary"
                        value="Register"
                    >
                        Register
                    </button>
                    </form>
                </div>
                <div className="card-footer">
                    <Link to="/login">Already have an account? Login</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}


