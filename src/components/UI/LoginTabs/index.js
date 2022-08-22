import { Tabs } from 'antd';
import React from 'react';

import Login from '../Login';
import SignUp from '../SignUp';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const LoginTabs = () => (
  <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Üyelik Girişi" key="1">
      <Login />
    </TabPane>
    <TabPane tab="Yeni Üyelik" key="2">
      <SignUp />
    </TabPane>
  </Tabs>
);

export default LoginTabs;