import React from "react";
import { Link } from "react-router-dom";

const HeaderClient = () => {
  return (
    <div id="page">
      <header className="header menu_fixed">
        {/* <div id="preloader">
                    <div data-loader="circle-side" />
                </div> */}
        {/* /Page Preload */}
        <div id="logo">
          <a href="index.html">RiasPedia
            {/* <img src="img/logo.svg" width="150" height="36" alt="" class="logo_normal">
            <img src="img/logo_sticky.svg" width="150" height="36" alt="" class="logo_sticky"> */}
          </a>
        </div>
        <ul id="top_menu">
          {/* <li><a href="cart-1.html" class="cart-menu-btn" title="Cart"><strong>4</strong></a></li> */}
          <li>
            <Link to="/" id="sign-out" className="login" title="Sign Out">
              Sign Out
            </Link>
          </li>
          {/* <li><a href="wishlist.html" class="wishlist_bt_top" title="Your wishlist">Your wishlist</a></li> */}
        </ul>
        {/* /top_menu */}
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          <ul>
            <li>
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#0">Outlet</a>
              </span>
              <ul>
                <li>
                  <Link to="/outlet">Rias Pedia Outlet</Link>
                </li>
                <li>
                  <Link to="/detail">Rias Pedia Detail Outlet</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>
                <a href="#">Profile</a>
              </span>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/editprofileclient">Edit Profile</Link>
                </li>
              </ul>

            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderClient
