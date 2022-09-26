import React from 'react';
import LayoutComponent from '../components/Layout';
import { Table, Tag, Space, Row, Button, Col, Input, Breadcrumb, Empty } from 'antd';
import {
  EditTwoTone,
  DeleteTwoTone,
  PlusCircleTwoTone,
  MinusCircleTwoTone,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeNavigationHighlight, changeNavigationLink } from '../redux/layout/navigationSlice';

const { TextArea } = Input;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link>{text}</Link>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link>Invite {record.name}</Link>
        <Link>Delete</Link>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Categories = () => {
  const dispatch = useDispatch();
  // const current = useSelector((state) => state.navigation.hightlight);
  // const link = useSelector((state) => state.navigation.link);

  return (
    <LayoutComponent>
      <div className="p-5">
        <Row justify="space-between" className="mb-5">
          <div>
            <h1>Categories</h1>

            <div className="mt-1">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(changeNavigationHighlight('1'));
                      dispatch(changeNavigationLink('/'));
                    }}
                  >
                    Home
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Link to="/categories">Categories</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div>
            <Button type="primary" ghost className="py-2.5">
              Add Category
            </Button>
          </div>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={24} className="p-2 ">
            <Table
              id="box"
              columns={columns}
              dataSource={data}
              scroll={{ y: 300 }}
              style={{ height: '400px' }}
            />
          </Col>
          <Col lg={12} md={12} sm={24} className="p-2 ">
            <TextArea
              rows={4}
              placeholder="maxLength is 6"
              maxLength={6}
              disabled
              style={{ height: '355px' }}
            >
            </TextArea>
            
          </Col>
        </Row>
      </div>
    </LayoutComponent>
  );
};

export default Categories;
