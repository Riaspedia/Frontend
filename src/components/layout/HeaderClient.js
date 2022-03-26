import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assests/img/MUA1.jpg";

const HeaderClient = () => {
  return (
    <div id="page">
      <header className="header menu_fixed">
        <div id="logo">
          <a href="/">
            <img
              src="/img/logo/LogoRiasPedia.png"
              width="150"
              height="36"
              alt=""
              class="logo_normal"
            ></img>
            <img
              src="/img/logo/LogoRiasPedia.png"
              width="150"
              height="36"
              alt=""
              class="logo_sticky"
            ></img>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center">
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
                    <Link to="/detailOutlet">Rias Pedia Detail Outlet</Link>
                  </li>
                </ul>
              </li>
              <li>
                <span>
                  <a href="/profileclient" className="p-0 ">
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
              </li>
              <li>
              <a  href="/" class="logout nav-link text-danger"><i class="fa fa-fw fa-sign-out text-danger" ></i>Keluar</a>
            </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderClient;
