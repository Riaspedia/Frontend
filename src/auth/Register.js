import React, { useState } from "react";
import { message, Checkbox } from "antd";
import axios, { Axios } from "axios";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../components/routes/Config";

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
      .post(baseURL + `/api/auth/register`, {
        name: input.name,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
      })

      .then((res) => {
        history.push("/login");
      })

      .catch((err) => {
        message.error(err);
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
            <form autoComplete="off">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Masukkan Nama Lengkap Anda"
                  value={input.name}
                  onChange={handleChange}
                />
                <i className="ti-user" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Masukkan Email Anda"
                  value={input.email}
                  onChange={handleChange}
                />
                <i className="icon_mail_alt" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan Password Anda"
                  value={input.password}
                  onChange={handleChange}
                />
                <i className="icon_lock_alt" />
              </div>
              <div className="form-group">
                <label>Kofirmasi Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="Kofirmasi Password Anda"
                  value={input.password_confirmation}
                  onChange={handleChange}
                />
                <i className="icon_lock_alt" />
              </div>
              <Checkbox onClick={handleShowPassword}>
                Tunjukkan Password
              </Checkbox>
              <div id="pass-info" className="clearfix" />
              <Link
                className="btn_1 rounded full-width add_top_30"
                onClick={handleSubmit}
              >
                Daftar
              </Link>
              <div className="text-center add_top_10">
                Sudah punya akun?
                <strong>
                  <Link to="/login"> Masuk</Link>
                </strong>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Register;
