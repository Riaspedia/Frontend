import React, { useState } from "react";
import { message, Checkbox } from "antd";
import axios, { Axios } from "axios";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../components/routes/Config";
import CardLoginRegisterAdmin from "./CardLoginRegisterAdmin";
import Cookies from "js-cookie";

const RegisterUserAdmin = () => {
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
    axios
      .post(baseURL + `/api/auth/register`, {
        name: input.name,
        email: input.email,
        password: input.password,
        password_confirmation: input.password_confirmation,
      })

      .then((res) => {
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
        axios
          .post(baseURL + `/api/auth/login`, {
            email: input.email,
            password: input.password,
          })

          .then((res) => {
            history.push("/login-vendor");
          })

          .catch((err) => {
            message.error("Email atau password salah", 3);
          });
      })

      .catch((err) => {
        message.error("Email atau password salah", 3);
      });

    setInput({
      ...input,
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <div>
      <div class="row justify-content-evenly align-items-center mt-5">
        <div class="col-sm-4 mx-auto ">
          <CardLoginRegisterAdmin />
        </div>

        <div class="col-sm-4 mx-auto ">
          <div class="card">
            <div class="card-body">
              <figure>
                <a href="/">
                  <img
                    src="img/logo/LogoRiasPedia.png"
                    width="150"
                    height="36"
                    alt=""
                    class="logo_normal rounded mx-auto d-block"
                  ></img>
                </a>
              </figure>
              <hr class="mt-2" />
              <form autoComplete="off">
                <div className="form-group register-user">
                  <label>Nama Lengkap</label>
                  <div className="input-group">
                    <i className="ti-user input-group-text" />
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Masukkan Nama Lengkap Anda"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Email</label>
                  <div className="input-group">
                    <i className="icon_mail_alt input-group-text" />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Masukkan Email Anda"
                      value={input.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Password</label>
                  <div className="input-group">
                    <i className="icon_lock_alt input-group-text" />
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Masukkan Password Anda"
                      value={input.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Kofirmasi Password</label>
                  <div className="input-group">
                    <i className="icon_lock_alt input-group-text" />
                    <input
                      className="form-control"
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      placeholder="Konfirmasi Password Anda"
                      value={input.password_confirmation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Checkbox onClick={handleShowPassword}>
                  Tunjukkan Password
                </Checkbox>
                <div id="pass-info" className="clearfix" />
                <Link
                  to="/login-vendor"
                  className="btn_1 rounded full-width add_top_30"
                  onClick={handleSubmit}
                >
                  Daftar
                </Link>
                <div className="text-center add_top_10">
                  Sudah punya akun?
                  <strong>
                    <Link to="/login-vendor"> Masuk</Link>
                  </strong>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserAdmin;
