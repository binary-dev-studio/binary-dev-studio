import React, { useState } from "react";
import { Row, Col, Typography, Card, Image, Divider } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { FaArrowRight } from "react-icons/fa";
import {
  AppButtonFilled,
  AppButtonBorderless,
} from "../../../../components/appbutton/appbutton";
export default function Blogs() {
  const [blogsList] = useState([
    {
      date: "01 Jan 2019",
      image_src: "images/blog/img-1.jpg",
      designation: "ui/ux designer",
      title: "Quis autem reprehenderit",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti corrupti.",
    },
    {
      date: "02 Jan 2019",
      image_src: "images/blog/img-2.jpg",
      designation: "WEB DEVELOPER",
      title: "At vero eos accusamus",
      content:
        "Et harum quidem rerum it facilis est et expedita distinctio a libero tempore cumsoluta.",
    },
    {
      date: "03 Jan 2019",
      image_src: "images/blog/img-3.jpg",
      designation: "WEB DEVELOPER",
      title: "Et harum quidem rerum",
      content:
        "Temporibus autemes quibusdam et aut offici debitis rerum necessitatibus recusandae.",
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="blog"
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
                The Blog
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>

          <Row
            gutter={[10, 40]}
            align="middle"
            justify="space-between"
            wrap={true}
          >
            {blogsList.map((blog, index) => {
              return (
                <Col
                  key={index}
                >
                  <div>
                    <div>
                      <Image
                        width={330}
                        height={250}
                        style={{ objectFit: "cover" }}
                        preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                      <AppButtonFilled
                        color="secondary"
                        style={{ position: "absolute", top: 0, left: 0 }}
                        type="primary"
                      >
                        {blog.date}
                      </AppButtonFilled>

                      <div
                        style={{
                          width: 270,
                          height: 200,
                          position: "relative",
                          left: 30,
                          right: 30,
                          top: -30
                        }}
                      >
                        <Card
                          bodyStyle={{
                            textAlign: "center",
                            margin: 0,
                          }}
                          hoverable={true}
                        >
                          <Typography.Text className="text-uppercase f-13 mb-2 text-muted">
                            {blog.designation}
                          </Typography.Text>
                          <Typography.Title
                            level={5}
                            className="font-weight-normal f-18"
                          >
                            {blog.title}
                          </Typography.Title>
                          <Typography.Paragraph className="text-muted f-14 text-ellipsis">
                            {blog.content}
                          </Typography.Paragraph>
                          <Divider dashed style={{ margin: 5, padding: 0 }} />
                          <AppButtonBorderless
                            href="#"
                            className="read-more"
                            color="secondary"
                          >
                            Read More{" "}
                            <FaArrowRight className="read-more-arrow" />
                          </AppButtonBorderless>
                          <Divider dashed style={{ margin: 5, padding: 0 }} />
                        </Card>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <style jsx="true">
        {`
          .read-more {
            margin-top: 0px;
          }
          .read-more .read-more-arrow {
            opacity: 0;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
          }

          .read-more:hover .read-more-arrow {
            opacity: 1;
            margin-left: 5px;
            -webkit-transition: all 0.5s;
            transition: all 0.5s;
          }
        `}
      </style>
    </React.Fragment>
  );
}
