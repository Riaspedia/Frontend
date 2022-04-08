import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";

const Header = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const showLoginModal = () => {
    setIsLoginVisible(true);
  };

  const showRegisterModal = () => {
    setIsRegisterVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
  };

  const isAdmin = () => {};

  return (
    <div id="page">
      <header className="header menu_fixed">
        {/* <div id="preloader">
                <div data-loader="circle-side" />
             </div>  */}
        {/* /Page Preload */}
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
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          {
            <ul>
              <li>
                <Button
                  type="primary"
                  style={{ width: "100px" }}
                  href="/register"
                  danger
                >
                  Daftar
                </Button>
              </li>
              &nbsp;&nbsp;
              <li>
                <Button danger style={{ width: "100px" }} href="/login">
                  Masuk
                </Button>
              </li>
            </ul>
          }
        </nav>

        {/* <Modal
          centered={true}
          closable={false}
          footer={null}
          visible={isLoginVisible}
          onCancel={handleCancel}
        >
          <Button type="danger" block href="login-vendor">
            Login as Admin
          </Button>
          <div className="divider">
            <span>Or</span>
          </div>
          <Button className="btn btn-outline-danger" href="/login" block danger>
            Login as Client
          </Button>
        </Modal> */}
        {/* 
        <Modal
          centered={true}
          closable={false}
          footer={null}
          visible={isRegisterVisible}
          onCancel={handleCancel}
        >
          <Button type="danger" block href="/register-user-admin">
            Register as Admin
          </Button>
          <div className="divider">
            <span>Or</span>
          </div>
          <Button className="btn btn-outline-danger" block danger href="/register">
            Register as Client
          </Button>
        </Modal> */}
      </header>
    </div>
  );
};

export default Header;
