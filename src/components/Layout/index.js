import Icon, {
  AlertOutlined,
  AppstoreOutlined,
  BugOutlined,
  CalendarOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  EditOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Input, Card, Avatar } from 'antd';
import React, { useState } from 'react';
import PandaSvg from './pandaShape';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { Meta } = Card;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('General', 'sub1', <AppstoreOutlined />, [
    getItem('Dashboard', '1', <DashboardOutlined />),
    getItem('Categories', '4', <OrderedListOutlined />),
    getItem('Transactions', '5', <DollarCircleOutlined />),
  ]),

  getItem('Extras', 'sub2', <AlertOutlined />, [
    getItem('Report', '6', <BugOutlined />),
    getItem('Calendar', '7', <CalendarOutlined />),
    getItem('Todo', '8', <EditOutlined />),
  ]),

  getItem('Settings', '9', <SettingOutlined />),
];

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        width={250}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo text-center">
          <Icon component={PandaSvg} />
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              padding: '0 20px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: 250 }}
              enterButton="Search"
            />

            <div>
              <Button type="primary">Support</Button>
              <Button type="primary" className="ml-2">
                Login
              </Button>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
