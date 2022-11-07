import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
    
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    }

    return (
        <>
        <div className="container">
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
        </div>
        </>
    );
    }





