import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.scss'

export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className="navbar-brand" id= "main-title" >
                <Link id='mainn' to= "/"><img id='main-title-img' src={require('./sd.png')}alt = "headimg"/>MeetMate</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <Link to = '/Home'  className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = '/About' className="nav-link active">About</Link>
                            
                        </li>
                    </ul>
                    
                </div>
        
     
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
  
}
