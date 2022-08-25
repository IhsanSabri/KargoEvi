import { Modal } from "antd";
import React from "react";

const AntModal = ({ children, ...rest }) => {
  return (
    <Modal
      destroyOnClose
      footer={null}
      bodyStyle={{ paddingTop: "64px", paddingBottom: "64px" }}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default AntModal;
