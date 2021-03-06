import React, {useState, useEffect} from 'react'
import './NavBar.css'
import logoPNG from './assets/car_shape_silh.png'
import magnifierPNG from './assets/magnifier_ico.png'
import NavbarResponsiveUserMenu from './NavbarResponsiveUserMenu'
import {observer} from 'mobx-react-lite'
import {useAuthStore, useUIStore} from '../../../StoreProvider'
import {nanoid} from 'nanoid'
import {withNamespaces} from 'react-i18next'

const Navbar = observer(({t}) => {
    const [smallScreen, setSmallScreen] = useState(false);
    const {authState} = useAuthStore();
    const {lang, availableTranslations, switchLocale} = useUIStore();

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


    function handleSwitchLocale(event){
        switchLocale(event.target.value);
    }


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
                {authState.isAuthenticated &&
                    <div onClick={focusSearchbar} className="l-navbar-searchbox-container">
                        <div className="l-navbar-searchbar">
                            <input placeholder={t("common.search")} name="nav_search" type="text"/>
                            <img src={magnifierPNG} alt="search_ico"/>
                        </div>
                    </div>
                }   
            </div>
            <div className="l-navbar-content-container-right">
                <NavbarResponsiveUserMenu isSmallScreen={smallScreen} />
                <div className="l-navbar-locale-toggle-container">
                    <select value={lang} onChange={handleSwitchLocale} name="navbar_locale_toggle" id="navbar_locale_toggle">
                        {Object.keys(availableTranslations).map(lang => {
                            return <option key={nanoid()} value={lang}>{lang}</option>
                        })}
                    </select>
                </div>
            </div>
        </nav>
    )
})

export default withNamespaces()(Navbar);


/* Helper fns */

function focusSearchbar(){
    document.getElementsByName("nav_search")[0].focus();
}


