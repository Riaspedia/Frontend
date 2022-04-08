import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, message} from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import Image from "../../../assests/img/MUA1.jpg";
import Cookies from "js-cookie";
import axios from "axios";
import { baseURL } from "../../routes/Config";

const EditProfileAdmin = () => {
  let formData = new FormData();
  const [images, setImages] = useState({ selectedImages: undefined });
  const [image, setImage] = useState();

  const history = useHistory();
  const id = Cookies.get("vendor_id");
  const [inputProvince, setInputProvince] = useState([]);

  const [hours, setHours] = useState([
    {
      day_id: 1,
      open: "",
      close: "",
    },
    {
      day_id: 2,
      open: "",
      close: "",
    },
    {
      day_id: 3,
      open: "",
      close: "",
    },
    {
      day_id: 4,
      open: "",
      close: "",
    },
    {
      day_id: 5,
      open: "",
      close: "",
    },
    {
      day_id: 6,
      open: "",
      close: "",
    },
    {
      day_id: 7,
      open: "",
      close: "",
    },
  ]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
    category: "",
    latitude: "",
    longitude: "",
    phone: "",
    city: "",
    image: null,
  });

  // versi kak salam
  const handleImageUpload = (e) => {
    e.preventDefault();
    var formDataIm = new FormData();
    formDataIm.append("image", images.selectedImages[0]);
    // disini ndk ada fungsi reload tapi reload sendiri
    // Yang dikomen ini untuk upload banyak gambar
    // for (let index = 0; index < image.selectedImages.length; index++) {
    //   formData.append('data[' + index + ']', image.selectedImages[index])
    // } routenya yg tdi dimanaki
    // urlnya nnti kasih kembali pake base url
    axios
 
    // /api/vendor/${id}/profile/uploadImage` 
    //`/api/vendor/addImage`
      .post(baseURL + `/api/vendor/profile/uploadImage`, formDataIm, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          // "content-type": "application/form-data",
          "Content-Type": "multipart/form-data",//hmm knapa ndk jalan reactnya dibrowser barui jalan npm startnya
        },//ada postman?
      })
      .then((res) => {
        console.log(res.data);
        console.log("request success");
        // window.location.reload();
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
    console.log("kendapa ndk masuk kseini");
    console.log(images_temp);
  };

  useEffect(() => {
    //nnit kalau adami benya request disini. sampai sininyi dlu bisa.. cobamin nnti kalau adami api req profile dari be harusnya bisami.. sbaeb kalo get nya nanti
    //adapi response nya baru tak ubah yang pas get nya?

    axios
      .get(baseURL + `/api/vendor/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        console.log("disiniiiiiiiii");
        console.log(res.data);
        //ini nnti sesuaikan sama response yang dikirim dari backend, biasanya kek bgitu bentuknya.
        setImage(res.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
    dataProvinces();
  }, []);

  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/vendor/${id}`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    let data = result.data.data;
    setInput({
      name: data.name,
      description: data.description,
      address: data.address,
      email: data.email,
      category: data.category,
      latitude: data.latitude,
      longitude: data.longitude,
      phone: data.phone,
      city: data.city,
      image: data.image,
    });

    data.hours.map((e, index) => {
      hours[index].open = e.open;
      hours[index].close = e.close;
    });
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
    fetchData();
  }, []);

  const dataCity = async (id) => {
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

  let reqIntsance = axios.create({
    headers: {
      Authorization: `bearer` + Cookies.get("token"),
    },
  });

  console.log(input);

  const handleSubmit = () => {
    //urlnya tanya pakde sama variabelnya
    reqIntsance
      .post(baseURL + `/api/auth/updateVendor/${id}`, {
        name: input.name,
        category: input.category,
        address: input.address,
        email: input.email,
        phone: input.phone,
        city: input.city.toLocaleLowerCase(),
        description: input.description,
        latitude: input.latitude,
        longitude: input.longitude,
      })
      .then((res) => {
        console.clear();
        console.log(res);
      });

    Object.values(hours).map((hour) => {
      reqIntsance
        .post(baseURL + `/api/vendor/updateHour/${id}`, {
          day_id: hour.day_id,
          open: hour.open,
          close: hour.close,
        })
        .then((res) => {
          console.clear();
          console.log(res);
        });
    });

    history.push("/profilevendor");
  };

  // const handleImageUpload = (e) => {
  //   e.preventDefault();
  //   //urlnya tanya pakde sama variabelnya
  //   axios
  //     .post(
  //       baseURL + `/api/auth/profile/updateImage`,
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

  // Create Image from inputed file
  const createImage = (file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      setInput({ ...input, image: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed-nav sticky-footer" id="page-top">
      <HeaderAdmin />
      <div className="content-wrapper">
        <div className="container-fluid ml-5">
          {/* Breadcrumbs*/}
          <div
            className="breadcrumb"
            style={{ paddingTop: 10, marginLeft: 50, marginRight: 50 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item href="profilevendor">Profil</Breadcrumb.Item>
              <Breadcrumb.Item> Edit Profil </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <div class="row justify-content-start">
            <div class="col-6">
              <div
                className="box_general padding_bottom ml-5 "
                style={{ height: "100%" }}
              >
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-user" />
                    Edit Profil
                  </h2>
                </div>
                <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap p-0">
                  <div className="col-lg-3 col-md-12 p-0">
                    <div className="form-group">
                      <img
                        src={input.image}
                        alt="profile-picture"
                        style={{
                          width: 80,
                          height: 80,
                          objectFit: "cover",
                          borderRadius: 8,
                          boxShadow: "0 0 0 1px #CED4DA",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <form>
                      <div className="row-md-12 m-0">
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="image"
                          id="image"
                          className="form-control p-0"
                          onChange={(e) => handleChangeImage(e)}
                        />
                      </div>
                      <div className="row-md-12">
                        <label>Pilih file dengan ukuran maksimal 1MB</label>
                      </div>
                      <div className="row-md-12">
                        <button
                          class="btn btn-danger pt-1"
                          type="submit"
                          onClick={handleImageUpload}
                        >
                          Upload
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 add_top_30">
                    <div className="row wrapper">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Nama Vendor</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nama Vendor"
                            id="name"
                            name="name"
                            value={input.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Kategori Vendor</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Kategori Vendor"
                            id="category"
                            name="category"
                            value={input.category}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Deskripsi</label>
                          <textarea
                            type="text"
                            className="form-control"
                            placeholder="Deskripsi"
                            id="description"
                            name="description"
                            value={input.description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Alamat</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Alamat"
                        id="address"
                        name="address"
                        value={input.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="row justify-content-start">
                      <div class="col-6">
                        <div className="form-group">
                          <label>Latitude</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Latitude"
                            id="latitude"
                            name="latitude"
                            value={input.latitude}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div className="form-group">
                          <label>Longitude</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Longitude"
                            id="longitude"
                            name="longitude"
                            value={input.longitude}
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
                            type="email"
                            className="form-control"
                            placeholder="Email"
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
                            placeholder="Telepon"
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

                    {/* /row*/}
                  </div>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div
                className="box_general padding_bottom mr-5 "
                style={{ height: "100%" }}
              >
                <div className="header_box version_2">
                  <h2>
                    <i className="fa fa-clock-o" />
                    Jam Kerja
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Monday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[0].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [0]: { ...hours[0], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[0].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [0]: { ...hours[0], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Tuesday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[1].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [1]: { ...hours[1], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[1].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [1]: { ...hours[1], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Wednesday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[2].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [2]: { ...hours[2], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[2].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [2]: { ...hours[2], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Thursday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[3].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [3]: { ...hours[3], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[3].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [3]: { ...hours[3], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Friday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[4].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [4]: { ...hours[4], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[4].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [4]: { ...hours[4], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Saturday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[5].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [5]: { ...hours[5], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[5].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [5]: { ...hours[5], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <label className="fix_spacing">Sunday</label>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Open Time"
                        value={hours[6].open}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [6]: { ...hours[6], open: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <input
                        type="time"
                        className="form-control"
                        placeholder="Closing Time"
                        value={hours[6].close}
                        onChange={(e) =>
                          setHours({
                            ...hours,
                            [6]: { ...hours[6], close: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* /box_general*/}

          {/* /row*/}

          <Link
            className="btn_1-admin medium mt-3 mb-3 ml-5"
            onClick={handleSubmit}
          >
            Simpan
          </Link>
        </div>

        <FooterAdmin />
        {/* /.container-fluid*/}
      </div>
      {/* /.container-wrapper*/}

      {/* Scroll to Top Button*/}
      <GoTop />
    </div>
  );
};

export default EditProfileAdmin;
