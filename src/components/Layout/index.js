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
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PandaSvg from './pandaShape';
import {
  changeNavigationHighlight,
  changeNavigationLink,
} from '../../redux/layout/navigationSlice';
import { logOut } from '../../firebase/auth/logOut';

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

const LayoutComponent = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // states--------------------------------------------------
  const [collapsed, setCollapsed] = useState(false);
  const current = useSelector((state) => state.navigation.hightlight);
  const link = useSelector((state) => state.navigation.link);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    navigate(link);
  }, [link, navigate]);

  const onClick = (e) => {
    if (e.key === '1') {
      dispatch(changeNavigationLink('/'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '2') {
      dispatch(changeNavigationLink('/categories'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '3') {
      dispatch(changeNavigationLink('/transactions'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '4') {
      dispatch(changeNavigationLink('/report'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '5') {
      dispatch(changeNavigationLink('/calendar'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '6') {
      dispatch(changeNavigationLink('/todo'));
      dispatch(changeNavigationHighlight(e.key));
    } else if (e.key === '7') {
      dispatch(changeNavigationLink('/settings'));
      dispatch(changeNavigationHighlight(e.key));
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [collapsed]);

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
