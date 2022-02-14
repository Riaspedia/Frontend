import React, { useState, useContext, useEffect } from "react";
import {
  Row,
  Col,
  Space,
  Form,
  Card,
  Typography,
  Modal,
  Input,
  Button,
  Radio,
  Select,
  PageHeader,
  Upload,
} from "antd";
import LabelText from "../../global/LabelText";
import SelectDropdown from "../../global/SelectDropdown";
import { useHistory } from "react-router";
import { ContextProfile } from "../../context/ContextProfile";

const { Text, Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const EditProfileClient = () => {
  // let history = useHistory()
  //   const {
  //       input,
  //       setInput,
  //       inputProvince,
  //       inputCategories,
  //       errorMessage,
  //       loading,
  //       functions
  //   } = useContext(ContextProfile)
  //   const {
  //       fetchData,
  //       functionEditBiodata,
  //       functionDeleteExperience,
  //       functionDeleteSkill,
  //       functionDeleteEducation,
  //       functionUploadImage,
  //       dataCity,
  //       dataCategories
  //   } = functions
  //   const [gender, setGender] = React.useState(input.gender);

  const [sizeError, setSizeError] = useState(false);
  return (
    <div
      className="container-profile"
      style={{ display:"flex", alignItems: "center" }}
    >
      <Card
        title={<Title level={4}>Edit Profile</Title>}
        style={{ width: "50%", borderRadius: 8 }}
      >
        <Space size={24} direction="vertical" style={{ width: "100%" }}>
          <Row>
            <Col xs={13} sm={8} md={10} lg={6}>
              {/* {
              input.photo === SERVER_NAME + null && (
                <img
                  src={noImage}
                  alt="profile-picture"
                  style={{
                    width: 144,
                    height: 144,
                    objectFit: "cover",
                    borderRadius: 8,
                    boxShadow: "0 0 0 1px #CED4DA",
                  }}
                />
              )}
              {input.photo !== SERVER_NAME + null && (
                <img
                  src={input.photo}
                  alt="profile-picture"
                  style={{
                    width: 144,
                    height: 144,
                    borderRadius: 8,
                    boxShadow: "0 0 0 1px #CED4DA",
                  }}
                />
              )} */}
            </Col>

            <Col xs={11} sm={16} md={14} lg={18}>
              <Space size={8} direction="vertical" style={{ width: "100%" }}>
                <input
                  type="file"
                  name="myImage"
                  // onChange={onImageChange}
                  title=" "
                />
                {sizeError === true && (
                  <LabelText
                    text="Ukuran foto melebihi 512KB!"
                    fontSize={12}
                    fontColor="#EA3A3A"
                  />
                )}

                <p style={{ color: "gray" }}>
                  Pilih file dengan ukuran maksimal 1MB
                </p>
              </Space>
            </Col>
          </Row>

          <Space size={8} direction="vertical" style={{ width: "100%" }}>
            <LabelText text="Full Name" />
            <Input
              style={{ borderRadius: 8, height: 48 }}
              name="name"
              // onChange={handleChange}
              placeholder="Enter Your Full Name"
              // value={input.name}
            />
          </Space>

          <Space size={8} direction="vertical" style={{ width: "100%" }}>
            <LabelText text="Email" />
            <Input
              style={{ borderRadius: 8, height: 48 }}
              name="email"
              // onChange={handleChange}
              placeholder="Enter Your Email"
              // value={input.name}
            />
          </Space>

          <Space size={8} direction="vertical" style={{ width: "100%" }}>
            <LabelText text="Jenis Kelamin" />
            <Radio.Group
            // onChange={onChangeGender} value={gender}
            >
              <Row style={{ width: "100%" }}>
                <Col span={12}>
                  <Radio value="Pria">Male </Radio>
                </Col>
                <Col span={12}>
                  <Radio value="Wanita">Female</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Space>

          <Row style={{ width: "100%" }}>
            <Col span={11}>
              <Space size={8} direction="vertical" style={{ width: "100%" }}>
                <LabelText text="Provinsi" />
                {/* <SelectDropdown
                  // defaultValue={input.province}
                  // onChange={handleProvinceChange}
                  placeholder="Provinsi"
                  option={
                    inputProvince.province && (
                      <>
                        {inputProvince.province.map((e, index) => {
                          return (
                            <>
                              <Option value={[e.name, e.id]}>{e.name}</Option>
                            </>
                          );
                        })}
                      </>
                    )
                  }
                /> */}
              </Space>
            </Col>
            <Col span={1} />
            <Col span={12}>
              <Space size={8} direction="vertical" style={{ width: "100%" }}>
                <LabelText text="Kota" />
                {/* <SelectDropdown
                  defaultValue={input.city}
                  onChange={handleCityChange}
                  placeholder="Kota"
                  option={
                    inputProvince.cities && (
                      <>
                        {inputProvince.cities.map((e, index) => {
                          return (
                            <>
                              <Option value={e.name}>{e.name}</Option>
                            </>
                          );
                        })}
                      </>
                    )
                  }
                /> */}
              </Space>
            </Col>
          </Row>

          <Button
            href="/profileclient"
            size="large"
            className="button"
            type="danger"
            block
            style={{ borderRadius: 8}}
            // onClick={handleSubmit}
          >
            Simpan
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default EditProfileClient;
