import React, { useState } from "react";
import { message, Checkbox, Steps, Button } from "antd";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const RegisterSteps1 = () => {
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

  /* const handleSubmit = () => {
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
  };*/
  return (
    <div id="login">
      {/* <aside> */}
      <div>
        <a href="#">
          <img
            src="img/logo/LogoRiasPedia.png"
            width="150"
            height="36"
            alt=""
            class="logo_normal"
          ></img>
        </a>
        <hr class="mt-3 wrapper" />
      </div>

      <form autoComplete="off"  class="ml-100%">
        <div className="form-group" style={{ textAlign: "start" }}>
          <label>Masukkan Nama Lengkap Anda</label>
          <input
            style={{ textAlign: "start" }}
            className="form-control"
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={input.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group" style={{ textAlign: "start" }}>
          <label>Masukkan Email Anda</label>
          <input
            style={{ textAlign: "start" }}
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ textAlign: "start" }}>
          <label>Masukkan Password Anda</label>
          <input
            style={{ textAlign: "start" }}
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ textAlign: "start" }}>
          <label>Konfirmasi Password Anda</label>
          <input
            style={{ textAlign: "start" }}
            className="form-control"
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Konfirmasi Password"
            value={input.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ textAlign: "start" }}>
          <Checkbox onClick={handleShowPassword}>Show Your Password</Checkbox>
        </div>

        <div id="pass-info" className="clearfix" />
      </form>
      {/* </aside> */}
    </div>
  );
};

export default RegisterSteps1;
