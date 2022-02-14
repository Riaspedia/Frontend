import React from "react";
import { Card, Button, Row, Col, Typography, Space } from "antd";
import { ContextProfile } from "../../context/ContextProfile";

const { Title, Text } = Typography;

const ProfileClient = () => {
  // const {input, setLoading, functions} = useContext(ContextProfile)

  return (
    <>
      <Card
        Card
        style={{
          width: "100%",
          borderRadius: 8,
          boxShadow: "0px 5px 10px 0px #F1F2FA",
          border: "none",
        }}
        title={
          <>
            <Row style={{ width: "100%" }}>
              <Col span={12}>
                <Title level={4}> Biodata Diri </Title>
              </Col>
              <Col span={12}>
                <Button
                  href="/editprofileclient"
                  //   onClick={handleDetail}
                  type="danger"
                  ghost
                  style={{ borderRadius: 8, float: "right", height: "100%" }}
                >
                  Edit Biodata Diri
                </Button>
              </Col>
            </Row>
          </>
        }
      >
        <Row>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 24, order: 1 }}
            lg={{ span: 24, order: 1 }}
            xl={{ span: 11, order: 1 }}
          >
            {/* {input.photo === SERVER_NAME + null && (
                  <img
                    src={noImage}
                    alt="profile-picture"
                    style={{
                      width: 200,
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 12,
                      marginBottom: 24,
                      boxShadow: "0 0 0 1px #CED4DA",
                      position: "relative",
                    }}
                  />
                )}
                {input.photo !== SERVER_NAME + null && (
                  <img
                    src={input.photo}
                    alt="profile-picture"
                    style={{
                      width: 200,
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 12,
                      marginBottom: 24,
                      boxShadow: "0 0 0 1px #CED4DA",
                      position: "relative",
                    }}
                  />
                )} */}
          </Col>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 24, order: 2 }}
            lg={{ span: 24, order: 2 }}
            xl={{ span: 13, order: 2 }}
          >
            <Space size={24} direction="vertical" style={{ width: "100%" }}>
              <Space size={4} direction="vertical">
                <Text type="secondary">Name</Text>
                {/* <Text strong>{input.name}</Text> */}
              </Space>

              <Space size={4} direction="vertical">
                <Text type="secondary">Email</Text>
                {/* <Text strong>{input.email}</Text> */}
              </Space>

              <Space size={4} direction="vertical">
                <Text type="secondary">Gender</Text>
                {/* <Text strong>{input.gender}</Text> */}
              </Space>

              <Space size={4} direction="vertical">
                <Text type="secondary">Province</Text>
                {/* <Text strong>{input.province}</Text> */}
              </Space>

              <Space size={4} direction="vertical">
                <Text type="secondary">City</Text>
                {/* <Text strong>{input.city}</Text> */}
              </Space>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProfileClient;
