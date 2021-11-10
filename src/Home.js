import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import './Home.css';

function Up() {
    return (
    <h1>Welcome to the Homepage</h1>
    );
}

function But(){
    return(
        
        <body>
            
            <Link to="/form">
                <button className="log-but">Login</button>
            </Link>
            
    
            <Link to="register">
                <button>Register</button>
            </Link>
            
        
        </body>
        
    );
}

function Home() {
    return (
        <>
        
            <Up />
            <But/>
        
        </>
    );
}

export default Home;