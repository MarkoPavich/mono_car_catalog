import React, {useState, useEffect} from 'react'
import './NavBar.css'
import logoPNG from './assets/car_shape_silh.png'
import magnifierPNG from './assets/magnifier_ico.png'
import NavbarResponsiveUserMenu from './NavbarResponsiveUserMenu'

function Navbar() {
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        function handleResize(){
            setSmallScreen(window.innerWidth < 1250);
        };

        return function listenerCleanup(){
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return ( 
        <nav className="l-navbar">
            <div className="l-navbar-content-container-left">
                <div className="l-navbar-logo-container">
                    <img src={logoPNG} alt="logo"/>
                    <div className="l-navbar-c-left-text-box">
                        <h1>Mono car catalog</h1>
                        <span>Powered by V8</span>
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
                {NavbarResponsiveUserMenu(smallScreen)}
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


