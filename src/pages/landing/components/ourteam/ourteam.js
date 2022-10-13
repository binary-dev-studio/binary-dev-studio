import React, { useState } from "react";
import { Row, Col, Typography, Image, Card } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { useTheme } from "styled-components";

// https://nicepage.com/we/519028/meet-our-big-team-wordpress-ecommerce
// http://demo.ovathemes.com/infetech/privacy-policy/
export default function OurTeam() {
  const theme = useTheme();
  const [ourteam] = useState([
    {
      name: "Prabin Karki",
      designation: "Sr. Software Developer",
      message: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the.`,
      imgUrl:
        "https://drive.google.com/uc?export=view&id=1E3aUYBe0ZP1_pw3WF9u-SYbifi30wRTd",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Jarina Karki",
      designation: "Web Developer",
      message: `Nisi Lorem fugiat ullamco occaecat elit Lorem labore ipsum. Quis culpa irure laborum amet. Voluptate ipsum officia Lorem velit aliquip. Reprehenderit et laborum consectetur occaecat quis.
                Mollit velit aliqua officia excepteur dolore nisi minim exercitation culpa aliquip in ad in duis. Dolor ea dolore
                nostrud laboris proident velit aute velit. Occaecat sunt eu enim dolor sint qui nulla culpa adipisicing sint.`,
      imgUrl: "http://www.webcoderskull.com/img/team3.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Milan Shrestha",
      designation: "Sr. Software Developer",
      message: `Cupidatat nostrud in quis ad consectetur deserunt aliquip pariatur laborum laborum. Commodo cupidatat pariatur ea in officia cillum. Laborum aliquip labore esse labore consequat eiusmod ullamco voluptate dolore nisi commodo nisi. Ut ea duis in qui do proident incididunt. Amet proident commodo nulla duis incididunt excepteur aliquip. Magna qui aliqua ipsum magna fugiat consectetur qui sint excepteur. Dolor sit et irure velit nulla non ex aute et voluptate elit.
                Consectetur excepteur sit eu nulla ipsum labore exercitation laborum veniam. Non voluptate laboris ipsum cupidatat occaecat. Ad aliqua dolore ullamco id id nostrud.
                Adipisicing proident ad excepteur ea eiusmod aute minim dolore qui pariatur elit. Consectetur
                commodo dolore dolore adipisicing consequat ullamco aliqua eu eiusmod nostrud fugiat commodo.`,
      imgUrl: "http://www.webcoderskull.com/img/team4.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
    {
      name: "Ramesh Nagal",
      designation: "Sr. Software Developer",
      message: `Ad mollit aliqua eiusmod id ea. Laborum sunt ex fugiat incididunt dolor commodo. Id sint commodo irure tempor Lorem culpa velit duis quis occaecat eiusmod fugiat.
                Ad esse elit officia qui ea eiusmod. Sunt culpa cillum deserunt aliqua commodo laboris non sunt id deserunt occaecat nisi anim. Ullamco est magna et consectetur incididunt
                in aute sunt eu culpa incididunt nostrud id. Enim ea sunt nostrud quis ex consequat ad ut ipsum irure duis veniam minim.
                Dolor consectetur incididunt exercitation culpa nulla.`,
      imgUrl: "http://www.webcoderskull.com/img/team2.png",
      facebookLink: "#",
      twitterLink: "#",
      instagramLink: "#",
      portfolio: "#",
    },
  ]);

  return (
    <React.Fragment>
      <div
        id="our-team"
        style={{
          // backgroundColor: "#0e6cff",
          // backgroundImage: `url("images/faqs_bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "70vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
        className="bg-gradient"
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
                Meet Our Team
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
            {ourteam.map((member, index) => {
              return (
                <Col key={index}>
                  <div>
                    <div>
                      <Image
                        width={300}
                        height={250}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          border: "1px solid black",
                        }}
                        preview={false}
                        src={member.imgUrl}
                      />

                      <div
                        style={{
                          width: 280,
                          minHeight: 200,
                          position: "relative",
                          left: 10,
                          right: 10,
                          top: -30,
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
                            {member.designation}
                          </Typography.Text>
                          <Typography.Title
                            level={5}
                            className="font-weight-normal f-18"
                          >
                            {member.name}
                          </Typography.Title>
                          <Typography.Paragraph className="text-muted f-14 text-ellipsis">
                            {member.message}
                          </Typography.Paragraph>
                          <div className="social-links">
                            <ul className="follow-icon list-inline mb-0">
                              {member.facebookLink && (
                                <li className="list-inline-item f-15">
                                  <a
                                    href={member.facebookLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                </li>
                              )}
                              {member.twitterLink && (
                                <li className="list-inline-item f-15">
                                  <a
                                    href={member.twitterLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-twitter"></i>
                                  </a>
                                </li>
                              )}
                              {member.instagramLink && (
                                <li className="list-inline-item f-15">
                                  <a
                                    href={member.instagramLink}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-instagram"></i>
                                  </a>
                                </li>
                              )}

                              {member.portfolio && (
                                <li className="list-inline-item f-15">
                                  <a
                                    href={member.portfolio}
                                    className="social-icon text-muted"
                                  >
                                    <i className="fa fa-code"></i>
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
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
      <style jsx="true">{`
        .social-links .follow-icon li {
          margin: 0 3px !important;
        }

        .social-links .follow-icon li a {
          background-color: transparent;
          height: 38px;
          width: 38px;
          display: block;
          line-height: 38px;
          text-align: center;
          border-radius: 50px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .social-links .follow-icon li a:hover {
          background-color: ${theme.palette.primary.main};
          color: ${theme.palette.primary.contrastText} !important;
          height: 38px;
          width: 38px;
          position: relative;
          display: block;
          line-height: 38px;
          text-align: center;
          border-radius: 50px;
          -webkit-box-shadow: 0 0 0 6px rgba(255, 135, 0, 0.15);
          box-shadow: 0 0 0 6px rgba(255, 135, 0, 0.15);
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </React.Fragment>
  );
}
