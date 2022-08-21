import { Modal } from "antd";
import React from "react";

const AntModal = ({ children, ...rest }) => {
  return (
    <Modal destroyOnClose footer={null} {...rest}>
      {children}
    </Modal>
  );
};

export default AntModal;
