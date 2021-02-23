import React from 'react'
import './NavBar.css'
import logoPNG from './assets/car_shape_silh.png'
import magnifierPNG from './assets/magnifier_ico.png'

function Navbar() {
    return ( 
        <nav className="l-navbar">
            <div className="l-navbar-content-container-left">
                <div className="l-navbar-logo-container">
                    <img src={logoPNG} alt="logo"/>
                    <div className="l-navbar-c-left-text-box">
                        <h1>Mono car catalog</h1>
                        <span>Powered by V8</span>  {/* V8 - js reference, get it ? :)) ..I'll, show myself out.. */}
                    </div>
                </div>
                <div onClick={focusSearchbar} className="l-navbar-searchbox-container">
                    <div className="l-navbar-searchbar">
                        <input placeholder="Pretraga" name="nav_search" type="text"/>
                        <img src={magnifierPNG} alt="search_ico"/>
                    </div>
                </div>
            </div>
            <div className="l-navbar-content-container-right">
                {responsiveUserMenu(true)}
                <div className="l-navbar-locale-toggle-container">
                    <select name="navbar_locale_toggle" id="navbar_locale_toggle">
                        <option value="HR">HR</option>
                        <option value="EN">EN</option>
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


/* Helper fns */

function focusSearchbar(){
    document.getElementsByName("nav_search")[0].focus();
}


function responsiveUserMenu(smallScreen){
    const userMenu = (
        <div className="l-navbar-user-menu">
            <ul>
                <li>Add vehicle</li>
                <li>My vehicles</li>
                <li>Logout</li>
            </ul>
        </div>
    )

    const userMenuSmallScreen = (
        <div className="l-navbar-user-menu-mobile">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
            </div>
        </div>
    )

    if(smallScreen) return userMenuSmallScreen;
    else return userMenu;
}