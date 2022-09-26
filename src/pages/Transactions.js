import { SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Input, Row, Space, Table } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LayoutComponent from '../components/Layout';
import {
  changeNavigationHighlight,
  changeNavigationLink,
} from '../redux/layout/navigationSlice';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const Transactions = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <div>
      <LayoutComponent>
        <div className="p-5">
          <Row justify="space-between" className="mb-5">
            <div>
              <h1>Transactions</h1>

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
                    <Link to="/transactions">Transactions</Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <div>
              <Button type="primary" ghost className="py-2.5">
                Add Transaction
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
              />
            </Col>
            <Col lg={12} md={12} sm={24} className="p-2 ">
              <TextArea
                rows={4}
                placeholder="maxLength is 6"
                maxLength={6}
                disabled
                style={{
                  minHeight: '81%',
                }}
              ></TextArea>
            </Col>
          </Row>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default Transactions;
