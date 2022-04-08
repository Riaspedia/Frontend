import axios from "axios";
import React, { useState } from "react";
import { message, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { baseURL } from "../components/routes/Config";
import { CodesandboxLogo } from "phosphor-react";
import CardLoginRegisterAdmin from "./CardLoginRegisterAdmin";

const LoginVendor = () => {
  let showPassword = document.getElementById("password");
  let history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleShowPassword(e) {
    // console.log(`checked = ${e.target.checked}`);
    if (e.target.checked === true) {
      showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
    console.log(showPassword);
  }

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
    //urlnya tanya pakde sama variabelnya
    console.log(input);
    console.log("email = " + input.email);
    console.log("password = " + input.password);
    axios
      .post(baseURL + `/api/auth/admin/login`, {
        email: input.email,
        password: input.password,
      })

      .then((res) => {
        console.log("request success");
        let token = res.data.access_token;
        let userId = res.data.user_id;
        let vendorId = res.data.vendor_id;

        Cookies.set("token", token, { expires: inOneHours });
        Cookies.set("user_id", userId, { expires: inOneHours });
        Cookies.set("vendor_id", vendorId, { expires: inOneHours });

        if(vendorId == ""){
          history.push("/register-vendor-admin");
        } else {
          history.push("/list");
          console.log("push list");
        }
      })

      .catch((err) => {
        console.log("request gagal");
        message.error("Email atau Password salah", 3);
      });
  };

  return (
    <div>
      <div class="row justify-content-evenly align-items-center mt-5">
        <div class="col-sm-4 mx-auto ">
          <CardLoginRegisterAdmin />
        </div>
        <div class="col-sm-4 mx-auto">
          <div class="card" style={{ height: "50rem", width: "30rem" }}>
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
                  <label>Email</label>
                  <div className="input-group">
                    <i className="icon_mail_alt input-group-text" />
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Masukkan Email Anda"
                      value={input.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group register-user">
                  <label>Password</label>
                  <div className="input-group">
                    <i className="icon_lock_alt  input-group-text" />
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Masukkan Password Anda"
                      value={input.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="clearfix add_bottom_30">
                  <div className="checkboxes float-left">
                    <Checkbox onClick={handleShowPassword}>
                      Tunjukkan Password
                    </Checkbox>
                    {/* <label className="container_check">
                      Tunjukkan Password
                      <input type="checkbox" onClick={handleShowPassword}/>
                      <span className="checkmark"></span>
                    </label> */}
                  </div>
                </div>
                <Link
                  to={(Cookies.get('vendor_id' != "") ? "/list" : "/register-vendor-admin")}
                  className="btn_1 rounded full-width"
                  onClick={handleSubmit}
                >
                  Masuk 
                </Link>
                <div className="text-center add_top_10">
                  Belum punya akun?
                  <strong>
                    <Link to="/register-user-admin"> Daftar</Link>
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

export default LoginVendor;
