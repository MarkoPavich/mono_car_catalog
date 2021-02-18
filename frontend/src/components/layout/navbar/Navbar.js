import React from 'react'
import './NavBar.css'
import logoPNG from './assets/car_shape_silh.png'

function Navbar() {
    return ( 
        <nav className="l-navbar">
            <div className="l-navbar-content-container-left">
                <img src={logoPNG} alt="logo"/>
                <div className="l-navbar-c-left-text-box">
                    <h1>Mono car catalog</h1>
                    <span>Powered by V8</span>
                </div>
                <div className="l-navbar-searchbox-container">

                </div>
            </div>
            <div className="l-navbar-content-container-right">
                
            </div>
        </nav>
    )
}

export default Navbar;

