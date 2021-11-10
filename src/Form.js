import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import './Form.css'

function Header() {
    return (
        <div className="container">
            <header>
                <h1>Login Form</h1>
            </header>
        </div>
    )
}

function Main() {
    return (
        <body>
            <div className="container1" >
                <form className="was-validated">
                    <div className="row"> 
                    <label for="email" class="form-label">Email:</label>
                    <div className="col-6" id="c2">
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required></input>
                    <div className="valid-feedback">Valid.</div>
                    </div>
                    <div className="row">
                    <label for="pwd" className="form-label">Password:</label>
                        <div className="col-6">
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required></input>
                    </div>
                    </div>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers,<br/>
                        and must not contain spaces, special characters, or emoji.
                    </div>
                    <div className="row ">
                       <div className="col-3" id="log1">  
                    <button type="button" className="btn btn-primary">Login</button>
                    </div>
                    <div className="col-4" id="reg1">
                    <Link to="./register">
                        <span>Create an Account</span>
                    </Link>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        </body>
    );
}

function Form() {
    return (

        <>
            <Header />
            <Main />
        </>

    );

}

export default Form;