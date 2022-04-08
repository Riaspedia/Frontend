import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../../assests/img/MUA1.jpg";
import Cookies from "js-cookie";
import { Input } from "antd";
import axios from "axios";
import { baseURL } from "../routes/Config";

const HeaderClient = () => {
  const [image, setImage] = useState();
  const onLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user_id");
    Cookies.remove("vendor_id");
    return;
  };

  useEffect(() => {
    //nnit kalau adami benya request disini. sampai sininyi dlu bisa.. cobamin nnti kalau adami api req profile dari be harusnya bisami.. sbaeb kalo get nya nanti
    //adapi response nya baru tak ubah yang pas get nya?

    axios
      .get(baseURL + `/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        //ini nnti sesuaikan sama response yang dikirim dari backend, biasanya kek bgitu bentuknya.
        setImage(res.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
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
                  <a href="/home">Beranda</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/outlet">Outlet</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/profileclient" className="p-0 ">
                    <img
                      src={image}
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
                <a
                  onClick={onLogout}
                  href="/"
                  class="logout nav-link text-danger"
                >
                  <i class="fa fa-fw fa-sign-out text-danger ml-3"></i>Keluar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderClient;
