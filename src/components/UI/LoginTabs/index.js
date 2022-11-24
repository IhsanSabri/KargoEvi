import { Tabs } from "antd";
import React from "react";

import Login from "../Login";
import SignUp from "../SignUp";

import { TabName } from "./style";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const LoginTabs = ({ nextPageLink, closeModal }) => (
  <TabName defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Üyelik Girişi" key="1">
      <Login nextPageLink={nextPageLink} closeModal={closeModal}/>
    </TabPane>
    <TabPane tab="Yeni Üyelik" key="2">
      <SignUp nextPageLink={nextPageLink} closeModal={closeModal}/>
    </TabPane>
  </TabName>
);

export default LoginTabs;
