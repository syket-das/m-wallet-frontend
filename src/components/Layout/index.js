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
  UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Input, Avatar } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PandaSvg from './pandaShape';

import { logOut } from '../../firebase/auth/logout';

// ----------------------------------------------------------
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
  getItem('General', 'general', <AppstoreOutlined />, [
    getItem('Dashboard', '1', <DashboardOutlined />),
    getItem('Categories', '2', <OrderedListOutlined />),
    getItem('Transactions', '3', <DollarCircleOutlined />),
  ]),

  getItem('Extras', 'extras', <AlertOutlined />, [
    getItem('Report', '4', <BugOutlined />),
    getItem('Calendar', '5', <CalendarOutlined />),
    getItem('Todo', '6', <EditOutlined />),
  ]),

  getItem('Settings', '7', <SettingOutlined />),
];

const LayoutComponent = ({ children, path }) => {
  const navigate = useNavigate();

  const location = useLocation();

  // states--------------------------------------------------
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('1');
  // const link = useSelector((state) => state.navigation.link);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrent('1');
    } else if (
      location.pathname === '/categories' ||
      location.pathname === '/categories/add'
    ) {
      setCurrent('2');
    } else if (
      location.pathname === '/transactions' ||
      location.pathname === '/transactions/add'
    ) {
      setCurrent('3');
    } else if (location.pathname === '/report') {
      setCurrent('4');
    } else if (location.pathname === '/calendar') {
      setCurrent('5');
    } else if (location.pathname === '/todo') {
      setCurrent('6');
    } else if (location.pathname === '/settings') {
      setCurrent('7');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [collapsed]);

  const onClick = (e) => {
    if (e.key === '1') {
      navigate('/');
    } else if (e.key === '2') {
      navigate('/categories');
    } else if (e.key === '3') {
      navigate('/transactions');
    } else if (e.key === '4') {
      navigate('/report');
    } else if (e.key === '5') {
      navigate('/calendar');
    } else if (e.key === '6') {
      navigate('/todo');
    } else if (e.key === '7') {
      navigate('/settings');
    }
  };

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
          defaultOpenKeys={['general', 'extras']}
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
              {!user?.email ? (
                <Button type="primary" className="ml-2">
                  <Link to="/login">Login</Link>
                </Button>
              ) : (
                <span className=" mx-2">
                  <span className="text-white mr-2">
                    {user.email.split('@')[0]}
                  </span>
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    onClick={() => {
                      logOut();
                    }}
                  />
                </span>
              )}
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
