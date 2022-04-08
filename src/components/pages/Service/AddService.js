import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin";
import { Breadcrumb, message } from "antd";
import FooterAdmin from "../../layout/FooterAdmin";
import GoTop from "../../layout/GoTop";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import Image from "../../../assests/img/Profile.png";
import axios from "axios";
import { baseURL } from "../../routes/Config";
import GalleryService from "./GalleryService";

const AddService = () => {
  const [images, setImages] = useState({ selectedImages: undefined });
  const [image, setImage] = useState(Image);

  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    price: 0,
    duration: 0,
    category: "",
    image: "",
  });

  // versi kak salam
  const handleImageUpload = (e) => {
    e.preventDefault();
    console.log("kendapa ndk masuk kseini");
    var formDataIm = new FormData();
    // formDataIm.append("image", images.selectedImages[0]);

    // disini ndk ada fungsi reload tapi reload sendiri
    // Yang dikomen ini untuk upload banyak gambar
    for (let index = 0; index < image.selectedImages.length; index++) {
      formDataIm.append("image[" + index + "]", image.selectedImages[index]);
    }
    axios
      .post(baseURL + `/api/vendor/addImage`, formDataIm, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          // "content-type": "application/form-data",
          "Content-Type": "multipart/form-data",
        },
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
    console.log(images_temp);
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
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async () => {
    //urlnya tanya pakde sama variabelnya
    await axios.post(
      baseURL + `/api/vendor/addService`,
      {
        name: input.name,
        price: input.price,
        category: input.category,
        duration: input.duration,
      },
      {
        headers: {
          Authorization: "Bearer" + Cookies.get("token"),
        },
      }
    );

    setInput({ ...input, name: "", price: 0, duration: 0, category: "" });
    history.push("/list");
  };

  console.log(input);

  return (
    <div className="fixed-nav sticky-footer min-vh-100" id="page-top">
      <HeaderAdmin />
      {/* Tambah Service */}
      <div className="content-wrapper d-flex flex-column">
        <div className="container-fluid ml-5">
          <div
            className="breadcrumb"
            style={{ paddingTop: 10, marginLeft: 50, marginRight: 50 }}
          >
            <Breadcrumb>
              <Breadcrumb.Item href="dashboard">Riaspedia </Breadcrumb.Item>
              <Breadcrumb.Item> Tambah Pelayanan </Breadcrumb.Item>
            </Breadcrumb>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="box_general padding_bottom ml-5 mr-5 ">
              <div className="header_box version_2 ">
                <h2 className="d-inline-block">Tambah Pelayanan</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nama Pelayanan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nama Pelayanan"
                      name="name"
                      id="name"
                      value={input.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Jenis Pelayanan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Jenis Pelayanan"
                      name="category"
                      id="category"
                      value={input.category}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Durasi Pelayanan</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Durasi Pelayanan"
                      name="duration"
                      id="duration"
                      value={input.duration}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Harga</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Harga Pelayanan"
                      name="price"
                      id="price"
                      value={input.price}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <Link
                type="submit"
                class="btn btn-success btn-sm mb-2 mt-2"
                style={{ width: "120px", height: "40px", padding: "10px" }}
                onClick={handleSubmit}
              >
                <i class="fa fa-fw fa-plus-circle" aria-hidden="true"></i>{" "}
                Tambah Item
              </Link>
            </div>
          </form>

          {/* Galeri Service */}
          {/* <div className=" d-flex flex-column">
            <div className="container-fluid ml-3 ">
              <form onSubmit={handleSubmit}>
                <div className="box_general padding_bottom ml-3 mr-5">
                  <div className="header_box version_2">
                    <h2>
                      <i className="fa fa-file" />
                      Galeri
                    </h2>
                  </div>
                  <div className="row"> */}

          {/* berfungsipi benya baru bisa dipake ini */}
          {/* {image.map(item => (v
                        <><div className="col-md-3">
                        <div className="form-group">
                          <img
                            src={item}
                            alt="profile-picture"
                            style={{
                              width: 300,
                              height: 200,
                              objectFit: "cover",
                              borderRadius: 4,
                              boxShadow: "0 0 0 1px #CED4DA",
                            }} />
                        </div>
                      </div></>
                    ))} */}

          {/* <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    // astaga ini juga parah wkwkkw.. harusnya diloop ndk dicopas manual code untuk simpan iamgenya disini ahhhahah
                    // loopingnya pake map disini..
                    //https://github.com/zulfauzi92/otakkanan_frontend/blob/master/src/pages/RoomDetail.js
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>{" "}
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <img
                          src={Image}
                          alt="profile-picture"
                          style={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 4,
                            boxShadow: "0 0 0 1px #CED4DA",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="image"
                          id="image"
                          title=" "
                          onChange={(e) => handleChangeImage(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    type="submit"
                    className="btn btn-success btn-sm mb-2"
                    style={{ width: "120px", height: "40px", padding: "10px" }}
                    onClick={handleImageUpload}
                  >
                    <i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload
                  </Link>
                </div>
              </form>
            </div>
            <br />
            <div className="mt-auto mb-0"></div>
          </div> */}
        </div>
        {/* <GalleryService /> */}
        <br />
        <div className="mt-auto mb-0">
          <FooterAdmin />
          <GoTop />
        </div>
      </div>
    </div>
  );
};

export default AddService;
