import React, { useState, useEffect } from "react";
import { Row, Col, Radio, Space } from "antd";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../../routes/Config";
import Image from "../../../assests/img/MUA1.jpg";

const EditProfileAdmin = () => {
  const [inputProvince, setInputProvince] = useState([]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    province: "",
    city: "",
    image: null,
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const dataProvinces = async () => {
    // let result = await axios.get(
    //   `https://api.binderbyte.com/wilayah/provinsi?api_key=7ed0f4ec831869da8045fec939a8deffcbdbc57b208cfb0069794c237de69083`
    // );
    // let data = result.data.value;
    // console.log(data);
    // setInputProvince({
    //   province: data.map((key) => {
    //     return {
    //       id: key.id,
    //       name: key.name,
    //     };
    //   }),
    // });
  };

  useEffect(() => {
    dataProvinces();
  }, []);

  const dataCity = async (id) => {
    // console.log(id);
    // let resultCity = await axios.get(
    //   `https://api.binderbyte.com/wilayah/kabupaten?api_key=079fc527c1d3fdf63c64cc384bc51b9e6fff9b7552c8eb493db7b2035d70c421&id_provinsi=${id}`
    // );
    // let data = resultCity.data.value;
    // setInputProvince({
    //   ...inputProvince,
    //   cities: data.map((key) => {
    //     return {
    //       id: key.id,
    //       id_province: key.id_provinsi,
    //       name: key.name,
    //     };
    //   }),
    // });
  };

  const handleCheckBox = (event) => {
    setInput({ ...input, gender: event.target.value });
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

  let reqIntsance = axios.create({
    headers: {
      Authorization: `bearer` + Cookies.get("token"),
    },
  });

  const handleImageChange = (event) => {
    let files = event.target.files || event.dataTransfer.files;
    if (!files.length) return;

    createImage(files[0]);
  };

  const handleSubmit = () => {
    //urlnya tanya pakde sama variabelnya
    reqIntsance
      .put(baseURL + `/api/auth/profile`, {
        id: Cookies.get("user_id"),
        name: input.name,
        // email: input.email,
        gender: input.gender,
        province: input.province,
        city: input.city,
      })
      .then((res) => {
        console.clear();
        console.log(res);
      });
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    //urlnya tanya pakde sama variabelnya
    axios
      .post(
        baseURL + `/api/auth/profile/updateImage`,
        {
          id: Cookies.get("user_id"),
          image: input.image,
        },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.clear();
        console.log(res);
      });
  };

  // Create Image from inputed file
  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setInput({ ...input, image: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  console.log(input);

  return (
    <div className="row">
      <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap">
        <div className="col-lg-3 col-md-12 p-0">
          <div className="form-group">
            <img
              src={Image}
              alt="profile-picture"
              style={{
                width: 144,
                height: 144,
                objectFit: "cover",
                borderRadius: 8,
                boxShadow: "0 0 0 1px #CED4DA",
              }}
            />
          </div>
        </div>
        <div className="col-md-9">
          <form onSubmit={handleImageUpload}>
            <div className="row-md-12">
              <input
                type="file"
                style={{ border: "none" }}
                name="image"
                id="image"
                className="form-control p-0"
                onChange={handleImageChange}
              />
            </div>
            <div className="row-md-12">
              <label>Pilih file dengan ukuran maksimal 512KB</label>
            </div>
            <div className="row-md-12">
              <button type="submit" onClick={handleImageUpload}>
                Upload
              </button>
            </div>
          </form>
        </div>

        {/* <label>Your photo</label>
                  <form action="/file-upload" className="dropzone" /> */}
      </div>
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <div className="col-md-12 add_top_30">
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Lengkap"
                    name="name"
                    id="name"
                    value={input.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={input.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="form-group">
                  <Space
                    size={8}
                    direction="vertical"
                    style={{ width: "100%" }}
                  >
                    <label>Jenis Kelamin</label>
                    <Radio.Group
                    // onChange={onChangeGender} value={gender}
                    >
                      <Row style={{ width: "100%" }}>
                        <Col span={12}>
                          <Radio
                            value="Pria"
                            onChange={(e) => {
                              handleCheckBox(e);
                            }}
                          >
                            Pria{" "}
                          </Radio>
                        </Col>
                        <Col span={12}>
                          <Radio
                            value="Wanita"
                            onChange={(e) => {
                              handleCheckBox(e);
                            }}
                          >
                            Wanita
                          </Radio>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Space>
                </div>
              </div>
            </div>
            {/* /row*/}
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="form-group">
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
                    {/* {inputProvince.province.map((province) => (
                            <option value={[province.name, province.id]}>
                              {province.name}
                            </option>
                          ))} */}
                  </select>
                </div>
              </div>
            </div>

            {/* /row*/}
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="form-group">
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
                    {/* {inputProvince.cities.map((city) => (
                            <option value={[city.name, city.id]}>
                              {city.name}
                            </option>
                          ))} */}
                  </select>

                  {/* <input
                          type="text"
                          className="form-control"
                          placeholder="Kota"
                          name="city"
                          id="city"
                          value={input.city}
                          onChange={handleChange}
                        /> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileAdmin;
