import React from "react";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


function Header(){
    return (
        <div className="header">
            <div className="header_logo">
                <StorefrontIcon className="header__logoImage" fontSize="medium"/>
                <h2 className="header__logoTitle">eShop</h2>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div> 
            <div className="header__nav">
            <div className="nav__item">
                <span className="nav__itemLineOne">Hello Guest</span>
                <span className="nav__itemLineTwo">Sign In</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">Your</span>
                <span className="nav__itemLineTwo">Shop</span>
            </div>
            <div className="nav__item">
                <span className="nav__itemLineOne">
                    <ShoppingCartIcon className="nav__itemBasket"></ShoppingCartIcon>
                </span>
                <span className="nav__itemLineTwo nav__basketCount">0</span>
            </div>
            </div>
        </div>
    );
}

export default Header;