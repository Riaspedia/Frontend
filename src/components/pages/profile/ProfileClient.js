import React, { useState, useContext, useEffect } from "react";
import FooterClient from "../../layout/FooterClient";
import HeaderClient from "../../layout/HeaderClient";
import { Button } from "antd";
import { Row, Col, Radio, Space } from "antd";
import Cookies from "js-cookie";
import axios from "axios";
import LabelText from "../../global/LabelText";
import { ContextProfile } from "../../context/ContextProfile";
import Image from "../../../assests/img/MUA1.jpg"
import { baseURL } from "../../routes/Config";

const ProfileClient = () => {
  const [input, setInput] = useState([]);

  const fetchData = async () => {
    let result = await axios.get(baseURL + `/api/auth/profile`, {
      headers: { Authorization: "Bearer " + Cookies.get("token") },
    });

    let data = result.data;
    console.log(result);
    setInput({
      name: data.name,
      email: data.email,
      gender: data.gender,
      province: data.province,
      city: data.city,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
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
            <div className="header_box version_2" S>
              <h2>
                <i className="fa fa-user" />
                Profil Diri
              </h2>
              <Button
                href="/editprofileclient"
                //   onClick={handleDetail}
                type="danger"
                ghost
                style={{ borderRadius: 8, float: "right", height: "100%" }}
              >
                Edit Biodata Diri
              </Button>
            </div>
            <div className="row">
              <div className="col-md-4">
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
              <div className="col-md-8 p-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nama Lengkap</label>
                      <p>{input.name}</p>
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email</label>
                      <p>{input.email}</p>
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <Space
                        size={8}
                        direction="vertical"
                        style={{ width: "100%" }}
                      >
                        <label>Jenis Kelamin</label>
                        <p>{input.gender}</p>
                      </Space>
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Provinsi</label>
                      <p>{input.province}</p>
                    </div>
                  </div>
                </div>

                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Kota</label>
                      <p>{input.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            <a href="/profileclient" className="btn_1-admin medium">
              Simpan
            </a>
          </p>
        </div>
        {/* /.container-fluid*/}
      </div>
      <FooterClient />
    </div>
  );
};

export default ProfileClient;
