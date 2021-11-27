import './Header.css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
        <div className="header" >
            <Link to="/">
                <img className="header-icon"
                src='../picture/airbnbLogo.png'
                alt=""
                /> 
            </Link>
            
            <div className="header-center">
                <input type="text"/>
                <div className="block-searchIcon">
                    <SearchIcon />
                </div>
                
            </div>
            <div className="header-right">
                <p className="host-langIcon">Become a host</p>
                <LanguageIcon className="host-langIcon"/>
                <div className="menu-avatar">
                    <MenuIcon />
                    <AccountCircleIcon fontSize='large'/>
                </div>    
            </div>
        </div>
    )
}

export default Header
