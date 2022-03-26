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
    //urlnya tanya pakde sama variabelnya
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
            let token = res.data.access_token;
            let userId = res.data.user_id;

            Cookies.set("token", token, { expires: inOneHours });
            Cookies.set("user_id", userId, { expires: inOneHours });
            history.push("/register-vendor-admin");
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
                  <label>Masukkan Nama Lengkap Anda</label>
                  <div className="input-group">
                    <i className="ti-user input-group-text" />
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Nama Lengkap"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Masukkan Email Anda</label>
                  <div className="input-group">
                    <i className="icon_mail_alt input-group-text" />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={input.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Masukkan Password Anda</label>
                  <div className="input-group">
                    <i className="icon_lock_alt input-group-text" />
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={input.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Kofirmasi password Anda</label>
                  <div className="input-group">
                    <i className="icon_lock_alt input-group-text" />
                    <input
                      className="form-control"
                      type="password"
                      id="password_confirmation"
                      name="password_confirmation"
                      placeholder="Konfirmasi Password"
                      value={input.password_confirmation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Checkbox onClick={handleShowPassword}>
                  Tunjukkan Password
                </Checkbox>
                <div id="pass-info" className="clearfix" />
                {/* <a href="login.html" className="btn_1-admin rounded full-width add_top_30">Register Now!</a> */}
                <Link
                  to="/register-vendor-admin"
                  className="btn_1 rounded full-width add_top_30"
                  onClick={handleSubmit}
                >
                  Next
                </Link>
                <div className="text-center add_top_10">
                  Sudah punya akun?
                  <strong>
                    <Link to="/login"> Masuk</Link>
                  </strong>
                  {/* <strong><a href="login.html">Sign In</a></strong> */}
                </div>
              </form>

              {/* <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserAdmin;
