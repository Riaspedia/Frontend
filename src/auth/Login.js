import axios, { Axios } from "axios";
import React, { useState } from "react";
import { message, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import HeaderClient from "../components/layout/HeaderClient";
import FooterClient from "../components/layout/FooterClient";
import Cookies from "js-cookie"
import { baseURL } from "../components/routes/Config";

const Login = () => {
  let history = useHistory();
  let showPassword = document.getElementById("password");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  function handleShowPassword(e) {
    // console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
      showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
    console.log(showPassword);
  }

  const handleSubmit = () => {
    //urlnya tanya pakde sama variabelnya
    let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
    axios
      .post(baseURL + `/api/auth/login`, {
        email: input.email,
        password: input.password,
      })

      .then((res) => {
        let token = res.data.access_token
        let userId = res.data.user_id

        Cookies.set('token', token, {expires: inOneHours})
        Cookies.set('user_id', userId, {expires: inOneHours})
        history.push("/home");

      })

      .catch((err) => {
        message.error("Email atau password salah", 3);
      });
  };

  return (
    <div>
      <div
        className="cover"
        style={{
          backgroundImage: "url(img/background/RegisterBg.jpg)",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <nav id="menu" className="fake_menu" />
        <div id="login">
          <aside>
            <figure>
              <a href="/">
                <img
                  src="img/logo/LogoRiasPedia.png"
                  width="150"
                  height="36"
                  alt=""
                  class="logo_normal"
                ></img>
              </a>
            </figure>
            <form>
              <div className="form-group">
                <label>Masukkan Email Anda</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={input.email}
                  onChange={handleChange}
                  required
                />
                <i className="icon_mail_alt" />
              </div>
              <div className="form-group">
                <label>Masukkan Password Anda</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChange}
                  required
                />
                <i className="icon_lock_alt" />
              </div>
              <div className="clearfix add_bottom_30">
              <Checkbox onClick={handleShowPassword}>
                Tunjukkan Password
              </Checkbox>
                {/* <div className="checkboxes float-left">
                  <label className="container_check">
                    Tunjukkan Password
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div> */}
                <div className="float-right mt-1">
                  <a id="forgot" href="javascript:void(0);">
                    Lupa Password
                  </a>
                </div>
              </div>
              <Link
                className="btn_1 rounded full-width"
                onClick={handleSubmit}
              >
                Masuk
              </Link>
              <div className="text-center add_top_10">
                Belum punya akun?
                <strong>
                  <Link to="/register"> Daftar</Link>
                </strong>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Login;
