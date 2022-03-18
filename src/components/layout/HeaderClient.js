import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assests/img/MUA1.jpg";

const HeaderClient = () => {
  return (
    <div id="page">
      <header className="header menu_fixed">
        {/* <div id="preloader">
                    <div data-loader="circle-side" />
                </div> */}
        {/* /Page Preload */}
        <div id="logo">
          <a href="/">
            <img
              src="img/logo/LogoRiasPedia.png"
              width="150"
              height="36"
              alt=""
              class="logo_normal"
            ></img>
            <img
              src="img/logo/LogoRiasPedia.png"
              width="150"
              height="36"
              alt=""
              class="logo_sticky"
            ></img>
          </a>
        </div>
        <ul id="top_menu">
          <li>
            <Link to="/" id="sign-out" className="login" title="Sign Out">
              Sign Out
            </Link>
          </li>
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
                <a href="/">Beranda</a>
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
              <span >
                <a href="/profileclient" className="p-0">
                <img
                  src={Image}
                  alt="profile-picture"
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginLeft: "24px",
                  }}
                />

                </a>
               
              </span>
              {/* <Link to="/profileclient"></Link> */}
              {/* <ul>
                <li>
                  <Link to="/profileclient">Profile</Link>
                </li>
                <li>
                  <Link to="/editprofileclient">Edit Profile</Link>
                </li>
              </ul> */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderClient;
