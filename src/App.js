import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Register from './Register';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';


function App() {
    return (
        <>
        <Router>
            <div className="App">
                <switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/form" component={Form} />
                    <Route path="/register" component={Register} />
                </switch>
            </div>
        </Router>
        </>
        
    );    
    
}
export default App;

