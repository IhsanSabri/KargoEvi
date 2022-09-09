import React from "react";

import { Box } from "rebass";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import { CollepseContainer, Title } from "./style";

const { Panel } = Collapse;

const AntCollapse = ({ menus }) => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <CollepseContainer justifyContent="center" width={1}>
      <Box width={1}>
        <Collapse
          onChange={onChange}
          expandIconPosition="end"
          expandIcon={({ isActive }) =>
            isActive ? <MinusOutlined /> : <PlusOutlined />
          }
        >
          {menus?.map((eachMenu) => (
            <Panel
              header={
                <Title>
                  {eachMenu.headerIcon}
                  {eachMenu.title}
                </Title>
              }
              key={eachMenu.subKey}
            >
              <div>{eachMenu.component}</div>
            </Panel>
          ))}
        </Collapse>
      </Box>
    </CollepseContainer>
  );
};

export default AntCollapse;
