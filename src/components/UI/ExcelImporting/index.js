import React from "react";

import { Button, Upload } from "antd";
import { Flex, Box } from "rebass";
import { DiffOutlined, CloudUploadOutlined } from "@ant-design/icons";

import { Download } from "./style";

const ExcelImporting = ({ template }) => {
  const uploadProps = {
    name: "file",
    action: "",
    headers: {
      authorization: "authorization-text",
    },

    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Box bg={template.isDownloadTemplate ? "white" : "#F9FBFD"}>
      {template.title}
      {template.isDownloadTemplate ? (
        <Flex p={2}>
          <DiffOutlined
            style={{
              fontSize: "15px",
              position: "relative",
              top: "4px",
              color: "#1a926b",
            }}
          />
          <Download href="#" download style={{ paddingLeft: "5px" }}>
            Şablon İndir
          </Download>
        </Flex>
      ) : (
        false
      )}
      <Flex>
        <Box p={2}>
          <Upload {...uploadProps}>
            <Button
              type="dashed"
              size="large"
              style={{
                width: "250px",
                height: "100px",
                color: "#d84148",
                borderColor: "#d84148",
              }}
              icon={
                <CloudUploadOutlined
                  style={{
                    fontSize: "15px",
                    position: "relative",
                    top: "-2px",
                  }}
                />
              }
            >
              Yükle
            </Button>
          </Upload>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default ExcelImporting;
