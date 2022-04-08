import React, { useState, useEffect } from "react";
import FooterClient from "../../layout/FooterClient";
import HeaderClient from "../../layout/HeaderClient";
import { Row, Col, Radio, Space, message } from "antd";
import { Link } from "react-router-dom";
import Image from "../../../assests/img/Profile.png";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../../routes/Config";

const EditProfileClient = () => {
  let formData = new FormData();
  // terakhir taruh paling atas untuk deklarasi variablenya
  const [images, setImages] = useState({ selectedImages: undefined });

  const [image, setImage] = useState(Image);
  const [inputProvince, setInputProvince] = useState([]);
  const [sizeError, setSizeError] = useState(false);

  const [input, setInput] = useState({
    name: "",
    email: "",
    gender: "",
    province: "",
    city: "",
    image: null,
  });

  // versi kak salam
  const handleImageUpload = (e) => {
    e.preventDefault();
    console.log("kendapa ndk masuk kseini");
    var formDataIm = new FormData();
    formDataIm.append("image", images.selectedImages[0]);

    // disini ndk ada fungsi reload tapi reload sendiri
    // Yang dikomen ini untuk upload banyak gambar
    // for (let index = 0; index < image.selectedImages.length; index++) {
    //   formData.append('data[' + index + ']', image.selectedImages[index])
    // } routenya yg tdi dimanaki
    axios
      .post(baseURL + `/api/auth/profile/uploadImage`, formDataIm, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          // "content-type": "application/form-data",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log("request success");
        window.location.reload();
        // disini tambai logic setelah request/bisa taruh alert atau sembarang
      })
      .catch((err) => {
        console.log(err);
        console.log("request gagal");
        message.error("upload gagal", 3);
      });
  };

  // ini ditaruh bagian atas untuk handleki input formnya
  const handleChangeImage = (event) => {
    let images_temp = [];

    for (let i = 0; i < event.target.files.length; i++) {
      images_temp.push(event.target.files[i]);
    }

    setImages({
      selectedImages: images_temp,
    });
    console.log("request success");
    console.log(images_temp);
  };

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
    //nnit kalau adami benya request disini. sampai sininyi dlu bisa.. cobamin nnti kalau adami api req profile dari be harusnya bisami.. sbaeb kalo get nya nanti
    //adapi response nya baru tak ubah yang pas get nya?

    axios
      .get(baseURL + `/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        //ini nnti sesuaikan sama response yang dikirim dari backend, biasanya kek bgitu bentuknya.
        setImage(res.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
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

  // const handleImageChange = (event) => {
  //   let files = event.target.files || event.dataTransfer.files;
  //   setInput({ ...input, image: files[0] });
  //   createImage(files[0]);
  // };

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

  // const handleImageUpload = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       baseURL + `/api/auth/profile/uploadImage`,
  //       {
  //         id: Cookies.get("user_id"),
  //         image: input.image,
  //       },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + Cookies.get("token"),
  //           "content-type": "multipart/form-data",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.clear();
  //       console.log(res);
  //     });
  // };

  //fungsi baru
  // const functionUploadImage = (formdata) => {
  //   axios
  //     .post(`/api/auth/profile/uploadImage${Cookies.get("id")}`, formdata, {
  //       headers: { Authorization: "Bearer " + Cookies.get("token") },
  //     })
  //     .then((res) => {});
  // };

  // const onImageChange = (event) => {
  //   let formdata = new FormData();
  //   let size = event.target.files[0].size;

  //   if (size > 524288) {
  //     setSizeError(true);
  //   } else if (event.target.files && event.target.files[0]) {
  //     setSizeError(false);
  //     let img = event.target.files[0];
  //     formdata.append("image", img);

  //     functionUploadImage(formdata);
  //     setInput({ ...input, photo: URL.createObjectURL(img) });
  //   }
  // };

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
    <div className>
      <HeaderClient />
      <div
        style={{
          backgroundImage: "url(img/background/RegisterBg.jpg)",
          backgroundSize: "cover",
          paddingBottom: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="container-fluid"
          style={{ width: "50%", paddingTop: "7%" }}
        >
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-user" />
                Edit Profil Diri
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap">
                <div className="col-lg-3 col-md-12 p-0">
                  <div className="form-group">
                    <img
                      src={image}
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
                  <form
                  // onSubmit={handleImageUpload}
                  // encType="multipart/form-data"
                  >
                    <div className="row-md-12">
                      <input
                        type="file"
                        style={{ border: "none" }}
                        name="image"
                        id="image"
                        title=" "
                        className="form-control p-0"
                        onChange={(e) => handleChangeImage(e)}
                        // onChange={handleImage}
                      />
                      {sizeError === true && (
                        <label
                          text="Ukuran foto melebihi 512KB!"
                          fontSize={12}
                          fontColor="#EA3A3A"
                        />
                      )}
                    </div>
                    <div className="row-md-12">
                      <label class="pt-0">
                        Pilih file dengan ukuran maksimal 1MB
                      </label>
                    </div>
                    <div className="row-md-12">
                      <button
                        type="submit"
                        className="btn btn-success btn-sm mb-2"
                        style={{
                          width: "100px",
                          height: "40px",
                          padding: "10px",
                        }}
                        onClick={handleImageUpload}
                      >
                        <i class="fa fa-cloud-upload" aria-hidden="true"></i>{" "}
                        Unggah
                      </button>
                    </div>
                  </form>
                </div>
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
                            onChange={(e) =>
                              handleProvinceSelect(e.target.value)
                            }
                          >
                            <option defaultValue="">Provinsi</option>
                            {inputProvince.province && (
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
                            )}
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
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <p className="mb-0">
            <Link
              to="/profileclient"
              className="btn_1-admin medium"
              onClick={handleSubmit}
            >
              Simpan
            </Link>
          </p>
        </div>
        {/* /.container-fluid*/}
      </div>
      <FooterClient />
    </div>
  );
};

export default EditProfileClient;
