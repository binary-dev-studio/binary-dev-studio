import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Card } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import {
  MdOutlineDataUsage,
  MdPalette,
  MdFiberNew,
  MdYard,
  MdKeyboard,
  MdHomeMax,
} from "react-icons/md";
import { hexToRgb } from "../../../../utils/general.utils";
export default function OurService() {
  const [servicesList] = useState([
    {
      icon: <MdOutlineDataUsage />,
      title: "Awesome Support",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
    {
      icon: <MdPalette />,
      title: "Unlimited Colors",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
    {
      icon: <MdFiberNew />,
      title: "Strategy Solutions",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
    {
      icon: <MdYard />,
      title: "Digital Design",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
    {
      icon: <MdKeyboard />,
      title: "Easy to customize",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
    {
      icon: <MdHomeMax />,
      title: "Truly Multipurpose",
      content:
        "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium totam.",
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="services"
        style={{
          // backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "80vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
        className="bg-light"
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
                Our Services
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>

          <Row gutter={[10, 10]} align="middle" justify="center">
            {servicesList.map((service, index) => {
              return (
                <Col
                  key={index}
                  xs={24}
                  lg={7}
                  style={{}}
                >
                  <Card style={{ textAlign: "center" }} hoverable={true} className="service-list-card">
                    <Avatar
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
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>

        </div>
      </div>
      <style jsx="true">
        {`
          .service-icon {
            background-color: transparent;
            color: black;
            outline: 1px solid black;
          }
          .service-img {
            outline: thick solid ${hexToRgb("#0e6cff", 0.2)};
          }

          .service-list-card:hover .service-icon {
            background-color: #0e6cff;
            color: white;
            outline: thick solid ${hexToRgb("#0e6cff", 0.2)};
          }
        `}
      </style>
    </React.Fragment>
  );
}
