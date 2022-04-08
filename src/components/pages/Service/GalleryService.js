import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Breadcrumb, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Image from "../../../assests/img/Profile.png";
import { baseURL } from "../../routes/Config";

const GalleryService = () => {
  const [images, setImages] = useState({ selectedImages: undefined });
  const [image, setImage] = useState(Image);
  const history = useHistory();

  const [input, setInput] = useState({
    image: "",
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
    <div className=" d-flex flex-column mt-5">
      <div className="container-fluid ml-5">
        <form onSubmit={handleSubmit}>
          <div className="box_general padding_bottom ml-5 mr-5 ">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-file" />
                Galeri
              </h2>
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
                  />
                </div>
              </div>
            </div>
            <Link
              type="submit"
              className="btn btn-success btn-sm mb-2"
              style={{ width: "120px", height: "40px", padding: "10px" }}
              onClick={handleSubmit}
            >
              <i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload
            </Link>
          </div>
        </form>
      </div>
      <br />
      <div className="mt-auto mb-0"></div>
    </div>
  );
};

export default GalleryService;
