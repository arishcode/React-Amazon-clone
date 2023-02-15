import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
            <Link to="/Login">
                <div className="header__option">
                    <span className="header__optionline1">Hello</span>
                    <span className="header__optionline2">Sign in</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionline1">Return</span>
                    <span className="header__optionline2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionline1">Your</span>
                    <span className="header__optionline2">Prime</span>
                </div>
                <Link to="/Checkout">
                    <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionline2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
