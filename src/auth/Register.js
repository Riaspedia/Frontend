import React, { useState } from "react";
import { message, Checkbox } from "antd";
import axios, { Axios } from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  let showPassword = document.getElementById("password");
  let showPassword2 = document.getElementById("password_confirmation");

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleShowPassword(e) {
    // console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
      showPassword.type = "text";
      showPassword2.type = "text";
    } else {
      showPassword.type = "password";
      showPassword2.type = "password";
    }
    console.log(showPassword);
  }

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    //urlnya tanya pakde sama variabelnya
    axios
      .post(`htpps://127.0.0.1/api/auth/register`, {
        name: input.name,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
      })

      .then((res) => {
        history.push("/login");
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
          height: "103.5vh",
        }}
      >
        <nav id="menu" className="fake_menu" />
        {/* <div id="preloader">
            <div data-loader="circle-side" />
        </div> */}
        <div id="login">
          <aside>
            <figure>
              <a href="index.html">
                RiasPedia
                {/* <img src="img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" class="logo_sticky"> */}
              </a>
            </figure>
            <form autoComplete="off">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                />
                <i className="ti-user" />
              </div>
              {/* <div className="form-group">
                    <label>Your Last Name</label>
                    <input className="form-control" type="text" />
                    <i className="ti-user" />
                </div> */}
              <div className="form-group">
                <label>Your Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                <i className="icon_mail_alt" />
              </div>
              <div className="form-group">
                <label>Your password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                />
                <i className="icon_lock_alt" />
              </div>
              <div className="form-group">
                <label>Confirm password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={input.password_confirmation}
                  onChange={handleChange}
                />
                <i className="icon_lock_alt" />
              </div>
              <Checkbox onClick={handleShowPassword}>
                Show Your Password
              </Checkbox>
              <div id="pass-info" className="clearfix" />
              {/* <a href="login.html" className="btn_1-admin rounded full-width add_top_30">Register Now!</a> */}
              <Link
                to="/login"
                className="btn_1-admin rounded full-width add_top_30"
                onClick={handleSubmit}
              >
                Register Now!
              </Link>
              <div className="text-center add_top_10">
                Already have an acccount?
                <strong>
                  <Link to="/login">Sign In</Link>
                </strong>
                {/* <strong><a href="login.html">Sign In</a></strong> */}
              </div>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Register;
