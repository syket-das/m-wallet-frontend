import { Card, Col, Row } from 'antd';
import React from 'react';
import { useLocation } from 'react-router-dom';
import LineChart from '../components/chart/LineChart';
import PieChart from '../components/chart/PieChart';
import LayoutComponent from '../components/Layout';
import RecentTranscations from '../components/RecentTranscations';

const Dashboard = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <LayoutComponent path={location.pathname}>
        <div className="m-5">
          <Row>
            <Col sm={24} md={8}>
              <div className=" lg:p-10 md:p-2 sm:p-2  flex flex-col space-y-3 h-full">
                <div
                  className="bg-blue-100 w-full h-full "
                  style={{
                    display: 'flex',
                    // alignItems: 'center',
                  }}
                >
                  <div
                    className=" bg-green-900 w-1/4 h-16 flex align-middle justify-center "
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <div className="text-white text-2xl">$</div>
                  </div>
                  <div className="text-center w-full ">
                    <div className="font-medium	">Total Income</div>
                    <div className="text-3xl font-bold	">500</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={24} md={8}>
              <div className=" lg:p-10 md:p-2 sm:p-2 flex flex-col space-y-3 h-full">
                <div
                  className="bg-blue-100 w-full h-full "
                  style={{
                    display: 'flex',
                    // alignItems: 'center',
                  }}
                >
                  <div
                    className=" bg-red-900 w-1/4 h-16 flex align-middle justify-center "
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <div className="text-white text-2xl">$</div>
                  </div>
                  <div className="text-center w-full ">
                    <div className="font-medium	">Total Expence</div>
                    <div className="text-3xl font-bold	">500</div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={24} md={8}>
              <div className=" lg:p-10 md:p-2 sm:p-2 flex flex-col space-y-3">
                <div
                  className="bg-blue-100 w-full h-full "
                  style={{
                    display: 'flex',
                    // alignItems: 'center',
                  }}
                >
                  <div
                    className=" bg-blue-900 w-1/4 h-16 flex align-middle justify-center "
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <div className="text-white text-2xl">$</div>
                  </div>
                  <div className="text-center w-full ">
                    <div className="font-medium	">Balance</div>
                    <div className="text-3xl font-bold	">500</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={8} sm={24}>
              <div className=" lg:p-10 md:p-2 sm:p-2 flex flex-col space-y-3">
                <Card
                  className="bg-blue-5"
                  style={{
                    width: '100%',
                    padding: '0px !important',
                  }}
                >
                  <div className="text-2xl font-bold text-center">
                    Expence By Category
                  </div>
                  <PieChart />
                </Card>
              </div>
            </Col>
            <Col md={16} sm={24}>
              <div className=" lg:p-10 md:p-2 sm:p-2 flex flex-col space-y-3">
                <Card
                  style={{
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <div className="text-2xl font-bold text-center">
                    Income vs Expence
                  </div>

                  <LineChart />
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={24} sm={24}>
              <div className=" lg:p-10 md:p-2 sm:p-2 flex flex-col space-y-3">
              <Card>

                <div className="text-2xl font-bold text-center">
                  Recent Transcations
                </div>

                <RecentTranscations />
              </Card>
              </div>
            </Col>
          </Row>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default Dashboard;
