import React, { useState } from "react";
import { Row, Col, Typography, Card, Form, Input, Avatar } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";
import { AppButtonFilled } from "../../../../components/appbutton/appbutton";
export default function ContactUs() {
  const [contactDetails] = useState({
    contact: "01-9840096080",
    email: "youremailid@gmail.com",
    locationName: "3179 Raccoon Run Seattle, WA 98109",
    embededMapSrcHref:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38518.2609239016!2d85.37668103268217!3d27.630051037034136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d1be9baf71%3A0x48893d580864792f!2sPatan%20Hospital!5e0!3m2!1sen!2snp!4v1657716409338!5m2!1sen!2snp",
    socialLinks: [
      {
        name: "facebook",
        faIcon: "fa fa-facebook",
        link: "#",
      },
      {
        name: "twitter",
        faIcon: "fa fa-twitter",
        link: "#",
      },
      {
        name: "google",
        faIcon: "fa fa-google-plus",
        link: "#",
      },
      {
        name: "linkedin",
        faIcon: "fa fa-linkedin",
        link: "#",
      },
      {
        name: "whatsapp",
        faIcon: "fa fa-whatsapp",
        link: "#",
      },
    ],
  });
  return (
    <React.Fragment>
      <div
        id="contact-us"
        style={{
          // backgroundColor: "white",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "70vh",
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
                Get In Touch
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>

          <Card
            className="shadow-sm p-1 bg-white"
            bodyStyle={{ backgroundColor: "white",padding:50 }}
          >
            <Row
              gutter={[40, 20]}
              wrap={true}
            >
              <Col xs={24} md={16}>
                <div className="contact-form">
                  <Form>
                    <Row gutter={[10, 10]}>
                      <Col xs={24} sm={12}>
                        <Form.Item>
                          <Input
                            placeholder="Name"
                            style={{ outline: "none" }}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12}>
                        <Form.Item>
                          <Input placeholder="Email" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item>
                      <Input placeholder="Subject" />
                    </Form.Item>

                    <Form.Item>
                      <Input.TextArea rows={4} placeholder="Message" />
                    </Form.Item>

                    <AppButtonFilled size="large">SEND MESSAGE</AppButtonFilled>
                  </Form>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-box">
                  <div className="contact-info">
                    <div className="d-flex align-items-center">
                      <div style={{ marginRight: 20 }}>
                        <Avatar
                          className="contact-icon"
                          size={25}
                          style={{ backgroundColor: "transparent" }}
                          icon={<FaPhone className="text-muted" />}
                        />
                      </div>
                      <div>
                        <p className="mb-0 info-title f-8 text-muted">Call :</p>
                        <p className="mb-0 f-8">
                          <Link to="" className="text-muted">
                            {contactDetails.contact}
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mt-3">
                      <div style={{ marginRight: 20 }}>
                        <Avatar
                          className="contact-icon"
                          size={25}
                          style={{ backgroundColor: "transparent" }}
                          icon={<FaEnvelope className="text-muted" />}
                        />
                      </div>
                      <div>
                        <p className="mb-0 info-title f-8 text-muted">Email :</p>
                        <p className="mb-0 f-8 ">
                          <Link to="" className="text-muted">
                            {contactDetails.email}
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex align-items-center mt-3">
                        <div style={{ marginRight: 20 }}>
                          <Avatar
                            className="contact-icon"
                            size={25}
                            style={{ backgroundColor: "transparent" }}
                            icon={<FaMapMarked className="text-muted" />}
                          />
                        </div>
                        <div>
                          <p className="mb-0 info-title f-8 text-muted">Location :</p>
                          <p className="mb-0 f-8">
                            <Link to="" className="text-muted">
                              {contactDetails.locationName}
                            </Link>
                          </p>
                        </div>
                      </div>
                      {contactDetails.embededMapSrcHref && (
                        <div className="contact-map mt-2">
                          <iframe
                          title="contact-map"
                            src={contactDetails.embededMapSrcHref}
                            width={"100%"}
                            height={100}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="follow mt-3">
                    <h4 className="text-dark mb-3">Follow</h4>
                    <ul className="follow-icon list-inline mt-32 mb-0">
                      {contactDetails.socialLinks.map(
                        (social, key) =>
                          social.link && (
                            <li className="list-inline-item f-15" key={key}>
                              <Link
                                to={social.link}
                                className="social-icon text-muted"
                              >
                                <i className={social.faIcon}></i>
                              </Link>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <style jsx="true">{`
        .contact-box .follow-icon li {
          margin: 0 3px !important;
        }

        .contact-box .follow-icon li a {
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

        .contact-box .follow-icon li a:hover {
          background-color: #ff8700;
          color: #ffffff !important;
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

        .contact-box .contact-icon {
          border: 1px solid #bdbdbd;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </React.Fragment>
  );
}
