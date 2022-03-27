import axios from "axios";
import React, { useState } from "react";
import { message } from "antd";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie"
import { baseURL } from "../components/routes/Config";

const LoginVendor = () => {
  let history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
    //urlnya tanya pakde sama variabelnya
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
        history.push("/dashboard");
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
        {/* <div id="preloader"> */}
        {/* <div id="">
            <div data-loader="circle-side" />
        </div> */}

        <div id="login">
          <aside>
            <figure>
              <a href="index.html">RiasPedia</a>
            </figure>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={input.email}
                  onChange={handleChange}
                  required
                />
                <i className="icon_mail_alt" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={input.password}
                  onChange={handleChange}
                  required
                />
                <i className="icon_lock_alt" />
              </div>
              <div className="clearfix add_bottom_30">
                <div className="checkboxes float-left">
                  <label className="container_check">
                    Remember me
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="float-right mt-1">
                  <a id="forgot" href="javascript:void(0);">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <Link
                to="/dashboard"
                className="btn_1 rounded full-width"
                onClick={handleSubmit}
              >
                Login to RiasPedia
              </Link>
              <div className="text-center add_top_10">
                New to RiasPedia?
                <strong>
                  <Link to="/register-vendor">Sign up!</Link>
                </strong>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LoginVendor;
