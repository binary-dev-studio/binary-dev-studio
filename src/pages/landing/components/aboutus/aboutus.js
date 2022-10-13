import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Card, Image } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import {
  MdLightbulbOutline,
  MdOutlineInventory2,
  MdOutlineNature,
} from "react-icons/md";
import { hexToRgb } from "../../../../utils/general.utils";
export default function AboutUs() {
  const [aboutList] = useState([
    {
      icon: <MdLightbulbOutline size={25} />,
      title: "Creative Design",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
    },
    {
      icon: <MdOutlineInventory2 size={25} />,
      title: "Strategy Solutions",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
    },
    {
      icon: <MdOutlineNature size={25} />,
      title: "Dynamic Growth",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni.",
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="about"
        style={{
          backgroundColor: "white",
          backgroundImage: `url("images/bg-about.3e8750175aa33f09adea.png")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "90vh",
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
                About Us
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>

          <Row gutter={[10, 10]} align="middle" justify="center">
            {aboutList.map((about, index) => {
              return (
                <Col
                  key={index}
                  xs={24}
                  lg={7}
                  style={{}}
                  className="about-list-card"
                >
                  <Card style={{ textAlign: "center", border: "none" }}>
                    <Avatar
                      size={60}
                      icon={about.icon}
                      overlayContainerStyle={{ borderWidth: 2 }}
                      className="about-icon"
                    />
                    <div>
                      <Typography.Title level={3} style={{ fontWeight: 300 }}>
                        {about.title}
                      </Typography.Title>
                    </div>
                    <div>
                      <Typography.Paragraph>
                        {about.content}
                      </Typography.Paragraph>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <Row align="middle" gutter={[20, 20]}>
            <Col span={12} xs={24} md={12}>
              <Typography.Title
                level={3}
                style={{ fontWeight: 300, fontSize: 30 }}
              >
                Performancect Solution For Small Businesses
              </Typography.Title>
              <Typography.Paragraph style={{ marginTop: 20 }}>
                Ut enim ad minima veniam quis nostrum exercitationem ullam
                corporis at suscipit laboriosam nisi ut aliquid a commodi
                consequatur Quis autem.
              </Typography.Paragraph>
            </Col>
            <Col span={12} xs={24} md={12}>
              <Image
                src="/images/about-img.cb735e1c0599d2b5739c.jpg"
                style={{ maxWidth: 500 }}
                preview={false}
                className="about-img"
              />
            </Col>
          </Row>
        </div>
      </div>
      <style jsx="true">
        {`
          .about-icon {
            background-color: transparent;
            color: black;
            outline: 1px solid black;
          }
          .about-list-card:hover .about-icon {
            background-color: #0e6cff;
            color: white;
            outline: thick solid ${hexToRgb("#0e6cff", 0.2)};
          }
          .about-img {
            outline: thick solid ${hexToRgb("#0e6cff", 0.2)};
          }
        `}
      </style>
    </React.Fragment>
  );
}
