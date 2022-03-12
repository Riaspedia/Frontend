import React, {useState, useContext, useEffect} from "react";
import FooterClient from "../../layout/FooterClient";
import HeaderClient from "../../layout/HeaderClient";
import { Button } from "antd";
import { Row, Col, Radio, Space} from "antd";
import LabelText from "../../global/LabelText";
import {ContextProfile} from "../../context/ContextProfile";

const ProfileClient = () => {

//   const {
//     input
// } = useContext(ContextProfile)

// const [sizeError, setSizeError] = useState(false);

  return (
    <div>
      <HeaderClient />
      <div style={{
          backgroundImage: "url(img/background/RegisterBg.jpg)",
          backgroundSize: "cover",
          height: "100vh",
        }} >
        <div className="container-fluid" style={{width: '50%', paddingTop: '7%'}}>
          <div className="box_general padding_bottom">
            <div className="header_box version_2"S>
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
            {/* <Row>
                                <Col xs={13} sm={8} md={10} lg={6}>
                                    {
                                        // input.photo === SERVER_NAME + null &&
                                        <img src="" alt="profile-picture"
                                             style={{
                                                 width: 144,
                                                 height: 144,
                                                 objectFit: "cover",
                                                 borderRadius: 8,
                                                 boxShadow: "0 0 0 1px #CED4DA"
                                             }}/>
                                    }
                                    {
                                        // input.photo !== SERVER_NAME + null &&
                                        <img src={input.photo} alt="profile-picture"
                                             style={{
                                                 width: 144,
                                                 height: 144,
                                                 borderRadius: 8,
                                                 boxShadow: "0 0 0 1px #CED4DA"
                                             }}/>
                                    }
                                </Col>
                                <Col xs={11} sm={16} md={14} lg={18}>
                                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                                        <input type="file" name="myImage"  title=" "/>
                                        {
                                            sizeError === true &&
                                            <LabelText text="Ukuran foto melebihi 512KB!"
                                                       fontSize={12}
                                                       fontColor="#EA3A3A"/>
                                        }

                                        <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                                    </Space>
                                </Col>
                            </Row> */}

              <div className="col-md-4">
                <div className="form-group">
                  <label>Your photo</label>
                  <form action="/file-upload" className="dropzone" />
                </div>
              </div>
              <div className="col-md-8 add_top_30">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label>Nama Lengkap</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Lengkap"
                      />
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
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
                        <Radio.Group
                        // onChange={onChangeGender} value={gender}
                        >
                          <Row style={{ width: "100%" }}>
                            <Col span={12}>
                              <Radio value="Pria">Pria </Radio>
                            </Col>
                            <Col span={12}>
                              <Radio value="Wanita">Wanita</Radio>
                            </Col>
                          </Row>
                        </Radio.Group>
                      </Space>
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label>Provinsi</label> 
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Provinsi"
                      />
                    </div>
                  </div>
                </div>

                {/* /row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                    <label>Kota</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Kota"
                      />
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
