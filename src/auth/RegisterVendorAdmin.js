import React, { useState } from "react";
import { message, Checkbox } from "antd";
import axios, { Axios } from "axios";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../components/routes/Config";
import CardLoginRegisterAdmin from "./CardLoginRegisterAdmin";

const RegisterVendorAdmin = () => {
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
        message.error("Email atau password salah", 3);
      });
  };

  return (
    <div>
      <div class="row justify-content-evenly mt-5">
        <div class="col-sm-4 mx-auto ">
          <CardLoginRegisterAdmin />
        </div>

        <div class="col-sm-5 mx-auto ml-2 ">
          <div class="card" style={{ width: "40rem" }}>
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
                <div className="row wrapper">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nama Vendor</label>
                      <input
                        className="form-control"
                        placeholder="Nama Vendor"
                          id="name"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Kategori Vendor</label>
                      <input
                        className="form-control"
                        placeholder="Kategori Vendor"
                        id="category"
                        type="text"
                        name="category"
                        value={input.category}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Alamat</label>
                      <textarea
                        className="form-control"
                        placeholder="Deskripsi"
                        type="text"
                        id="description"
                        name="descrption"
                        value={input.descrption}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row justify-content-start">
                  <div class="col-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div className="form-group">
                      <label>Telepon</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={input.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="row justify-content-start">
                  <div class="col-6">
                    <div className="form-group">
                      <label>Provinsi</label>
                      <select
                        className="w-100 input-group-select"
                        style={{
                          height: "42px",
                          borderRadius: "3px",
                          padding: "10px",
                          borderColor: "#d2d8dd",
                        }}
                      >
                        <option defaultValue="">Provinsi</option>
                        {/* {inputProvince.province && (
                              <>
                                {inputProvince.province.map((province) => {
                                  return (
                                    <>
                                      <option
                                        value={[province.name, province.id]}
                                      >
                                        {province.name}
                                      </option>
                                    </>
                                  );
                                })}
                              </>
                            )} */}
                      </select>
                    </div>
                  </div>
                  <div class="col-6">
                    <div className="form-group">
                      <label>Kota</label>
                      <select
                        className="w-100 input-group-select"
                        style={{
                          height: "42px",
                          borderRadius: "3px",
                          padding: "10px",
                          borderColor: "#d2d8dd",
                        }}
                      >
                        <option defaultValue="">Kota</option>
                        {/* {inputProvince.province && (
                              <>
                                {inputProvince.province.map((province) => {
                                  return (
                                    <>
                                      <option
                                        value={[province.name, province.id]}
                                      >
                                        {province.name}
                                      </option>
                                    </>
                                  );
                                })}
                              </>
                            )} */}
                      </select>
                    </div>
                  </div>
                </div>

                {/* <div className="form-group">
                  <label>Nama Vendor </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Nama Vendor"
                    value={input.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label> Email </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email Vendor"
                    value={input.email}
                    onChange={handleChange}
                  />
                </div> */}
                {/* <div className="form-group">
                  <label>Masukkan Password Vendor</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password Vendor"
                    value={input.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Kofirmasi password Vendor</label>
                  <input
                    className="form-control"
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Konfirmasi Password Vendor"
                    value={input.password_confirmation}
                    onChange={handleChange}
                  />
                </div>
                <Checkbox onClick={handleShowPassword}>
                  Tunjukkan Password
                </Checkbox> */}
                <div id="pass-info" className="clearfix" />
                <Link
                  to="/register-vendor-admin"
                  className="btn_1 rounded full-width add_top_30"
                  onClick={handleSubmit}
                >
                  Daftar Vendor
                </Link>
                <Link
                  to="/register-user-admin"
                  className="btn_1 rounded full-width add_top_30"
                  onClick={handleSubmit}
                >
                  Kembali
                </Link>
                {/* <div className="text-center add_top_10">
                  Sudah punya akun?
                  <strong>
                    <Link to="/login"> Masuk</Link>
                  </strong>
                </div> */}
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

export default RegisterVendorAdmin;
