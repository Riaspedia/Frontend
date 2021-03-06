import { Modal, Button } from "antd";
import { React, useState } from "react";
import "antd/dist/antd.css";
import Cookies from "js-cookie";

const LogoutModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onLogout = () => {
    Cookies.remove("token");
    Cookies.remove("user_id");
    Cookies.remove("vendor_id");
    return;
  };

  return (
    <>
      <a class="nav-link" onClick={showModal}>
        <i class="fa fa-fw fa-sign-out" />
        Logout
      </a>

      <Modal
        title="Ready to Leave?"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>Cancel</Button>,
          <Button onClick={onLogout} href="/" type="danger">
            Logout
          </Button>,
        ]}
      >
        <p>
          Select "Logout" below if you are ready to end your current session.
        </p>
      </Modal>
    </>
  );
};

export default LogoutModal;
