import React, { useState, useEffect } from "react";
import { message, Checkbox } from "antd";
import axios, { Axios } from "axios";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../components/routes/Config";
import CardLoginRegisterAdmin from "./CardLoginRegisterAdmin";
import Cookies from "js-cookie";

const RegisterVendorAdmin = () => {
  let history = useHistory();
  const [inputProvince, setInputProvince] = useState([]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    category: "",
    address: "",
    phone: "",
    province: "",
    city: "",
    description: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const dataProvinces = async () => {
    let result = await axios.get(
      `https://api.binderbyte.com/wilayah/provinsi?api_key=7ed0f4ec831869da8045fec939a8deffcbdbc57b208cfb0069794c237de69083`
    );
    let data = result.data.value;
    console.log(data);
    setInputProvince({
      province: data.map((key) => {
        return {
          id: key.id,
          name: key.name,
        };
      }),
    });
  };

  useEffect(() => {
    dataProvinces();
  }, []);

  const dataCity = async (id) => {
    console.log(id);
    let resultCity = await axios.get(
      `https://api.binderbyte.com/wilayah/kabupaten?api_key=079fc527c1d3fdf63c64cc384bc51b9e6fff9b7552c8eb493db7b2035d70c421&id_provinsi=${id}`
    );
    let data = resultCity.data.value;
    setInputProvince({
      ...inputProvince,
      cities: data.map((key) => {
        return {
          id: key.id,
          id_province: key.id_provinsi,
          name: key.name,
        };
      }),
    });
  };

  const handleProvinceSelect = (event) => {
    let dataProvince = event.split(",");
    console.log(dataProvince);
    setInput({ ...input, province: dataProvince[0] });

    dataCity(dataProvince[1]);
  };

  const handleCitySelect = (event) => {
    let dataCity = event.split(",");
    setInput({ ...input, city: dataCity[0] });
  };

  const handleSubmit = () => {
    console.log("kenapa ndak mau masuk");
    let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
    //urlnya tanya pakde sama variabelnya
    axios
      .post(
        baseURL + `/api/auth/addVendor`,
        {
          name: input.name,
          category: input.category,
          address: input.address,
          email: input.email,
          phone: input.phone,
          city: input.city.toLocaleLowerCase(),
          description: input.description,
          latitude: input.latitude,
          longitude: input.longitude,
        },
        {
          headers: {
            Authorization: `bearer ` + Cookies.get("token"),
          },
        }
      )

      .then((res) => {
        Cookies.set("vendor_id", res.data.data, { expires: inOneHours });
        history.push("/list");
      })

      .catch((err) => {
        message.error(err);
      });
  };
  console.log(input);

  return (
    <div>
      <div class="row justify-content-evenly align-items-center mt-5">
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
                        placeholder="Masukkan Nama Vendor"
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
                        placeholder="Masukkan Kategori Vendor"
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
                        placeholder="Masukkan Alamat"
                        type="text"
                        id="address"
                        name="address"
                        value={input.address}
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
                        placeholder="Masukkan Email"
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
                        placeholder="Masukkan Telepon"
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
                        onChange={(e) => handleProvinceSelect(e.target.value)}
                      >
                        <option defaultValue="">Provinsi</option>
                        {inputProvince.province && (
                          <>
                            {inputProvince.province.map((province) => {
                              return (
                                <>
                                  <option value={[province.name, province.id]}>
                                    {province.name}
                                  </option>
                                </>
                              );
                            })}
                          </>
                        )}
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
                        onChange={(e) => handleCitySelect(e.target.value)}
                      >
                        <option defaultValue="">Kota</option>
                        {inputProvince.cities && (
                          <>
                            {inputProvince.cities.map((city) => {
                              return (
                                <>
                                  <option value={[city.name, city.id]}>
                                    {city.name}
                                  </option>
                                </>
                              );
                            })}
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div id="pass-info" className="clearfix" />
                {/* <div class="d-grid gap-2 col-6 mx-auto">
                  <Link
                    className="btn btn-primary" type="button"
                    onClick={handleSubmit}
                  >
                    Daftar Vendor
                  </Link>
                  <Link
                    to="/register-user-admin"
                    className="btn btn-primary" type="button"
                    onClick={handleSubmit}
                  >
                    Kembali
                  </Link>
                </div> */}
                <Link
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterVendorAdmin;
