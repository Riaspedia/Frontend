import React, { useState } from "react";
import { message, Checkbox, Steps, Button } from "antd";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const { Step } = Steps;

const steps = [
  {
    title: "Owner Profile",
    content: "First-content",
  },
  {
    title: "Vendor/Outlet Profile",
    content: "Second-content",
  },
  {
    title: "Verification Mail",
    content: "Last-content",
  },
];

const RegisterVendor = () => {
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

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div
      style={{
        //backgroundImage: "url(img/background/RegisterBg.jpg)",
        //backgroundSize: "contain",
        //height: "100vh",
        margin: "15vh",
      }}
    >
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            href="/login-vendor"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
    /* <div>
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
      </div> }
      <div id="login">
        <aside>
          <figure>
            <a href="/">
              RiasPedia
              {/* <img src="img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" class="logo_sticky"> }
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
              </div> }
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
            {/* <a href="login.html" className="btn_1-admin rounded full-width add_top_30">Register Now!</a> }
            <Link
              to="/login"
              className="btn_1 rounded full-width add_top_30"
              onClick={handleSubmit}
            >
              Register Now!
            </Link>
            <div className="text-center add_top_10">
              Already have an acccount?
              <strong>
                <Link to="/login-vendor">Sign In</Link>
              </strong>
              {/* <strong><a href="login.html">Sign In</a></strong> }
            </div>
          </form>
        </aside>
      </div>
    </div>
  </div>*/
  );
};

export default RegisterVendor;
