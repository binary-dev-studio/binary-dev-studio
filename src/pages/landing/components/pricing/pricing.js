import React, { useState } from "react";
import { Row, Col, Typography, Card, List } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { AppButtonGhost } from "../../../../components/appbutton/appbutton";
export default function Pricing() {
  const [planList] = useState([
    {
      name: "Basic",
      price: "19.00",
      bandwidth: "1GB",
      space: "100MB",
      support: "No",
      domain: "05",
      fees: "No",
      is_active: false,
    },
    {
      name: "Popular",
      price: "39.00",
      bandwidth: "1.5GB",
      space: "500MB",
      support: "Yes",
      domain: "10",
      fees: "No",
      is_active: true,
    },
    {
      name: "Advance",
      price: "80.00",
      bandwidth: "2GB",
      space: "1GB",
      support: "Yes",
      domain: "15",
      fees: "No",
      is_active: false,
    },
    {
      name: "Premium",
      price: "19.00",
      bandwidth: "2.5GB",
      space: "1.5GB",
      support: "No",
      domain: "20",
      fees: "Yes",
      is_active: false,
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="pricing"
        style={{
          backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "80vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
      >
        <div className="container">
          <Row style={{ marginBottom: 40 }}>
            <Col>
              <Typography.Title
                level={2}
                style={{
                  marginBottom: 0,
                  textTransform: "uppercase",
                  fontWeight: 300,
                }}
              >
                Our Pricing
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>

          <Row
            gutter={[10, 10]}
            align="middle"
            justify="space-between"
            wrap={true}
          >
            {planList.map((plan, index) => {
              return (
                <Col
                  key={index}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={6}
                  className="pricing-list-card"
                >
                  <Card
                    bodyStyle={{
                      padding: 0,
                      margin: 0,
                    }}
                    hoverable={true}
                  >
                    <div className="d-flex justify-content-between p-3 pricing-card-header">
                      <div style={{fontSize: 18}}>
                        {plan.name}
                      </div>
                      <div style={{fontSize:18}}>
                        <sup>$</sup>
                        <span style={{fontWeight:'bolder'}}>{plan.price}</span>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <List.Item>Bandwidth:{plan.bandwidth}</List.Item>
                      <List.Item>Onlinespace:{plan.space}</List.Item>
                      <List.Item>Support:{plan.support}</List.Item>
                      <List.Item>Domain:{plan.domain}</List.Item>
                      <List.Item>Hidden Fees:{plan.fees}</List.Item>
                    </div>
                    <div className="p-3 text-center">
                      <AppButtonGhost color="secondary" size="large">
                        BUY NOW
                      </AppButtonGhost>
                    </div>
                    {/* <div className="price bg-light position-relative p-4">
                                                    <div className="float-left">
                                                        <h5 className="text-dark title mt-2 font-weight-normal f-18 mb-0">{plan.name}</h5>
                                                    </div>
                                                    <div className="">
                                                        <h2 className="text-dark font-weight-normal text-right mb-0"><sup>$</sup>{plan.price}</h2>
                                                    </div>
                                                </div> */}
                    {/* <Avatar
                      size={60}
                      icon={service.icon}
                      overlayContainerStyle={{ borderWidth: 2 }}
                      className="service-icon"
                    />
                    <div>
                      <Typography.Title level={3} style={{ fontWeight: 300 }}>
                        {service.title}
                      </Typography.Title>
                    </div>
                    <div>
                      <Typography.Paragraph>
                        {service.content}
                      </Typography.Paragraph>
                    </div> */}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <style jsx="true">
        {`
          .pricing-card-header {
            position: relative;
            background-color: #d8dde6;
            width: 100% !important;
          }

          .pricing-card-header:after {
            content: "";
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-top: solid 10px #d8dde6;
            border-left: solid 10px transparent;
            border-right: solid 10px transparent;
          }

          .pricing-list-card:hover .pricing-card-header {
            background-color: blue;
            color:white;
          }
          .pricing-list-card:hover .pricing-card-header:after {
            border-top: solid 10px blue;
          }
        `}
      </style>
    </React.Fragment>
  );
}
