import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
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
                <div className="card-header">Register</div>
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
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Confirm Password"
                        //value of password, add onChange
                        />
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary"
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


