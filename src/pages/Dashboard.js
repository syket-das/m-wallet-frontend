import { Card, Col, Row } from 'antd';
import React from 'react';
import LineChart from '../components/chart/LineChart';
import PieChart from '../components/chart/PieChart';
import LayoutComponent from '../components/Layout';
import RecentTranscations from '../components/RecentTranscations';

const Dashboard = () => {
  return (
    <div>
      <LayoutComponent>
        <div className="m-5">
          <Row>
            <Col sm={8}>
              <div class=" p-10 flex flex-col space-y-3">
                <div
                  class="bg-blue-100 w-full h-full "
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
            <Col sm={8}>
              <div class=" p-10 flex flex-col space-y-3">
                <div
                  class="bg-blue-100 w-full h-full "
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
            <Col sm={8}>
              <div class=" p-10 flex flex-col space-y-3">
                <div
                  class="bg-blue-100 w-full h-full "
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
            <Col md={8}>
              <div class=" p-10 flex flex-col space-y-3">
                <Card
                  style={{
                    width: '100%',
                  }}
                >
                  <PieChart />
                </Card>
              </div>
            </Col>
            <Col md={16}>
              <div class=" p-10 flex flex-col space-y-3">
                <Card
                  style={{
                    width: '100%',
                  }}
                >
                  <LineChart />
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={24}>
              <div class=" p-10 flex flex-col space-y-3">
                <RecentTranscations />
              </div>
            </Col>
          </Row>
        </div>
      </LayoutComponent>
    </div>
  );
};

export default Dashboard;
