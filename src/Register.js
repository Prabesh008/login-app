import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Register.css'
import {Link} from 'react-router-dom'

function Fill() {
    return (
        <body>
            {/* <div className="reg-container"> 
                <label>First name: </label>
                <input type="text"></input><br/>
                <label>Last name: </label>
                <input type="text"></input><br/>
                <label>Age: </label>
                <input type="number"></input><br/>
                <label>Gender: </label>
                <input type="checkbox"></input><br/>
                <label>Email: </label>
                <input type="email"></input><br/>
            </div>  */}
            {/* <div className="reg-container">
            <form>
                <div class="row">
                    <div className="col-email">
                        <input type="text" className="form-control" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="col-password">
                        <input type="password" className="form-control" placeholder="Enter password" name="pswd"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-phone">
                        <input type="text" class="form-control" placeholder="Phone Number" name="num"/>
                    </div>
                    
                </div>

            </form>
            </div> */}
            <div className="container2">
                <form>
                <div className="row">
                    <div className="col-6" id="c1">
                    <input type="firstname" className="form-control" id="i1" placeholder="Firstname" required></input>
                     </div>
                    <div className="col-6" id="c2">
                    <input type="Lastname" className="form-control" id="i2" placeholder="Lastname" required></input>
                    </div>
                    </div> 
                    <div className="row">
                        <div className="col-12" id="c3">
                            <input type="email" className="form-control" id="i3" placeholder="phone/email" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" id="c4">
                            <input type="password" className="form-control" id="i4" placeholder="password" required></input>
                        </div>
                    </div>

                <div className="row">
                    <div className="d-grid" id="b1">
                        <button type="button" className="btn btn-primary btn-block">Register</button>
                    </div>
                </div>
                </form>   
            </div>          
            
        
        </body>
    );

}


function Register() {
    return (
        <>
            <h1>Registration Page</h1>
            <Fill />
        </>

    );

}

export default Register;