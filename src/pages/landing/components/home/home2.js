import React from "react";
import { Row, Col, Typography, Image } from "antd";
import Pulse from "react-reveal/Pulse";
import { AppButtonFilled } from "../../../../components/appbutton/appbutton";
import { HashLink } from "react-router-hash-link";

export default function Home2() {
  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundColor: "#0e6cff",
          backgroundImage: `url("images/home-2-bg.e74a5beee052680d051a.png")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "100vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
      >
        <Row className="container" align="middle">
          <Col span={12} xs={24} md={12}>
            <Typography.Title style={{ color: "white", fontSize: "5vw" }}>
              Make Your Marketing Real.
            </Typography.Title>
            <Typography.Text style={{ color: "white", marginTop: 20 }}>
              Ut enim ad minima veniam quis nostrum exercitationem ullam
              corporis at suscipit laboriosam nisi ut aliquid a commodi
              consequatur Quis autem.
            </Typography.Text>
            <div style={{ marginTop: 30 }}>
              <AppButtonFilled color="primary" size="large">
                <HashLink to="#about">LEARN MORE</HashLink>
              </AppButtonFilled>
            </div>
          </Col>
          <Col span={12} xs={24} md={12}>
            <Pulse forever duration={5000}>
              <Image
                src="/images/home-2-img.1c7314c691a2af56e41b.png"
                width={"100%"}
                preview={false}
              />
            </Pulse>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}
