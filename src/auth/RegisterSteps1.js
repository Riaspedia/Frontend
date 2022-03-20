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
    <form autoComplete="off">
      <div className="form-group">
        <label>Your Name</label>
        <input
          style={{ textAlign: "center" }}
          className="form-control"
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Your Email</label>
        <input
          style={{ textAlign: "center" }}
          className="form-control"
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Your password</label>
        <input
          style={{ textAlign: "center" }}
          className="form-control"
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Confirm password</label>
        <input
          style={{ textAlign: "center" }}
          className="form-control"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={input.password_confirmation}
          onChange={handleChange}
        />
      </div>
      <Checkbox onClick={handleShowPassword}>Show Your Password</Checkbox>
      <div id="pass-info" className="clearfix" />
    </form>
  );
};

export default RegisterSteps1;
