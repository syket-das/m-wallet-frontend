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
import { Button, Layout, Menu, Input, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PandaSvg from './pandaShape';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

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
    getItem('Categories', '2', <OrderedListOutlined />),
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
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    setCurrent(e.key);
    console.log('click ', e);
    if (e.key === '1') {
      navigate('/');
      setCurrent('1');
    } else if (e.key === '2') {
      navigate('/categories')
      setCurrent('2');
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [window, collapsed]);

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
          defaultSelectedKeys={[current]}
          mode="inline"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
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
          All Rights Reserved © 2022 | Syket Das
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
